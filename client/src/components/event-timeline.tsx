import { Calendar, Clock, Users, MapPin, Coffee, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EventTimeline() {
  const schedule = [
    {
      day: "Day 1",
      date: "September 18",
      theme: "Opening & Foundations",
      sessions: [
        { time: "8:00 AM", title: "Registration & Welcome Coffee", icon: Coffee, type: "break" },
        { time: "9:00 AM", title: "Opening Keynote: The Future of Global SEO", icon: Users, type: "keynote" },
        { time: "10:30 AM", title: "East Meets West: Platform Strategies", icon: MapPin, type: "session" },
        { time: "12:00 PM", title: "Networking Lunch", icon: Utensils, type: "break" },
        { time: "1:30 PM", title: "Hands-on Workshop: Baidu Optimization", icon: Users, type: "workshop" },
        { time: "5:00 PM", title: "Welcome Reception", icon: Coffee, type: "networking" }
      ]
    },
    {
      day: "Day 2", 
      date: "September 19",
      theme: "Technical Deep Dives",
      sessions: [
        { time: "9:00 AM", title: "Technical SEO: Cross-Platform Challenges", icon: Users, type: "session" },
        { time: "10:30 AM", title: "Google Algorithm Updates Panel", icon: Users, type: "panel" },
        { time: "12:00 PM", title: "Lunch & Networking", icon: Utensils, type: "break" },
        { time: "2:00 PM", title: "WeChat & Social Commerce SEO", icon: Users, type: "workshop" },
        { time: "4:00 PM", title: "International Link Building Strategies", icon: Users, type: "session" },
        { time: "7:00 PM", title: "VIP Networking Dinner", icon: Utensils, type: "vip" }
      ]
    },
    {
      day: "Day 3",
      date: "September 20", 
      theme: "Strategy & Analytics",
      sessions: [
        { time: "9:00 AM", title: "Analytics & Measurement Across Borders", icon: Users, type: "session" },
        { time: "11:00 AM", title: "Content Strategy for Global Markets", icon: Users, type: "workshop" },
        { time: "12:30 PM", title: "Lunch Break", icon: Utensils, type: "break" },
        { time: "2:00 PM", title: "AI & Machine Learning in SEO", icon: Users, type: "session" },
        { time: "4:00 PM", title: "Case Studies: Successful Market Entry", icon: Users, type: "panel" },
        { time: "6:00 PM", title: "City Tour & Cultural Experience", icon: MapPin, type: "tour" }
      ]
    },
    {
      day: "Day 4",
      date: "September 21",
      theme: "Future & Networking",
      sessions: [
        { time: "9:00 AM", title: "The Future of Search in China", icon: Users, type: "keynote" },
        { time: "10:30 AM", title: "Open Q&A with Industry Leaders", icon: Users, type: "panel" },
        { time: "12:00 PM", title: "Closing Lunch & Awards", icon: Utensils, type: "closing" },
        { time: "2:00 PM", title: "Optional: Extended Shenzhen Tour", icon: MapPin, type: "tour" }
      ]
    }
  ];

  const getSessionColor = (type: string) => {
    const colors = {
      keynote: "bg-primary/10 text-primary border-primary/20",
      session: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400",
      workshop: "bg-green-50 text-green-600 border-green-200 dark:bg-green-950/30 dark:text-green-400", 
      panel: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400",
      break: "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400",
      networking: "bg-pink-50 text-pink-600 border-pink-200 dark:bg-pink-950/30 dark:text-pink-400",
      vip: "bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-400",
      tour: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-400",
      closing: "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/30 dark:text-red-400"
    };
    return colors[type as keyof typeof colors] || colors.session;
  };

  return (
    <section className="py-20 bg-background" data-testid="section-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-timeline-title">
            4-Day Conference Schedule
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-timeline-description">
            A comprehensive journey through international SEO strategies and networking.
          </p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="slide-up" data-testid={`timeline-day-${dayIndex}`}>
              <div className="flex items-center mb-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg mr-4">
                  {day.day}
                </div>
                <div>
                  <h3 className="text-2xl font-bold" data-testid={`text-day-date-${dayIndex}`}>
                    {day.date}, 2026
                  </h3>
                  <p className="text-muted-foreground text-lg" data-testid={`text-day-theme-${dayIndex}`}>
                    {day.theme}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {day.sessions.map((session, sessionIndex) => {
                  const IconComponent = session.icon;
                  return (
                    <Card 
                      key={sessionIndex}
                      className={`hover-lift border ${getSessionColor(session.type)}`}
                      data-testid={`card-session-${dayIndex}-${sessionIndex}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="flex items-center mr-4 min-w-24">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="font-mono text-sm" data-testid={`text-session-time-${dayIndex}-${sessionIndex}`}>
                              {session.time}
                            </span>
                          </div>
                          <IconComponent className="h-5 w-5 mr-3" />
                          <span className="font-semibold" data-testid={`text-session-title-${dayIndex}-${sessionIndex}`}>
                            {session.title}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}