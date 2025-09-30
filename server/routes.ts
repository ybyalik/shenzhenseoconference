import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTicketPreOrderSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Ticket pre-order endpoint
  app.post("/api/ticket-preorders", async (req, res) => {
    try {
      const validatedData = insertTicketPreOrderSchema.parse(req.body);
      
      // Check if email already exists
      const existingPreOrder = await storage.getTicketPreOrderByEmail(validatedData.email);
      if (existingPreOrder) {
        return res.status(400).json({ 
          message: "This email has already been registered for Super Early Bird tickets." 
        });
      }

      const preOrder = await storage.createTicketPreOrder(validatedData);
      
      res.status(201).json({
        message: "Thank you for your Super Early Bird registration! We'll contact you soon with payment details.",
        preOrder: {
          id: preOrder.id,
          firstName: preOrder.firstName,
          lastName: preOrder.lastName,
          email: preOrder.email,
          ticketType: preOrder.ticketType,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Please check your form data",
          errors: error.errors,
        });
      }
      
      console.error("Error creating ticket pre-order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all pre-orders (for admin purposes)
  app.get("/api/ticket-preorders", async (req, res) => {
    try {
      const preOrders = await storage.getAllTicketPreOrders();
      res.json(preOrders);
    } catch (error) {
      console.error("Error fetching pre-orders:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Newsletter signup endpoint
  app.post("/api/newsletter-signup", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({ message: "Please enter a valid email address" });
      }

      // For now, just return success - in production this would integrate with email service
      res.json({ message: "Thank you for subscribing to our newsletter!" });
    } catch (error) {
      console.error("Error with newsletter signup:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // AWeber token refresh helper
  let cachedAccessToken: string | null = null;
  let tokenExpiresAt = 0;

  async function getValidAWeberToken(): Promise<string> {
    const now = Date.now();
    
    // Return cached token if still valid
    if (cachedAccessToken && now < tokenExpiresAt) {
      return cachedAccessToken;
    }

    // Try to refresh token
    const refreshToken = process.env.AWEBER_REFRESH_TOKEN;
    const clientId = process.env.AWEBER_CLIENT_ID;
    const clientSecret = process.env.AWEBER_CLIENT_SECRET;

    if (!refreshToken || !clientId || !clientSecret) {
      // Fallback to static access token if refresh credentials not available
      const staticToken = process.env.AWEBER_ACCESS_TOKEN;
      if (!staticToken) {
        throw new Error("No AWeber credentials configured");
      }
      return staticToken;
    }

    // Refresh the token
    const tokenUrl = 'https://auth.aweber.com/oauth2/token';
    const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }).toString(),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Token refresh failed:", error);
      throw new Error("Failed to refresh AWeber token");
    }

    const tokenData = await response.json();
    
    if (!tokenData.access_token) {
      throw new Error("No access token in refresh response");
    }
    
    const newAccessToken = tokenData.access_token as string;
    cachedAccessToken = newAccessToken;
    tokenExpiresAt = now + (tokenData.expires_in * 1000) - 60000; // Refresh 1 min before expiry
    
    console.log("AWeber token refreshed successfully");
    return newAccessToken;
  }

  // AWeber subscriber endpoint
  app.post("/api/aweber-subscribe", async (req, res) => {
    try {
      const { email, name } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({ message: "Please enter a valid email address" });
      }

      if (!name || !z.string().min(2).safeParse(name).success) {
        return res.status(400).json({ message: "Please enter your name" });
      }

      // Check for required AWeber environment variables
      const aweberAccountId = process.env.AWEBER_ACCOUNT_ID;
      const aweberListId = process.env.AWEBER_LIST_ID;

      if (!aweberAccountId || !aweberListId) {
        console.error("AWeber account/list credentials not configured");
        return res.status(500).json({ 
          message: "Email notification service is not configured. Please contact support." 
        });
      }

      // Get valid access token (refreshes if needed)
      const accessToken = await getValidAWeberToken();

      // Add subscriber to AWeber list
      const aweberUrl = `https://api.aweber.com/1.0/accounts/${aweberAccountId}/lists/${aweberListId}/subscribers`;
      
      const aweberResponse = await fetch(aweberUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
          tags: ['early-bird-notification', 'seo-conference-2026'],
        }),
      });

      if (!aweberResponse.ok) {
        const errorData = await aweberResponse.json().catch(() => ({}));
        console.error("AWeber API error:", errorData);
        
        // Check if subscriber already exists
        if (aweberResponse.status === 400 && errorData.error?.message?.includes('already subscribed')) {
          return res.status(400).json({ 
            message: "You're already subscribed to our Early Bird notification list!" 
          });
        }
        
        throw new Error(`AWeber API error: ${aweberResponse.status}`);
      }

      // Parse response only if there's content
      let aweberData = null;
      const contentType = aweberResponse.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseText = await aweberResponse.text();
        if (responseText) {
          aweberData = JSON.parse(responseText);
          console.log("Subscriber added to AWeber:", aweberData);
        }
      }

      res.json({ 
        message: "Successfully subscribed! You'll be notified when Early Bird tickets are released.",
        subscriber: { email, name }
      });
    } catch (error) {
      console.error("Error subscribing to AWeber:", error);
      res.status(500).json({ 
        message: "Unable to subscribe at this time. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
