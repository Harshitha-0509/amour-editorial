import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit3, MessageSquare, Users, Clock, Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Statement of Purpose (SOP)",
      description: "Compelling personal narratives that showcase your academic journey, motivations, and future aspirations.",
      price: "Starting at $299",
      duration: "5-7 days",
      popular: true,
      features: [
        "Personal story development",
        "Goal articulation and alignment",
        "University-specific customization",
        "Multiple revision rounds",
        "Structure and flow optimization",
        "Compelling opening and conclusion"
      ]
    },
    {
      icon: Edit3,
      title: "Letter of Recommendation (LOR)",
      description: "Professional recommendations that highlight your strengths, achievements, and potential from the right perspective.",
      price: "Starting at $199",
      duration: "3-5 days",
      popular: false,
      features: [
        "Professional tone crafting",
        "Achievement highlighting",
        "Relationship contextualization",
        "Academic/professional focus",
        "Credibility enhancement",
        "Specific examples integration"
      ]
    },
    {
      icon: MessageSquare,
      title: "Document Editing & Review",
      description: "Comprehensive editing services to refine and perfect your existing documents for maximum impact.",
      price: "Starting at $149",
      duration: "2-3 days",
      popular: false,
      features: [
        "Grammar and style correction",
        "Structure optimization",
        "Content enhancement",
        "Feedback and suggestions",
        "Clarity improvement",
        "Professional formatting"
      ]
    },
    {
      icon: Users,
      title: "Strategic Consultation",
      description: "One-on-one guidance to develop your application strategy and strengthen your personal brand.",
      price: "Starting at $99",
      duration: "1 hour session",
      popular: false,
      features: [
        "Application strategy development",
        "Personal branding guidance",
        "Interview preparation",
        "Timeline planning",
        "Goal setting and roadmap",
        "Q&A and expert advice"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a detailed discussion about your background, goals, and specific requirements."
    },
    {
      step: "2",
      title: "Research & Planning",
      description: "Our team researches your target institutions and develops a customized writing strategy."
    },
    {
      step: "3",
      title: "First Draft",
      description: "We create the initial version of your document, focusing on structure and key messages."
    },
    {
      step: "4",
      title: "Review & Revision",
      description: "Multiple rounds of refinement based on your feedback and our expert recommendations."
    },
    {
      step: "5",
      title: "Final Delivery",
      description: "You receive the polished final document, ready for submission with confidence."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesImage}
              alt="Our services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive writing and editing services designed to transform your 
                academic and professional documents into compelling narratives.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`card-premium relative ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-heading text-primary">
                            {service.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{service.price}</div>
                      </div>
                    </div>
                    
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full btn-accent group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures every document we create 
                meets the highest standards of quality and effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Why Choose Amour Editorial?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-elegant text-center">
                <CardContent className="p-8">
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    Expert Writers
                  </h3>
                  <p className="text-muted-foreground">
                    Our team includes former admissions officers and published authors 
                    with deep expertise in academic writing.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    Personalized Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Every document is crafted specifically for you, reflecting your 
                    unique story and aspirations.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center">
                <CardContent className="p-8">
                  <Check className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    Proven Results
                  </h3>
                  <p className="text-muted-foreground">
                    95% acceptance rate for our clients, with admissions to top 
                    universities worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a plan that will 
              help you achieve your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-accent text-accent-foreground hover:bg-accent-glow text-lg px-8 py-4 group">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;