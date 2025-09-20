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

  const httpServer = createServer(app);
  return httpServer;
}
