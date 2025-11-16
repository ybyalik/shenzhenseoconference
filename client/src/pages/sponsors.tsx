import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, Phone, Building2, User, Sparkles, Globe, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/navigation";

// Import sponsor logos
import quickCreatorLogo from "@assets/quickcreator-min_1763283071011.png";
import ecomExpertsLogo from "@assets/ecomexcperts-logo-white-rgb-min_1763283071010.png";
import whitePressLogo from "@assets/logo-whitepress-white_1763283071010.png";
import globalLogo from "@assets/globalso-2_1763283071010.png";
import interAmplifyLogo from "@assets/interamplify-min_1763283071010.png";
import eclickTechLogo from "@assets/eclickworldwide_1763283071009.png";
import outreacherLogo from "@assets/outreacherio-min_1763283071011.png";
import talkHeapLogo from "@assets/talkheap_1763283071012.png";
import oneLogo from "@assets/One-3@2x-min_1763283071011.png";
import playStackLogo from "@assets/playstack-min-1024x229_1763283071011.png";
import jademondLogo from "@assets/jademond_1763283071010.png";
import cloomTechLogo from "@assets/cloomtech-min_1763283071009.png";
import seoActionLogo from "@assets/seoaction-min_1763283071011.png";
import nowShenzhenLogo from "@assets/nowszlogo-min_1763283071010.png";

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

  const platinumSponsors = [
    { name: "QuickCreator", logo: quickCreatorLogo },
    { name: "Ecom Experts", logo: ecomExpertsLogo },
  ];

  const goldSponsors = [
    { name: "WhitePress", logo: whitePressLogo },
    { name: "Global", logo: globalLogo },
    { name: "InterAmplify", logo: interAmplifyLogo },
    { name: "EClick Tech", logo: eclickTechLogo },
    { name: "Outreacher.io", logo: outreacherLogo },
    { name: "TalkHeap", logo: talkHeapLogo },
    { name: "One", logo: oneLogo },
    { name: "PlayStack", logo: playStackLogo },
  ];

  const silverSponsors = [
    { name: "Jademond", logo: jademondLogo },
    { name: "Cloom Tech", logo: cloomTechLogo },
    { name: "SEO Action", logo: seoActionLogo },
    { name: "Now Shenzhen", logo: nowShenzhenLogo },
  ];

  const opportunities = [
    {
      title: "Opening & closing party",
      price: "$10,000",
      description: "Your brand displayed at the party venue, on beverage cups, and a back-drop featuring your logo where attendees will take photos to share on social media.",
    },
    {
      title: "Attendee badge lanyard sponsorship",
      price: "$5,000",
      description: "Your logo on every attendee's badge lanyard.",
    },
    {
      title: "Wi-Fi sponsorship",
      price: "$5,000",
      description: 'Name the Wi-Fi network after your brand (e.g., "BrandName Wi-Fi").',
    },
    {
      title: "Water bottle sponsorship",
      price: "$5,000",
      description: "Water bottles will be provided Free to all attendees. You can have your logo printed on every water bottle.",
    },
    {
      title: "Lunch sponsorship",
      price: "$5,000",
      description: "Sponsor lunch with your branding on tables.",
    },
  ];

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
      <Navigation />
      
      {/* Hero Section */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-partners-title">
              2025 (Our Previous Partners)
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {[...platinumSponsors, ...goldSponsors, ...silverSponsors].map((sponsor, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-8 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105" data-testid={`card-partner-${index}`}>
                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sponsorship Opportunities */}
      <section className="py-20 bg-muted" data-testid="sponsorship-opportunities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-opportunities-title">
              Additional sponsorship opportunities
            </h2>
            <p className="text-muted-foreground text-lg">1 Slot Each</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all" data-testid={`card-opportunity-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-opportunity-title-${index}`}>
                    {opportunity.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4" data-testid={`text-opportunity-price-${index}`}>
                    {opportunity.price}
                  </p>
                  <p className="text-muted-foreground" data-testid={`text-opportunity-description-${index}`}>
                    {opportunity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto" data-testid="text-why-sponsoring-intro">
              Join us as a sponsor and position your brand in front of China's untapped SEO market—a thriving landscape full of opportunities for global brands and service providers. As the first and largest international SEO conference in China, we offer unparalleled access to forward-thinking professionals, decision-makers, and industry leaders eager to connect with innovative solutions.
            </p>
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" data-testid="become-sponsor">
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
                          type="email"
                          {...form.register("email")}
                          placeholder="your@email.com"
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
                      <label className="block text-sm font-medium mb-2">Phone</label>
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
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      {...form.register("message")}
                      placeholder="Tell us about your sponsorship interests..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg"
                    disabled={inquiryMutation.isPending}
                    data-testid="button-submit-inquiry"
                  >
                    {inquiryMutation.isPending ? "Submitting..." : "Request Sponsorship Information"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" data-testid="card-success">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2" data-testid="text-success-title">
                  Thank You!
                </h3>
                <p className="text-lg text-muted-foreground" data-testid="text-success-message">
                  We've received your sponsorship inquiry and will contact you soon with detailed information.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
