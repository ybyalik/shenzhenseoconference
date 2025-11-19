'use client';

import type { Metadata } from 'next';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, Phone, Building2, User, Sparkles, Globe, TrendingUp, Users } from "lucide-react";
import { platinumSponsors, goldSponsors, silverSponsors } from "@/lib/sponsors-data";

const sponsorshipInquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type SponsorshipInquiryForm = z.infer<typeof sponsorshipInquirySchema>;

export default function Sponsors() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<SponsorshipInquiryForm>({
    resolver: zodResolver(sponsorshipInquirySchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const inquiryMutation = useMutation({
    mutationFn: async (data: SponsorshipInquiryForm) => {
      const response = await apiRequest("POST", "/api/sponsorship-inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you soon with sponsorship information.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SponsorshipInquiryForm) => {
    inquiryMutation.mutate(data);
  };

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Pioneering Opportunity",
      description: "Be part of history at China's first and largest international SEO conference, putting your brand directly in front of hundreds of decision-makers actively seeking innovative SEO tools, services, and solutions.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "East-West Connection",
      description: "Network with 500+ SEO professionals from both Eastern and Western markets in one unique venue, connecting with decision-makers from top Chinese companies who need your solutions to grow their international presence.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Exclusive Market Access",
      description: "Tap into China's untapped market for SEO brands by connecting directly with businesses looking for solutions to expand globally, giving you unprecedented access to a high-growth market where your expertise is in high demand.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "High-Impact Visibility",
      description: "Gain premium exposure among industry leaders shaping the future of global SEO, positioning your brand at the center of an exclusive networking hub where East meets West and meaningful partnerships are formed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="sponsors-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-sponsors-title">
            Our Valued Sponsors
          </h1>
          <p className="text-xl text-white/90" data-testid="text-sponsors-subtitle">
            Thank you to our sponsors who make this international SEO conference possible
          </p>
        </div>
      </section>

      {/* 2025 Previous Partners */}
      <section className="py-16 bg-gray-900" data-testid="previous-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-partners-title">
              2025 (Our Previous Partners)
            </h2>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                Platinum Sponsors
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {platinumSponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-12 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105" data-testid={`card-platinum-${index}`}>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className={`object-contain ${sponsor.name === 'QuickCreator' ? 'w-48 md:w-auto md:max-h-32 md:max-w-full' : 'max-w-full max-h-32'}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-2">
                Gold Sponsors
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {goldSponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-8 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105" data-testid={`card-gold-${index}`}>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className={`object-contain ${sponsor.name === 'One' ? 'w-20 max-w-full' : 'max-w-full max-h-24'}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-2">
                Silver Sponsors
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {silverSponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-800 transition-all duration-300" data-testid={`card-silver-${index}`}>
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsoring */}
      <section className="py-20" data-testid="why-sponsoring">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-sponsoring-title">
              Why Sponsoring?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" data-testid={`text-benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor Form */}
      <section id="sponsor-form" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" data-testid="become-sponsor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-become-sponsor-title">
              Become a Sponsor
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-become-sponsor-subtitle">
              Interested in sponsoring? Fill out the form below and we'll send you detailed sponsorship information.
            </p>
          </div>

          {!isSubmitted ? (
            <Card className="shadow-xl" data-testid="card-sponsor-form">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          {...form.register("companyName")}
                          placeholder="Your Company"
                          className="pl-10"
                          data-testid="input-company-name"
                        />
                      </div>
                      {form.formState.errors.companyName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-company-name">
                          {form.formState.errors.companyName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          {...form.register("contactName")}
                          placeholder="Your Name"
                          className="pl-10"
                          data-testid="input-contact-name"
                        />
                      </div>
                      {form.formState.errors.contactName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-contact-name">
                          {form.formState.errors.contactName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          {...form.register("email")}
                          type="email"
                          placeholder="you@company.com"
                          className="pl-10"
                          data-testid="input-email"
                        />
                      </div>
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-email">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          {...form.register("phone")}
                          placeholder="+1 (555) 000-0000"
                          className="pl-10"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <Textarea
                      {...form.register("message")}
                      placeholder="Tell us about your sponsorship interest..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg"
                    disabled={inquiryMutation.isPending}
                    data-testid="button-submit"
                  >
                    {inquiryMutation.isPending ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" data-testid="card-success">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2" data-testid="text-success-title">
                  Inquiry Submitted!
                </h3>
                <p className="text-lg text-muted-foreground" data-testid="text-success-message">
                  We'll contact you soon with detailed sponsorship information.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
