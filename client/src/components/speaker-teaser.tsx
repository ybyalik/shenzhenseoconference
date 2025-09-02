import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SpeakerTeaser() {
  const speakerCategories = [
    {
      title: "Google Search Team",
      description: "Direct insights from Google's search algorithm experts",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Baidu SEO Masters",
      description: "Top Chinese SEO experts sharing platform secrets",
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "International Consultants",
      description: "Global SEO leaders from Fortune 500 companies",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-muted" data-testid="section-speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-speakers-title">
            World-Class Speaker Lineup
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-speakers-description">
            Learn from the brightest minds in international SEO and digital marketing.
          </p>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Professional conference presentation" 
            className="w-full h-96 object-cover"
            data-testid="img-conference-presentation"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {speakerCategories.map((category, index) => (
            <Card 
              key={index}
              className="text-center hover-lift"
              data-testid={`card-speaker-category-${index}`}
            >
              <CardContent className="p-6">
                <div className={`w-20 h-20 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <User className={`${category.iconColor} text-2xl h-8 w-8`} />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-speaker-category-title-${index}`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-speaker-category-description-${index}`}>
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-speaker-announcement">
            Full speaker lineup to be announced soon. Get early access to speaker announcements!
          </p>
          <Button 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-speaker-updates"
          >
            Get Speaker Updates
          </Button>
        </div>
      </div>
    </section>
  );
}
