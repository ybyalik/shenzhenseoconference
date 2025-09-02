import { Card, CardContent } from "@/components/ui/card";

export default function SponsorsCarousel() {
  const sponsors = [
    {
      name: "Google",
      tier: "Platinum",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
    },
    {
      name: "Baidu", 
      tier: "Platinum",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Baidu-Logo.png"
    },
    {
      name: "Microsoft",
      tier: "Gold", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png"
    },
    {
      name: "Tencent",
      tier: "Gold",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Tencent-Logo.png"
    },
    {
      name: "Alibaba",
      tier: "Gold",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Alibaba-Logo.png"
    },
    {
      name: "SEMrush",
      tier: "Silver",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Semrush-Logo.png"
    }
  ];

  const getTierColor = (tier: string) => {
    const colors = {
      Platinum: "border-purple-300 bg-purple-50 dark:bg-purple-950/20",
      Gold: "border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20", 
      Silver: "border-gray-300 bg-gray-50 dark:bg-gray-950/20"
    };
    return colors[tier as keyof typeof colors] || colors.Silver;
  };

  return (
    <section className="py-16 bg-muted" data-testid="section-sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sponsors-title">
            Our Amazing Partners
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-sponsors-description">
            Supported by industry leaders from East and West.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index}
              className={`hover-glow transition-all ${getTierColor(sponsor.tier)}`}
              data-testid={`card-sponsor-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="h-16 flex items-center justify-center mb-3">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    data-testid={`img-sponsor-${index}`}
                  />
                </div>
                <div className="text-xs font-medium text-muted-foreground" data-testid={`text-sponsor-tier-${index}`}>
                  {sponsor.tier} Partner
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}