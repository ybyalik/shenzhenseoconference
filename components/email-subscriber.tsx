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
import { Bell, Mail, CheckCircle } from "lucide-react";

const emailSubscriberSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Please enter your name"),
});

type EmailSubscriberForm = z.infer<typeof emailSubscriberSchema>;

export default function EmailSubscriber() {
  const { toast } = useToast();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const form = useForm<EmailSubscriberForm>({
    resolver: zodResolver(emailSubscriberSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: EmailSubscriberForm) => {
      const response = await apiRequest("POST", "/api/aweber-subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll be notified when Early Bird tickets are released.",
      });
      form.reset();
    },
    onError: (error: any) => {
      // Handle "already subscribed" case as a success
      if (error.message && error.message.includes("already subscribed")) {
        setIsSubscribed(true);
        toast({
          title: "Already Subscribed!",
          description: "You're already on our Early Bird notification list.",
        });
        form.reset();
      } else {
        toast({
          title: "Subscription Failed",
          description: error.message || "Please try again later.",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: EmailSubscriberForm) => {
    subscribeMutation.mutate(data);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10" data-testid="section-email-subscribed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-success-title">
              You're All Set! 🎉
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-success-message">
              We'll notify you as soon as Early Bird tickets are available. Check your inbox for a confirmation email.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10" data-testid="section-email-subscriber">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Bell className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-subscriber-title">
              Get Notified When Early Bird Tickets Drop
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-subscriber-description">
              Be the first to know when our Early Bird tickets are released. Join our exclusive notification list and never miss out on special pricing!
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...form.register("name")}
                  className="h-12"
                  data-testid="input-subscriber-name"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-subscriber-name">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  {...form.register("email")}
                  className="h-12"
                  data-testid="input-subscriber-email"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-subscriber-email">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-sm sm:text-base md:text-lg"
              disabled={subscribeMutation.isPending}
              data-testid="button-subscribe"
            >
              {subscribeMutation.isPending ? (
                "Subscribing..."
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Notify Me About Early Bird Tickets
                  </span>
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4" data-testid="text-privacy-note">
            🔒 We respect your privacy. Unsubscribe at any time. No spam, just ticket notifications.
          </p>
        </div>
      </div>
    </section>
  );
}
