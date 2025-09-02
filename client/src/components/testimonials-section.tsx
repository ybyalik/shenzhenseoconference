import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LazyImage from "./lazy-image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "SEO Director at TechCorp",
      company: "Fortune 500 Company",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b619?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "The insights into Chinese search platforms were invaluable. I learned strategies that immediately improved our Asia-Pacific performance by 40%.",
      rating: 5
    },
    {
      name: "Marcus Weber",
      role: "Digital Marketing Lead",
      company: "European Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "Networking opportunities were exceptional. I formed partnerships that are still driving business growth 6 months later.",
      rating: 5
    },
    {
      name: "Alex Kim",
      role: "SEO Consultant",
      company: "Independent Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "Best SEO conference I've attended. The cross-cultural perspectives opened my mind to entirely new approaches.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            What 2025 Attendees Say
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-description">
            Hear from professionals who transformed their SEO strategies at last year's conference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="testimonial-card hover-lift border-0"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
                
                <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <LazyImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}