import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-photo.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "We believe every person has a unique story worth telling. Our mission is to help you find and express your authentic voice."
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Every document we craft is strategically designed to align with your specific academic and career objectives."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We work closely with each client to understand their background, aspirations, and the unique value they bring."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Our track record speaks for itself - hundreds of successful admissions to top universities worldwide."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Your Story,
              <span className="block text-gradient">Expertly Told</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by passionate writers and former admissions consultants, Amour Editorial was born 
              from a simple belief: every student deserves to have their story told with clarity, 
              authenticity, and impact.
            </p>

            <p className="text-muted-foreground mb-8">
              We understand the challenges of articulating your journey, dreams, and potential in a 
              way that resonates with admissions committees. That's why we've dedicated ourselves to 
              the art and science of compelling academic writing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground mt-1">
                    <value.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="btn-accent group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={teamImage}
                alt="Amour Editorial team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-glow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;