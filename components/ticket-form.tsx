'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lock } from "lucide-react";
import EmailSubscriber from "@/components/email-subscriber";

const ticketPreOrderSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  ticketType: z.enum(["standard", "deluxe", "vip"]),
  subscribeNewsletter: z.boolean().default(false),
});

type TicketPreOrder = z.infer<typeof ticketPreOrderSchema>;

export default function TicketForm() {
  const { toast } = useToast();

  const form = useForm<TicketPreOrder>({
    resolver: zodResolver(ticketPreOrderSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      ticketType: "standard",
      subscribeNewsletter: false,
    },
  });

  const preOrderMutation = useMutation({
    mutationFn: async (data: TicketPreOrder) => {
      const response = await apiRequest("POST", "/api/ticket-preorders", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Successful!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: TicketPreOrder) => {
    preOrderMutation.mutate(data);
  };

  const ticketTypes = [
    {
      type: "standard" as const,
      name: "Standard",
      price: "$480",
      originalPrice: "$600",
      features: [
        "2-day conference access (Days 3 & 4)",
        "Breakfast, lunch, dinner, and coffee",
        "Opening & closing parties",
        "Best for SEO Practitioners",
      ],
      popular: false,
    },
    {
      type: "deluxe" as const,
      name: "Deluxe",
      price: "$720",
      originalPrice: "$900",
      features: [
        "Everything in Standard, plus..",
        "Days 1-2",
        "Front-row seating",
        "Best for Marketing Managers/Directors",
      ],
      popular: true,
      hideCheckOnFirst: true,
    },
    {
      type: "vip" as const,
      name: "VIP",
      price: "$1,440",
      originalPrice: "$1,800",
      features: [
        "Full conference access: Days 1-5 (5 days total)",
        "1 night stay at a separate 5-star hotel (Day 5)",
        "Best for Executives and Founders",
      ],
      popular: false,
      bestValue: true,
      hideCheckOnFirst: false,
    },
  ];

  return (
    <section id="tickets" className="py-20 bg-muted" data-testid="section-tickets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ticket-title">
            Secure Your Early Bird Tickets
          </h2>
          <p className="text-lg text-muted-foreground">
            Grab your tickets now to lock in these savings before they sell out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <Card 
              key={ticket.type}
              className={`hover-lift hover-glow transition-all slide-up border border-border ${
                ticket.popular || ticket.bestValue ? "relative" : ""
              }`}
              style={{ animationDelay: ticket.type === 'standard' ? '0.1s' : ticket.type === 'deluxe' ? '0.2s' : '0.3s' }}
              data-testid={`card-ticket-${ticket.type}`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground" data-testid="badge-most-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              {ticket.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white" data-testid="badge-best-value">
                    Best Value
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-ticket-name-${ticket.type}`}>
                  {ticket.name}
                </h3>
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-2" data-testid={`badge-early-bird-${ticket.type}`}>
                    Early Bird Price
                  </Badge>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary" data-testid={`text-ticket-price-${ticket.type}`}>
                    {ticket.price}
                  </span>
                  <span className="text-muted-foreground line-through ml-2" data-testid={`text-ticket-original-price-${ticket.type}`}>
                    {ticket.originalPrice}
                  </span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${index === 0 && ticket.hideCheckOnFirst ? 'font-semibold text-muted-foreground' : ''}`} data-testid={`feature-${ticket.type}-${index}`}>
                      {!(index === 0 && ticket.hideCheckOnFirst) && <Check className="text-green-500 mr-2 h-4 w-4" />}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  data-testid={`button-buy-${ticket.type}`}
                >
                  Buy {ticket.name} Ticket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <EmailSubscriber />

        <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-lg" data-testid="refund-policy">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-lg font-bold text-green-800 mb-2">100% Full Refund Policy</h3>
          <p className="text-base font-medium text-green-700">
            Get a complete refund if you cancel <strong>30 days or more</strong> before the conference starts.
          </p>
          <p className="text-sm text-green-600 mt-1">Risk-free ticket purchase with peace of mind</p>
        </div>

      </div>
    </section>
  );
}
