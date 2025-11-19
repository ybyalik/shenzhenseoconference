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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  requestInvitationLetter: z.boolean(),
  nationality: z.string().optional(),
  passportNo: z.string().optional(),
  passportIssuingOffice: z.string().optional(),
  dateOfIssue: z.string().optional(),
  passportExpiration: z.string().optional(),
  jobTitle: z.string().optional(),
  durationOfStay: z.string().optional(),
  additionalMessage: z.string().optional(),
}).refine((data) => {
  if (data.requestInvitationLetter) {
    return (
      data.nationality &&
      data.passportNo &&
      data.passportIssuingOffice &&
      data.dateOfIssue &&
      data.passportExpiration &&
      data.jobTitle &&
      data.durationOfStay
    );
  }
  return true;
}, {
  message: "All fields are required when requesting a business invitation letter",
  path: ["requestInvitationLetter"],
});

type ContactForm = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      requestInvitationLetter: false,
      nationality: "",
      passportNo: "",
      passportIssuingOffice: "",
      dateOfIssue: "",
      passportExpiration: "",
      jobTitle: "",
      durationOfStay: "",
      additionalMessage: "",
    },
  });

  const requestInvitationLetter = form.watch("requestInvitationLetter");

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const payload = {
        ...data,
        requestInvitationLetter: data.requestInvitationLetter ? 'true' : 'false',
      };
      const response = await apiRequest("POST", "/api/contact", payload);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      const message = requestInvitationLetter 
        ? "We'll process your business invitation letter request and contact you soon."
        : "Thank you for your message! We'll get back to you soon.";
      toast({
        title: "Request Submitted!",
        description: message,
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

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            HAVE QUESTIONS?
          </h1>
          <p className="text-xl text-white/90" data-testid="text-contact-subtitle">
            Send a Message
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-muted" data-testid="contact-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card data-testid="card-general-inquiries">
              <CardContent className="p-8">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For ticketing, visa related, or general questions:
                </p>
                <a href="mailto:support@shenzhenseoconference.com" className="text-primary font-semibold hover:underline">
                  support@shenzhenseoconference.com
                </a>
              </CardContent>
            </Card>

            <Card data-testid="card-sponsorship-inquiries">
              <CardContent className="p-8">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Sponsorship Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For sponsorship related inquiries:
                </p>
                <a href="mailto:sponsor@shenzhenseoconference.com" className="text-primary font-semibold hover:underline">
                  sponsor@shenzhenseoconference.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" data-testid="contact-form-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-form-title">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-form-subtitle">
              Send us a message or request a business invitation letter for your visa application
            </p>
          </div>

          {!isSubmitted ? (
            <Card className="shadow-xl" data-testid="card-contact-form">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        {...form.register("firstName")}
                        placeholder="John"
                        data-testid="input-first-name"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-first-name">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        {...form.register("lastName")}
                        placeholder="Doe"
                        data-testid="input-last-name"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-last-name">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      {...form.register("email")}
                      placeholder="john.doe@example.com"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-email">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Checkbox
                      id="requestInvitationLetter"
                      checked={requestInvitationLetter}
                      onCheckedChange={(checked) => {
                        form.setValue("requestInvitationLetter", checked as boolean);
                      }}
                      data-testid="checkbox-request-invitation"
                    />
                    <label
                      htmlFor="requestInvitationLetter"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Request a Business Invitation Letter for visa application
                    </label>
                  </div>
                  {form.formState.errors.requestInvitationLetter && (
                    <p className="text-sm text-destructive mt-1" data-testid="error-invitation-letter">
                      {form.formState.errors.requestInvitationLetter.message}
                    </p>
                  )}

                  {requestInvitationLetter && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nationality *</label>
                          <Input
                            {...form.register("nationality")}
                            placeholder="United States"
                            data-testid="input-nationality"
                          />
                          {form.formState.errors.nationality && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-nationality">
                              {form.formState.errors.nationality.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Passport No. *</label>
                          <Input
                            {...form.register("passportNo")}
                            placeholder="123456789"
                            data-testid="input-passport-no"
                          />
                          {form.formState.errors.passportNo && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-passport-no">
                              {form.formState.errors.passportNo.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Passport Issuing Office *</label>
                        <Input
                          {...form.register("passportIssuingOffice")}
                          placeholder="U.S. Department of State"
                          data-testid="input-issuing-office"
                        />
                        {form.formState.errors.passportIssuingOffice && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-issuing-office">
                            {form.formState.errors.passportIssuingOffice.message}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Date of Issue *</label>
                          <Input
                            type="date"
                            {...form.register("dateOfIssue")}
                            data-testid="input-date-issue"
                          />
                          {form.formState.errors.dateOfIssue && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-date-issue">
                              {form.formState.errors.dateOfIssue.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Passport Expiration Date *</label>
                          <Input
                            type="date"
                            {...form.register("passportExpiration")}
                            data-testid="input-passport-expiration"
                          />
                          {form.formState.errors.passportExpiration && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-passport-expiration">
                              {form.formState.errors.passportExpiration.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Job Title *</label>
                        <Input
                          {...form.register("jobTitle")}
                          placeholder="e.g., SEO Manager at ABC Company"
                          data-testid="input-job-title"
                        />
                        {form.formState.errors.jobTitle && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-job-title">
                            {form.formState.errors.jobTitle.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Estimated Duration of Stay in China *</label>
                        <Input
                          {...form.register("durationOfStay")}
                          placeholder="e.g., September 17 to September 22, 2025 (5 days in total)"
                          data-testid="input-duration-stay"
                        />
                        {form.formState.errors.durationOfStay && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-duration-stay">
                            {form.formState.errors.durationOfStay.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                    <Textarea
                      {...form.register("additionalMessage")}
                      placeholder="Any additional information or questions..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" data-testid="card-success">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2" data-testid="text-success-title">
                  Request Submitted!
                </h3>
                <p className="text-lg text-muted-foreground" data-testid="text-success-message">
                  We've received your business invitation letter request and will process it shortly. You'll receive the letter via email soon.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
