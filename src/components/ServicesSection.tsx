import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Edit3, MessageSquare, Users, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Statement of Purpose (SOP)",
      description: "Compelling personal narratives that showcase your academic journey and future aspirations.",
      features: ["Personal story development", "Goal articulation", "University-specific customization", "Multiple revisions"],
      price: "Starting at $299"
    },
    {
      icon: Edit3,
      title: "Letter of Recommendation (LOR)",
      description: "Professional recommendations that highlight your strengths and potential from the right perspective.",
      features: ["Professional tone crafting", "Achievement highlighting", "Relationship contextualization", "Academic focus"],
      price: "Starting at $199"
    },
    {
      icon: MessageSquare,
      title: "Document Editing & Review",
      description: "Comprehensive editing services to refine and perfect your existing documents.",
      features: ["Grammar & style correction", "Structure optimization", "Content enhancement", "Feedback & suggestions"],
      price: "Starting at $149"
    },
    {
      icon: Users,
      title: "Strategic Consultation",
      description: "One-on-one guidance to develop your application strategy and personal brand.",
      features: ["Application strategy", "Personal branding", "Interview preparation", "Timeline planning"],
      price: "Starting at $99"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
            Services That Transform Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial drafts to final submissions, we provide comprehensive support 
            for every step of your application journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-premium group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading text-primary">{service.title}</CardTitle>
                    <div className="text-accent font-semibold">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-accent group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let's discuss your goals.
          </p>
          <Link to="/booking">
            <Button className="btn-hero">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;