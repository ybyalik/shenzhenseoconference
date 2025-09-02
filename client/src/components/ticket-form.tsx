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
  const [selectedTicketType, setSelectedTicketType] = useState<"standard" | "vip">("standard");

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
      name: "Early Bird Standard",
      price: "$299",
      originalPrice: "$498",
      features: [
        "Full conference access",
        "All meals & coffee breaks",
        "Networking sessions",
        "Digital conference materials",
      ],
      popular: false,
    },
    {
      type: "vip" as const,
      name: "Early Bird VIP",
      price: "$599",
      originalPrice: "$998",
      features: [
        "Everything in Standard",
        "VIP networking dinner",
        "Exclusive speaker meet & greet",
        "Premium conference materials",
        "Front-row seating",
      ],
      popular: true,
    },
  ];

  return (
    <section id="tickets" className="py-20 bg-muted" data-testid="section-tickets">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ticket-title">
            Secure Your Early Bird Tickets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-ticket-description">
            Join industry leaders and save up to 40% with our exclusive early bird pricing. 
            Limited spots available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <Card 
              key={ticket.type}
              className={`hover-lift cursor-pointer transition-all ${
                selectedTicketType === ticket.type ? "border-primary ring-2 ring-primary/20" : ""
              } ${ticket.popular ? "border-2 border-primary relative" : ""}`}
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

        {/* Registration Form */}
        <Card className="border border-border" data-testid="card-registration-form">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="text-form-title">
              Reserve Your Spot Now
            </h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    placeholder="John"
                    className="w-full"
                    data-testid="input-first-name"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-first-name">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    placeholder="Doe"
                    className="w-full"
                    data-testid="input-last-name"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-last-name">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="john@company.com"
                  className="w-full"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  {...form.register("company")}
                  placeholder="Your Company"
                  className="w-full"
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">
                  Ticket Type
                </Label>
                <Select 
                  value={selectedTicketType} 
                  onValueChange={(value: "standard" | "vip") => {
                    setSelectedTicketType(value);
                    form.setValue("ticketType", value);
                  }}
                  data-testid="select-ticket-type"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select ticket type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard" data-testid="option-standard">
                      Early Bird Standard - $299
                    </SelectItem>
                    <SelectItem value="vip" data-testid="option-vip">
                      Early Bird VIP - $599
                    </SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.ticketType && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-ticket-type">
                    {form.formState.errors.ticketType.message}
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter"
                  {...form.register("subscribeNewsletter")}
                  data-testid="checkbox-newsletter"
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Send me updates about the conference and SEO industry news
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                disabled={preOrderMutation.isPending}
                data-testid="button-submit-form"
              >
                <Lock className="mr-2 h-5 w-5" />
                {preOrderMutation.isPending ? "Processing..." : "Secure My Early Bird Ticket"}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center" data-testid="text-payment-info">
                Secure payment processing. Full refund available until 60 days before the event.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
