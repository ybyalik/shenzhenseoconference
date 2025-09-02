import { useState } from "react";
import { User, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SpeakerPreviewModal from "./speaker-preview-modal";

export default function SpeakerTeaser() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredSpeakers = [
    {
      name: "Gary Illyes",
      role: "Analyst",
      company: "Google Search Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Gary Illyes is an analyst on Google's Search team, focusing on how search algorithms interpret and rank web content. With years of experience in search technology, Gary provides insights into Google's latest algorithm updates and best practices for SEO professionals worldwide.",
      expertise: ["Google Algorithms", "Technical SEO", "Search Quality", "Web Standards"],
      sessionTitle: "Inside Google Search: Algorithm Updates and Future Directions",
      sessionTime: "September 19, 2026 - 9:00 AM"
    },
    {
      name: "Aleyda Solis",
      role: "International SEO Consultant",
      company: "Orainti",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b619?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Aleyda Solis is a renowned international SEO consultant and founder of Orainti. She specializes in helping businesses expand globally through strategic SEO implementations across multiple markets and languages.",
      expertise: ["International SEO", "Technical SEO", "Global Strategy", "Multi-language Optimization"],
      sessionTitle: "Mastering International SEO: From Strategy to Implementation",
      sessionTime: "September 18, 2026 - 2:30 PM"
    },
    {
      name: "SEO Zac",
      role: "Author & Chinese SEO Expert",
      company: "Independent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Author of the best-selling Chinese SEO book with a foreword by Matt Cutts. Zac bridges Eastern and Western SEO practices, providing unique insights into Baidu optimization and Chinese search behavior.",
      expertise: ["Baidu SEO", "Chinese Search", "Cultural Adaptation", "Content Strategy"],
      sessionTitle: "Baidu vs Google: Understanding the Fundamental Differences",
      sessionTime: "September 20, 2026 - 11:00 AM"
    }
  ];

  const handleSpeakerClick = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

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

        <div className="mb-12 rounded-2xl overflow-hidden slide-up">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Professional conference presentation" 
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            data-testid="img-conference-presentation"
          />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Speakers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredSpeakers.map((speaker, index) => (
              <Card 
                key={index}
                className="hover-lift hover-glow cursor-pointer group"
                onClick={() => handleSpeakerClick(speaker)}
                data-testid={`card-featured-speaker-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{speaker.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{speaker.role}</p>
                  <p className="text-xs text-muted-foreground">{speaker.company}</p>
                  <Button variant="ghost" size="sm" className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {speakerCategories.map((category, index) => (
            <Card 
              key={index}
              className="text-center hover-lift hover-glow slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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

        <div className="text-center fade-in">
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-speaker-announcement">
            Full speaker lineup to be announced soon. Get early access to speaker announcements!
          </p>
          <Button 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:scale-105 focus:ring-4 focus:ring-primary/20"
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-speaker-updates"
          >
            Get Speaker Updates
          </Button>
        </div>
        
        <SpeakerPreviewModal 
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          speaker={selectedSpeaker}
        />
      </div>
    </section>
  );
}
