import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EventTimeline() {
  const schedule = [
    {
      day: "Day 1",
      date: "September 17",
      description: "city tours & workshops"
    },
    {
      day: "Day 2",
      date: "18",
      description: "Mastermind"
    },
    {
      day: "Day 3",
      date: "19",
      description: "Full Day Event"
    },
    {
      day: "Day 4",
      date: "20",
      description: "Full Day event"
    },
    {
      day: "Day 5",
      date: "21",
      description: "VIP & Speaker & Sponsor networking"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <Card key={dayIndex} className="hover-lift slide-up" data-testid={`timeline-day-${dayIndex}`}>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-testid={`text-day-title-${dayIndex}`}>
                  {day.day}
                </h3>
                <p className="text-muted-foreground mb-3" data-testid={`text-day-date-${dayIndex}`}>
                  {dayIndex === 0 ? `${day.date}, 2026` : `${day.date}th`}
                </p>
                <p className="text-lg font-medium" data-testid={`text-day-description-${dayIndex}`}>
                  {day.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}