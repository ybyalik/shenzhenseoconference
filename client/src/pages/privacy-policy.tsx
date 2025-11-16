import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="privacy-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90" data-testid="text-privacy-subtitle">
            Shenzhen SEO Conference 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" data-testid="privacy-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  Welcome to the Shenzhen SEO Conference! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website, register for the conference, or participate in our events.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  By using our services, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our website or providing your personal information.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
                    <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, job title, company name, and payment details (if applicable).</li>
                      <li><strong>Technical Information:</strong> IP address, browser type, device information, and browsing behavior on our website.</li>
                      <li><strong>Event-Related Information:</strong> Session preferences, feedback, and survey responses.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-3">We use your information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>To process your registration and provide conference-related services.</li>
                      <li>To communicate with you about event updates, schedules, and announcements.</li>
                      <li>To improve our website, services, and event experience.</li>
                      <li>To comply with legal obligations and protect our rights.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">3. Sharing Your Information</h2>
                    <p className="text-muted-foreground mb-3">We do not sell or rent your personal information to third parties. However, we may share your data with:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Service Providers:</strong> Third-party vendors who assist in organizing the conference (e.g., payment processors, event platforms).</li>
                      <li><strong>Partners:</strong> Sponsors or exhibitors, but only with your explicit consent.</li>
                      <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">4. Data Security</h2>
                    <p className="text-muted-foreground">
                      We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
                    <p className="text-muted-foreground mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Access, update, or delete your information.</li>
                      <li>Opt-out of marketing communications.</li>
                      <li>Withdraw consent for data processing.</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      To exercise these rights, please contact us at{" "}
                      <a href="mailto:support@shenzhenseoconference.com" className="text-primary hover:underline">
                        support@shenzhenseoconference.com
                      </a>.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">6. Cookies and Tracking Technologies</h2>
                    <p className="text-muted-foreground">
                      We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">7. Third-Party Links</h2>
                    <p className="text-muted-foreground">
                      Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">8. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">9. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    
                    <div className="space-y-6 mt-6">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <a href="mailto:support@shenzhenseoconference.com" className="text-primary hover:underline">
                            support@shenzhenseoconference.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-2">US Business Address</p>
                          <p className="text-muted-foreground">
                            Action Digital Publishing LLC<br />
                            2880 W Oakland Park Blvd, Suite 225C<br />
                            Oakland Park, Florida 33311
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-2">Chinese Business Address</p>
                          <p className="text-muted-foreground">
                            深圳一纵科技有限公司<br />
                            广东省深圳市南山区招商街道水湾社区<br />
                            蛇口商乐街水湾C区8栋205
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Last Updated: March 17, 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
