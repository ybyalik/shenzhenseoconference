import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type EventType = 'workshop' | 'mastermind' | 'conference' | 'networking';

interface ScheduleEvent {
  id: string;
  date: string; // ISO date string
  title: string;
  description: string;
  eventType: EventType;
}

const eventTypeStyles: Record<EventType, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; color: string }> = {
  workshop: { variant: 'secondary', color: 'bg-blue-500' },
  mastermind: { variant: 'outline', color: 'bg-purple-500' },
  conference: { variant: 'default', color: 'bg-green-500' },
  networking: { variant: 'destructive', color: 'bg-orange-500' }
};

export default function EventTimeline() {
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: 'day1-workshops',
      date: '2026-09-17',
      title: 'Welcome & City Tours',
      description: 'Arrival day with welcome reception and optional city tours to explore Shenzhen\'s tech districts',
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
      title: 'Main Conference Day 1',
      description: 'Full day of keynotes, panel discussions, and workshops on Eastern SEO markets',
      eventType: 'conference'
    },
    {
      id: 'day4-conference',
      date: '2026-09-20',
      title: 'Main Conference Day 2',
      description: 'Deep dive into Western market integration and cross-cultural digital marketing strategies',
      eventType: 'conference'
    },
    {
      id: 'day5-networking',
      date: '2026-09-21',
      title: 'VIP Networking & Closing',
      description: 'Exclusive networking event for VIP ticket holders with speakers and sponsors',
      eventType: 'networking'
    }
  ];

  const formatEventDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric'
    });
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

        <div className="grid gap-6">
          {scheduleEvents.map((event, index) => (
            <Card key={event.id} className="hover-lift slide-up" data-testid={`agenda-event-${event.id}`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={eventTypeStyles[event.eventType].variant} data-testid={`agenda-badge-${event.eventType}-${event.id}`}>
                      {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                    </Badge>
                    <div className={`w-3 h-3 rounded-full ${eventTypeStyles[event.eventType].color}`} />
                  </div>
                  <CardTitle data-testid={`agenda-title-${event.id}`}>
                    {event.title} - {formatEventDate(event.date)}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid={`agenda-description-${event.id}`}>
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}