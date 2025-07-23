import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Story?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Join hundreds of successful students who trusted us with their most important documents. 
            Let's work together to craft your compelling narrative and unlock your potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-primary-foreground/80 mb-4">
                Start with a 30-minute consultation to discuss your goals and how we can help.
              </p>
              <Link to="/booking">
                <Button className="bg-accent text-accent-foreground hover:bg-accent-glow w-full">
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Quick Questions?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Have specific questions about our services? Get in touch and we'll respond promptly.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-glow text-lg px-8 py-4 group">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span className="text-sm">✓ No commitment required</span>
              <span className="text-sm">✓ Free initial consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;