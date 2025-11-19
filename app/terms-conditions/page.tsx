import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="terms-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-terms-title">
            Terms & Conditions
          </h1>
          <p className="text-xl text-white/90" data-testid="text-terms-subtitle">
            Shenzhen SEO Conference 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" data-testid="terms-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  Welcome to the Shenzhen SEO Conference! By registering for or attending the conference, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before proceeding.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">1. Event Registration</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Registration is required to attend the Shenzhen SEO Conference.</li>
                      <li>All attendees must provide accurate and complete information during registration.</li>
                      <li>Tickets are non-transferable unless explicitly stated otherwise.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">2. Payment and Refunds</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Payment must be made in full to secure your registration.</li>
                      <li>Refunds are available only if requested before August 18, 2025.</li>
                      <li>In the event of cancellation or postponement by the organizers, attendees will be notified and offered a refund or credit for a future event.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">3. Code of Conduct</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>All attendees, speakers, sponsors, and staff are expected to behave professionally and respectfully.</li>
                      <li>Harassment, discrimination, or any form of inappropriate behavior will not be tolerated and may result in removal from the event without a refund.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">4. Intellectual Property</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>All content presented at the conference, including but not limited to presentations, materials, and recordings, is the intellectual property of the respective owners.</li>
                      <li>Unauthorized recording, distribution, or reproduction of conference content is strictly prohibited.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">5. Photography and Recording</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>By attending the conference, you consent to being photographed, filmed, or recorded for promotional purposes.</li>
                      <li>If you do not wish to be included in such materials, please notify the event organizers in writing prior to the event.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">6. Liability</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>The Shenzhen SEO Conference organizers are not liable for any loss, injury, or damage to persons or property during the event.</li>
                      <li>Attendees are responsible for their own belongings and personal safety.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">7. Changes to the Event</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>The organizers reserve the right to make changes to the event schedule, speakers, or venue without prior notice.</li>
                      <li>In the event of unforeseen circumstances (e.g., natural disasters, pandemics), the conference may be postponed or canceled.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">8. Privacy</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Your personal information will be handled in accordance with our Privacy Policy page.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">9. Governing Law</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>These Terms & Conditions are governed by the laws of the People's Republic of China. Any disputes arising from these terms will be resolved in the courts of Shenzhen.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">10. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions or concerns about these Terms & Conditions, please contact us at:
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
