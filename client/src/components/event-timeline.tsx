import { useState } from "react";
import { Calendar, CalendarDays, MapPin, Clock, Users, ExternalLink, Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EventType = 'workshop' | 'mastermind' | 'conference' | 'networking';

interface ScheduleEvent {
  id: string;
  date: string; // ISO date string
  title: string;
  description: string;
  time: string;
  location: string;
  eventType: EventType;
  capacity?: number;
  speakers?: string[];
}

const eventTypeStyles: Record<EventType, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; color: string }> = {
  workshop: { variant: 'secondary', color: 'bg-blue-500' },
  mastermind: { variant: 'outline', color: 'bg-purple-500' },
  conference: { variant: 'default', color: 'bg-green-500' },
  networking: { variant: 'destructive', color: 'bg-orange-500' }
};

export default function EventTimeline() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2026, 8, 17)); // Preselect first conference day (Sep = month 8)
  const [activeView, setActiveView] = useState<'calendar' | 'agenda'>('calendar');

  const scheduleEvents: ScheduleEvent[] = [
    {
      id: 'day1-workshops',
      date: '2026-09-17',
      title: 'Welcome & City Tours',
      description: 'Arrival day with welcome reception and optional city tours to explore Shenzhen\'s tech districts',
      time: '14:00 - 18:00',
      location: 'Hotel Lobby & City Center',
      eventType: 'workshop',
      capacity: 200
    },
    {
      id: 'day2-mastermind',
      date: '2026-09-18',
      title: 'SEO Mastermind Sessions',
      description: 'Intensive small-group sessions with industry experts covering advanced SEO strategies',
      time: '09:00 - 17:00',
      location: 'Conference Center - Breakout Rooms',
      eventType: 'mastermind',
      capacity: 80,
      speakers: ['Gary Illyes', 'Kyle Roof']
    },
    {
      id: 'day3-conference',
      date: '2026-09-19',
      title: 'Main Conference Day 1',
      description: 'Full day of keynotes, panel discussions, and workshops on Eastern SEO markets',
      time: '08:30 - 18:00',
      location: 'Main Conference Hall',
      eventType: 'conference',
      capacity: 500,
      speakers: ['Charles Floate', 'Aleyda Solis']
    },
    {
      id: 'day4-conference',
      date: '2026-09-20',
      title: 'Main Conference Day 2',
      description: 'Deep dive into Western market integration and cross-cultural digital marketing strategies',
      time: '08:30 - 18:00',
      location: 'Main Conference Hall',
      eventType: 'conference',
      capacity: 500,
      speakers: ['Mike Dee', 'Terry Kyle']
    },
    {
      id: 'day5-networking',
      date: '2026-09-21',
      title: 'VIP Networking & Closing',
      description: 'Exclusive networking event for VIP ticket holders with speakers and sponsors',
      time: '16:00 - 22:00',
      location: 'Sky Lounge & Rooftop Terrace',
      eventType: 'networking',
      capacity: 100
    }
  ];

  const conferenceDates = scheduleEvents.map(event => {
    const [year, month, day] = event.date.split('-').map(Number);
    return new Date(year, month - 1, day); // Use local date to avoid timezone shifts
  });

  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return [];
    // Format local date as YYYY-MM-DD to avoid UTC timezone shifts
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    return scheduleEvents.filter(event => event.date === dateStr);
  };

  const generateCalendarLink = (event: ScheduleEvent) => {
    // Parse the time range from event.time (e.g., "09:00 - 17:00")
    const timeMatch = event.time.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
    
    let dates: string;
    
    if (timeMatch) {
      const [, startHour, startMin, endHour, endMin] = timeMatch;
      // Format date as YYYYMMDD directly from the ISO date string
      const dateStr = event.date.replace(/-/g, ''); // Convert '2026-09-17' to '20260917'
      
      // Build timezone-aware datetime strings (no Z suffix, let Google handle timezone)
      const startDateTime = `${dateStr}T${startHour}${startMin}00`;
      const endDateTime = `${dateStr}T${endHour}${endMin}00`;
      
      dates = `${startDateTime}/${endDateTime}`;
    } else {
      // Fallback to all-day event - format date directly without Date object conversion
      const dateStr = event.date.replace(/-/g, ''); // Convert '2026-09-17' to '20260917'
      const [year, month, day] = event.date.split('-');
      const nextDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day) + 1);
      const nextDayStr = nextDay.getFullYear().toString() +
                        (nextDay.getMonth() + 1).toString().padStart(2, '0') +
                        nextDay.getDate().toString().padStart(2, '0');
      
      dates = `${dateStr}/${nextDayStr}`;
    }
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `${event.title} - Shenzhen SEO Conference 2026`,
      dates: dates,
      details: event.description,
      location: event.location,
      ctz: 'Asia/Shanghai'
    });
    
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
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

        <Tabs value={activeView} onValueChange={(value) => setActiveView(value as 'calendar' | 'agenda')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8" data-testid="tabs-schedule-view">
            <TabsTrigger value="calendar" data-testid="tab-calendar-view">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Calendar View
            </TabsTrigger>
            <TabsTrigger value="agenda" data-testid="tab-agenda-view">
              <CalendarDays className="w-4 h-4 mr-2" />
              Agenda View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  defaultMonth={new Date(2026, 8, 1)} // Show September 2026 by default
                  modifiers={{
                    conference: conferenceDates,
                  }}
                  modifiersStyles={{
                    conference: {
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      fontWeight: 'bold'
                    }
                  }}
                  className="rounded-md border shadow"
                  data-testid="calendar-component"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                {selectedDate ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold" data-testid="text-selected-date">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </h3>
                    {getEventsForDate(selectedDate).length > 0 ? (
                      <div className="space-y-4">
                        {getEventsForDate(selectedDate).map((event) => (
                          <Card key={event.id} className="hover-lift" data-testid={`event-card-${event.id}`}>
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <Badge variant={eventTypeStyles[event.eventType].variant} data-testid={`badge-${event.eventType}`}>
                                      {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                                    </Badge>
                                    <div className={`w-3 h-3 rounded-full ${eventTypeStyles[event.eventType].color}`} />
                                  </div>
                                  <CardTitle className="text-lg" data-testid={`text-event-title-${event.id}`}>{event.title}</CardTitle>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(generateCalendarLink(event), '_blank')}
                                  data-testid={`button-add-calendar-${event.id}`}
                                  aria-label={`Add ${event.title} to calendar`}
                                >
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Add to Calendar
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-muted-foreground" data-testid={`text-event-description-${event.id}`}>
                                {event.description}
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span data-testid={`text-event-time-${event.id}`}>{event.time}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span data-testid={`text-event-location-${event.id}`}>{event.location}</span>
                                </div>
                                {event.capacity && (
                                  <div className="flex items-center text-muted-foreground">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span data-testid={`text-event-capacity-${event.id}`}>Capacity: {event.capacity}</span>
                                  </div>
                                )}
                                {event.speakers && event.speakers.length > 0 && (
                                  <div className="flex items-center text-muted-foreground">
                                    <span className="font-medium mr-2">Speakers:</span>
                                    <span data-testid={`text-event-speakers-${event.id}`}>{event.speakers.join(', ')}</span>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground" data-testid="text-no-events">
                        No events scheduled for this date.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2" data-testid="text-select-date-prompt">
                      Select a date to view events
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-calendar-instructions">
                      Click on any highlighted date (September 17-21, 2026) to see the detailed schedule.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agenda" className="space-y-6">
            <div className="grid gap-6">
              {scheduleEvents.map((event, index) => {
                const [year, month, day] = event.date.split('-').map(Number);
                const eventDate = new Date(year, month - 1, day); // Use local date construction
                return (
                  <Card key={event.id} className="hover-lift slide-up" data-testid={`agenda-event-${event.id}`}
                        style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={eventTypeStyles[event.eventType].variant} data-testid={`agenda-badge-${event.eventType}-${event.id}`}>
                              {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                            </Badge>
                            <div className={`w-3 h-3 rounded-full ${eventTypeStyles[event.eventType].color}`} />
                          </div>
                          <CardTitle data-testid={`agenda-title-${event.id}`}>{event.title}</CardTitle>
                          <div className="text-sm text-muted-foreground" data-testid={`agenda-date-${event.id}`}>
                            {eventDate.toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'long', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>
                        </div>
                        <Button 
                          variant="outline"
                          onClick={() => window.open(generateCalendarLink(event), '_blank')}
                          data-testid={`agenda-add-calendar-${event.id}`}
                          aria-label={`Add ${event.title} to calendar`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground" data-testid={`agenda-description-${event.id}`}>
                        {event.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          <span data-testid={`agenda-time-${event.id}`}>{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span data-testid={`agenda-location-${event.id}`}>{event.location}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center text-muted-foreground">
                            <Users className="w-4 h-4 mr-2" />
                            <span data-testid={`agenda-capacity-${event.id}`}>Capacity: {event.capacity}</span>
                          </div>
                        )}
                      </div>
                      {event.speakers && event.speakers.length > 0 && (
                        <div className="flex items-start gap-2 text-sm">
                          <span className="font-medium text-muted-foreground">Featured Speakers:</span>
                          <span className="text-muted-foreground" data-testid={`agenda-speakers-${event.id}`}>
                            {event.speakers.join(', ')}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}