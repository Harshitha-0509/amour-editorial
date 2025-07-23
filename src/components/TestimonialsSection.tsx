import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "MBA Student",
      university: "Harvard Business School",
      content: "Amour Editorial transformed my scattered thoughts into a compelling narrative. Their SOP writing service helped me articulate my vision clearly, and I got accepted to my dream school!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c5c3?w=400"
    },
    {
      name: "Michael Rodriguez",
      role: "Graduate Student",
      university: "Stanford University",
      content: "The LOR they crafted perfectly captured my research potential. The attention to detail and professional approach made all the difference in my PhD application.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Priya Sharma",
      role: "Medical Student",
      university: "Johns Hopkins University",
      content: "Their editing service polished my personal statement beautifully. Every word felt intentional and powerful. I couldn't have achieved this level of clarity on my own.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
    }
  ];

  const stats = [
    { number: "1000+", label: "Success Stories" },
    { number: "95%", label: "Acceptance Rate" },
    { number: "150+", label: "Universities" },
    { number: "4.9/5", label: "Client Rating" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
            Stories of Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real results. See how our clients transformed their applications 
            and achieved their academic dreams.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials">
            <Button className="btn-accent group">
              Read More Success Stories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;