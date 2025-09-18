import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertTicketPreOrderSchema, type InsertTicketPreOrder } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lock } from "lucide-react";

export default function TicketForm() {
  const { toast } = useToast();
  const [selectedTicketType, setSelectedTicketType] = useState<"standard" | "deluxe" | "vip">("standard");

  const form = useForm<InsertTicketPreOrder>({
    resolver: zodResolver(insertTicketPreOrderSchema),
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
    mutationFn: async (data: InsertTicketPreOrder) => {
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

  const onSubmit = (data: InsertTicketPreOrder) => {
    preOrderMutation.mutate(data);
  };

  const ticketTypes = [
    {
      type: "standard" as const,
      name: "Super Early Bird Standard",
      price: "$390",
      originalPrice: "$600",
      features: [
        "2-day conference access",
        "All meals & coffee breaks",
        "Networking sessions",
        "Digital conference materials",
      ],
      popular: false,
    },
    {
      type: "deluxe" as const,
      name: "Super Early Bird Deluxe",
      price: "$585",
      originalPrice: "$900",
      features: [
        "4-day conference access",
        "All meals & coffee breaks",
        "Networking sessions",
        "Digital conference materials",
        "Extended workshop access",
      ],
      popular: true,
    },
    {
      type: "vip" as const,
      name: "Super Early Bird VIP",
      price: "$1,170",
      originalPrice: "$1,800",
      features: [
        "Full 5-day conference access",
        "All meals & coffee breaks",
        "VIP networking events",
        "Exclusive speaker meet & greet",
        "Premium conference materials",
        "Front-row seating",
        "Speaker & sponsor networking",
      ],
      popular: false,
    },
  ];

  return (
    <section id="tickets" className="py-20 bg-muted" data-testid="section-tickets">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ticket-title">
            Secure Your Early Bird Tickets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-ticket-description">
            Join industry leaders and save 35% with our exclusive Super Early Bird pricing. 
            Limited spots available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <Card 
              key={ticket.type}
              className={`hover-lift hover-glow cursor-pointer transition-all slide-up ${
                selectedTicketType === ticket.type ? "border-primary ring-2 ring-primary/20" : ""
              } ${ticket.popular ? "border-2 border-primary relative" : ""}`}
              style={{ animationDelay: ticket.type === 'standard' ? '0.1s' : ticket.type === 'deluxe' ? '0.2s' : '0.3s' }}
              onClick={() => {
                setSelectedTicketType(ticket.type);
                form.setValue("ticketType", ticket.type);
              }}
              data-testid={`card-ticket-${ticket.type}`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground" data-testid="badge-most-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-ticket-name-${ticket.type}`}>
                  {ticket.name}
                </h3>
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
                    <li key={index} className="flex items-center" data-testid={`feature-${ticket.type}-${index}`}>
                      <Check className="text-green-500 mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    selectedTicketType === ticket.type 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  data-testid={`button-select-${ticket.type}`}
                >
                  {selectedTicketType === ticket.type ? "Selected" : `Select ${ticket.name.split(" ")[2]}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
