import { Globe, Users, Rocket, TrendingUp } from "lucide-react";

export default function EventHighlights() {
  const highlights = [
    {
      icon: Globe,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "East-West Insights",
      description: "Learn strategies for Baidu, WeChat, Google, and global platforms from industry experts.",
    },
    {
      icon: Users,
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      title: "Global Network",
      description: "Connect with SEO professionals from 30+ countries and build lasting partnerships.",
    },
    {
      icon: Rocket,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "Innovation Hub",
      description: "Experience Shenzhen's cutting-edge tech ecosystem and entrepreneurial spirit.",
    },
    {
      icon: TrendingUp,
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      title: "Actionable Strategies",
      description: "Walk away with proven tactics you can implement immediately for your business.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" data-testid="section-highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-highlights-title">
            Why Attend The Shenzhen SEO Conference?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-highlights-description">
            The only conference bridging Eastern and Western SEO strategies in China's innovation capital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="text-center hover-lift hover-glow bg-card p-6 rounded-xl border border-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`highlight-${index}`}
              >
                <div className={`w-16 h-16 ${highlight.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`${highlight.iconColor} text-2xl h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-highlight-description-${index}`}>
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
