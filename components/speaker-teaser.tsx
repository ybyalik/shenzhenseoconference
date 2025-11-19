import { useState } from "react";
import { User, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SpeakerPreviewModal from "./speaker-preview-modal";
import garyImage from "@assets/Gary-Illyes-1_1756775848714.webp";
import kyleImage from "@assets/Kyle-Roof-1_1756775848714.webp";
import charlesImage from "@assets/Charles-Floate_1756775848714.jpg";
import aleydaImage from "@assets/Aleyda-Solis-1_1756775848714.webp";
import mikeImage from "@assets/Mike-Dee-1_1756775848713.webp";
import terryImage from "@assets/Terry-Kyle_1756775848713.webp";

export default function SpeakerTeaser() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredSpeakers = [
    {
      name: "Gary Illyes",
      role: "Analyst on the Google Search team",
      company: "Google",
      image: garyImage,
      bio: "Gary Illyes is an analyst on Google's Search team, focusing on how search algorithms interpret and rank web content. With years of experience in search technology, Gary provides insights into Google's latest algorithm updates and best practices for SEO professionals worldwide.",
      expertise: ["Google Algorithms", "Technical SEO", "Search Quality", "Web Standards"],
      sessionTitle: "Inside Google Search: Algorithm Updates and Future Directions",
      sessionTime: "September 19, 2026 - 9:00 AM"
    },
    {
      name: "Kyle Roof",
      role: "Co-founder of Internet Marketing Gold, High Voltage SEO & Page Optimizer Pro",
      company: "Internet Marketing Gold",
      image: kyleImage,
      bio: "Kyle Roof is a leading SEO expert and co-founder of multiple successful SEO companies including Internet Marketing Gold, High Voltage SEO, and Page Optimizer Pro. He specializes in data-driven SEO strategies and optimization techniques.",
      expertise: ["SEO Strategy", "Data Analysis", "Page Optimization", "Content Strategy"],
      sessionTitle: "Data-Driven SEO: From Analysis to Implementation",
      sessionTime: "September 18, 2026 - 10:30 AM"
    },
    {
      name: "Charles Floate",
      role: "Founder & CMO at Charles Floate Training",
      company: "Charles Floate Training",
      image: charlesImage,
      bio: "Charles Floate is a renowned SEO expert and founder of Charles Floate Training. He's known for his innovative SEO strategies and has trained thousands of SEO professionals worldwide.",
      expertise: ["Advanced SEO", "Link Building", "SEO Training", "Technical SEO"],
      sessionTitle: "Advanced SEO Techniques for 2026",
      sessionTime: "September 19, 2026 - 2:00 PM"
    },
    {
      name: "Aleyda Solis",
      role: "International SEO Consultant, Founder at Orainti",
      company: "Orainti",
      image: aleydaImage,
      bio: "Aleyda Solis is a renowned international SEO consultant and founder of Orainti. She specializes in helping businesses expand globally through strategic SEO implementations across multiple markets and languages.",
      expertise: ["International SEO", "Technical SEO", "Global Strategy", "Multi-language Optimization"],
      sessionTitle: "Mastering International SEO: From Strategy to Implementation",
      sessionTime: "September 18, 2026 - 2:30 PM"
    },
    {
      name: "Mike Dee",
      role: "CEO at Playstack, 1.2M+ YouTube subscribers",
      company: "Playstack",
      image: mikeImage,
      bio: "Mike Dee is the CEO of Playstack and a successful content creator with over 1.2 million YouTube subscribers. He combines business leadership with content marketing expertise to drive growth across multiple platforms.",
      expertise: ["Content Marketing", "YouTube SEO", "Business Growth", "Digital Strategy"],
      sessionTitle: "Content Marketing at Scale: From YouTube to Global Success",
      sessionTime: "September 20, 2026 - 11:00 AM"
    },
    {
      name: "Terry Kyle",
      role: "Co-founder of WPX Hosting",
      company: "WPX Hosting",
      image: terryImage,
      bio: "Terry Kyle is the co-founder of WPX Hosting, a leading web hosting company known for its speed and performance. He brings technical expertise and business acumen to help websites achieve optimal performance for SEO.",
      expertise: ["Web Performance", "Technical SEO", "Hosting Optimization", "Site Speed"],
      sessionTitle: "Technical SEO: Performance Optimization for Better Rankings",
      sessionTime: "September 20, 2026 - 3:30 PM"
    }
  ];

  const handleSpeakerClick = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };


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


        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Previous Speakers</h3>
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


        <div className="text-center fade-in">
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-speaker-announcement">
            Full speaker lineup to be announced soon.
          </p>
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
