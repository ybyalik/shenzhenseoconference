import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Brain, Users, Handshake } from "lucide-react";

type EventType = 'workshop' | 'mastermind' | 'conference' | 'networking';

interface ScheduleEvent {
  id: string;
  date: string; // ISO date string
  title: string;
  description: string;
  eventType: EventType;
}

const eventTypeStyles: Record<EventType, { 
  variant: 'default' | 'secondary' | 'destructive' | 'outline'; 
  color: string;
  bgColor: string;
  borderColor: string;
  icon: any;
}> = {
  workshop: { 
    variant: 'secondary', 
    color: 'bg-blue-500', 
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    icon: MapPin
  },
  mastermind: { 
    variant: 'outline', 
    color: 'bg-purple-500', 
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/30',
    borderColor: 'border-purple-200 dark:border-purple-800',
    icon: Brain
  },
  conference: { 
    variant: 'default', 
    color: 'bg-green-500', 
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/30',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: Users
  },
  networking: { 
    variant: 'destructive', 
    color: 'bg-orange-500', 
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/30',
    borderColor: 'border-orange-200 dark:border-orange-800',
    icon: Handshake
  }
};

export default function EventTimeline() {
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: 'day1-workshops',
      date: '2026-09-17',
      title: 'Workshops & City Tours',
      description: 'Specialized workshops for Chinese attendees and guided city tours for international visitors to explore Shenzhen\'s tech districts',
      eventType: 'workshop'
    },
    {
      id: 'day2-mastermind',
      date: '2026-09-18',
      title: 'SEO Mastermind Sessions',
      description: 'Intensive small-group sessions with industry experts covering advanced SEO strategies',
      eventType: 'mastermind'
    },
    {
      id: 'day3-conference',
      date: '2026-09-19',
      title: 'Main Conference Day',
      description: 'Full day of keynotes, talks, panels, breakout sessions, and opening party.',
      eventType: 'conference'
    },
    {
      id: 'day4-conference',
      date: '2026-09-20',
      title: 'Main Conference Day',
      description: 'Full day of talks, panels, breakout sessions, and closing party.',
      eventType: 'conference'
    },
    {
      id: 'day5-networking',
      date: '2026-09-21',
      title: 'VIP Networking',
      description: 'Exclusive networking event for VIP ticket holders with speakers and sponsors',
      eventType: 'networking'
    }
  ];

  const formatEventDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    return {
      month: eventDate.toLocaleDateString('en-US', { month: 'long' }),
      day: eventDate.toLocaleDateString('en-US', { day: 'numeric' }),
      weekday: eventDate.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  return (
    <section className="py-20 bg-background" data-testid="section-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-timeline-title">
            5-Day Conference Schedule
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-timeline-description">
            Five days of SEO excellence, networking, and knowledge sharing in Shenzhen.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

          <div className="space-y-12">
            {scheduleEvents.map((event, index) => {
              const eventStyle = eventTypeStyles[event.eventType];
              const IconComponent = eventStyle.icon;
              const dateInfo = formatEventDate(event.date);
              
              return (
                <div key={event.id} className="relative flex items-start gap-8 group" data-testid={`timeline-event-${event.id}`}>
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    {/* Large Circle with Icon */}
                    <div className={`w-16 h-16 rounded-full ${eventStyle.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Date Badge */}
                    <div className={`absolute -bottom-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold shadow-md ${eventStyle.color} text-white whitespace-nowrap`}>
                      Day {index + 1}
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className="flex-1 -mt-2">
                    <Card className={`hover-lift slide-up border-l-4 ${eventStyle.borderColor} ${eventStyle.bgColor} group-hover:shadow-xl transition-all duration-300`}
                          style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader className="pb-3">
                        <div className="space-y-3">
                          {/* Event Type Badge and Day */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant={eventStyle.variant} className="px-3 py-1" data-testid={`timeline-badge-${event.eventType}-${event.id}`}>
                                {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                              </Badge>
                              <span className="text-sm text-muted-foreground font-medium">{dateInfo.weekday}</span>
                            </div>
                          </div>
                          
                          {/* Event Title */}
                          <CardTitle className="text-xl lg:text-2xl font-bold leading-tight" data-testid={`timeline-title-${event.id}`}>
                            {event.title}
                          </CardTitle>
                          
                          {/* Full Date Display */}
                          <div className="text-lg font-semibold text-primary">
                            {dateInfo.month} {dateInfo.day}, 2026
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`timeline-description-${event.id}`}>
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}