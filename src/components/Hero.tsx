import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-editorial.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional editorial services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <span className="text-sm text-primary-foreground/90">Trusted by 1000+ students</span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Your Story
              <span className="block text-accent">Finds Its Voice</span>
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              Transform your academic and professional journey with expertly crafted SOPs, 
              LORs, and personal statements that showcase your unique potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/booking">
                <Button className="btn-hero group">
                  Start Your Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">1000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">95%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">4.9/5</div>
                <div className="text-sm text-primary-foreground/80">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right side space for image background */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;