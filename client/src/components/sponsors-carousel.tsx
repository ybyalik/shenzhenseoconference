import { Card, CardContent } from "@/components/ui/card";
import quickCreatorLogo from "@assets/quickcreator-min_1756775972402.png";
import ecomExpertsLogo from "@assets/ecomexperts_1756775972401.png";
import whitePressLogo from "@assets/whitepress_1756775972401.png";
import globalsoLogo from "@assets/globalso_1756775972401.png";
import interAmplifyLogo from "@assets/interamplify_1756775972401.png";
import playstackLogo from "@assets/playstack_1756776455361.png";
import oneasLogo from "@assets/oneas_1756776455363.png";
import talkheapLogo from "@assets/talkheap_1756776455364.png";
import outreacherioLogo from "@assets/outreacherio_1756776455365.png";
import eclickworldwideLogo from "@assets/eclickworldwide_1756776462379.png";

export default function SponsorsCarousel() {
  const sponsors = [
    {
      name: "QuickCreator",
      tier: "Platinum",
      logo: quickCreatorLogo
    },
    {
      name: "ecomexperts", 
      tier: "Platinum",
      logo: ecomExpertsLogo
    },
    {
      name: "WhitePress",
      tier: "Gold", 
      logo: whitePressLogo
    },
    {
      name: "Globalso",
      tier: "Gold",
      logo: globalsoLogo
    },
    {
      name: "interamplify",
      tier: "Gold",
      logo: interAmplifyLogo
    },
    {
      name: "eclickworldwide",
      tier: "Gold",
      logo: eclickworldwideLogo
    },
    {
      name: "outreacherio",
      tier: "Gold",
      logo: outreacherioLogo
    },
    {
      name: "talkheap",
      tier: "Gold",
      logo: talkheapLogo
    },
    {
      name: "oneas",
      tier: "Gold",
      logo: oneasLogo
    },
    {
      name: "playstack",
      tier: "Gold",
      logo: playstackLogo
    }
  ];

  const getTierColor = (tier: string) => {
    const colors = {
      Platinum: "border-purple-400 bg-purple-900/90 dark:bg-purple-950/95",
      Gold: "border-purple-400 bg-purple-900/90 dark:bg-purple-950/95", 
      Silver: "border-purple-400 bg-purple-900/90 dark:bg-purple-950/95"
    };
    return colors[tier as keyof typeof colors] || colors.Silver;
  };

  const getTierTextColor = (tier: string) => {
    const colors = {
      Platinum: "text-purple-300",
      Gold: "text-yellow-400", 
      Silver: "text-gray-300"
    };
    return colors[tier as keyof typeof colors] || colors.Silver;
  };

  return (
    <section className="py-16 bg-muted" data-testid="section-sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sponsors-title">
            Previous Partners
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
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      data-testid={`img-sponsor-${index}`}
                    />
                  ) : (
                    <div className="text-white font-semibold text-sm" data-testid={`text-sponsor-name-${index}`}>
                      {sponsor.name}
                    </div>
                  )}
                </div>
                <div className={`text-xs font-medium ${getTierTextColor(sponsor.tier)}`} data-testid={`text-sponsor-tier-${index}`}>
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