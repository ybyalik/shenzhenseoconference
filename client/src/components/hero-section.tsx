import { Calendar, MapPin, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountdownTimer from "./countdown-timer";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import heroBackgroundImage from "@assets/home-lecture-1-min_1763345097074.png";

export default function HeroSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string; name: string }) => {
      const response = await apiRequest("POST", "/api/aweber-subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll be notified when Early Bird tickets are released.",
      });
      setEmail("");
      setName("");
    },
    onError: (error: any) => {
      if (error.message && error.message.includes("already subscribed")) {
        setIsSubscribed(true);
        toast({
          title: "Already Subscribed!",
          description: "You're already on our Early Bird notification list.",
        });
        setEmail("");
        setName("");
      } else {
        toast({
          title: "Subscription Failed",
          description: error.message || "Please try again later.",
          variant: "destructive",
        });
      }
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      subscribeMutation.mutate({ email, name });
    }
  };

  return (
    <section className="pt-16 gradient-bg relative overflow-hidden" data-testid="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 hero-bg opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Shenzhen SEO<br />
            <span className="text-white/90">Conference 2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto" data-testid="text-hero-description">
            Join the premier international SEO event connecting Eastern and Western digital markets. 
            5 days of innovation in China's Silicon Valley.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center text-lg" data-testid="event-date">
              <Calendar className="mr-2 h-5 w-5" />
              September 14-18, 2026
            </div>
            <div className="flex items-center text-lg" data-testid="event-location">
              <MapPin className="mr-2 h-5 w-5" />
              Shenzhen, China (Venue TBD)
            </div>
          </div>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              disabled
              className="bg-white/50 text-primary/50 px-8 py-4 rounded-lg font-semibold text-lg cursor-not-allowed"
              data-testid="button-get-tickets"
            >
              <span className="line-through">
                <Search className="mr-2 h-5 w-5 inline" />
                Get Super Early Bird Tickets
              </span>
            </Button>
          </div>

          {!isSubscribed ? (
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Get Notified When Early Bird Tickets Drop</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/90 text-gray-900"
                  data-testid="input-hero-name"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/90 text-gray-900"
                  data-testid="input-hero-email"
                />
                <Button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="w-full bg-white text-primary hover:bg-white/90"
                  data-testid="button-hero-subscribe"
                >
                  {subscribeMutation.isPending ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      Notify Me
                    </>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-green-500/20 backdrop-blur-md rounded-lg p-6 border border-green-400/30">
              <p className="text-lg font-semibold">✓ You're subscribed!</p>
              <p className="text-sm text-white/80 mt-2">We'll notify you when Early Bird tickets are available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
