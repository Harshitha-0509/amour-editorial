import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      program: "MIT - Computer Science PhD",
      text: "Amour Editorial transformed my SOP from a generic document into a compelling narrative. Their team understood my journey and helped me articulate my passion for AI research in a way that truly resonated with admissions committees.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "James Rodriguez",
      program: "Harvard Business School - MBA",
      text: "The strategic consultation service was invaluable. They didn't just write my documents - they helped me understand my own story and how to present it authentically. The result? Acceptance to my dream program.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Priya Sharma",
      program: "Oxford University - DPhil Economics",
      text: "As an international applicant, I was struggling to convey my research experience effectively. Amour Editorial's expertise in academic writing and their understanding of global perspectives made all the difference.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Michael Thompson",
      program: "Stanford University - MS Engineering",
      text: "The editing service exceeded my expectations. Every revision brought clarity and strength to my application. Their attention to detail and professional insights were remarkable.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "95%", label: "Acceptance Rate" },
    { number: "500+", label: "Successful Applications" },
    { number: "50+", label: "Top Universities" },
    { number: "25+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Real stories from students who transformed their dreams into reality with our guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every success story represents a dream realized and a future transformed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                      ))}
                    </div>
                    
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;