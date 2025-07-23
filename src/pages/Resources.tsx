import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, FileText, Lightbulb, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "SOP Writing Guide",
      description: "A comprehensive guide to crafting compelling Statements of Purpose that stand out.",
      type: "Guide",
      downloadable: true,
      readTime: "15 min read"
    },
    {
      icon: Users,
      title: "Letter of Recommendation Template",
      description: "Professional templates and examples for requesting and structuring LORs.",
      type: "Template",
      downloadable: true,
      readTime: "10 min read"
    },
    {
      icon: Lightbulb,
      title: "Application Strategy Checklist",
      description: "Step-by-step checklist to ensure your application is complete and competitive.",
      type: "Checklist",
      downloadable: true,
      readTime: "8 min read"
    },
    {
      icon: BookOpen,
      title: "Personal Branding for Applications",
      description: "Learn how to develop and present a consistent personal brand across all documents.",
      type: "Article",
      downloadable: false,
      readTime: "12 min read"
    },
    {
      icon: FileText,
      title: "Common Application Mistakes",
      description: "Avoid these critical errors that can hurt your chances of admission.",
      type: "Guide",
      downloadable: false,
      readTime: "7 min read"
    },
    {
      icon: Users,
      title: "Interview Preparation Tips",
      description: "Essential strategies for acing your admissions or scholarship interviews.",
      type: "Tips",
      downloadable: false,
      readTime: "10 min read"
    }
  ];

  const sampleSOPs = [
    {
      title: "Computer Science PhD - Research Focus",
      university: "MIT",
      description: "Sample SOP highlighting research experience and academic goals."
    },
    {
      title: "MBA Application - Career Transition",
      university: "Harvard Business School",
      description: "SOP showcasing professional experience and leadership potential."
    },
    {
      title: "International Student - Engineering",
      university: "Stanford",
      description: "Sample demonstrating how to present international background effectively."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Resources & Guides
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Free educational content and tools to help you strengthen your applications and achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Educational Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights and practical tools to enhance your application journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        <resource.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {resource.readTime}
                      </div>
                      {resource.downloadable && (
                        <Badge variant="outline" className="text-accent border-accent">
                          <Download className="h-3 w-3 mr-1" />
                          Downloadable
                        </Badge>
                      )}
                    </div>
                    <Button className="w-full btn-accent group">
                      {resource.downloadable ? 'Download' : 'Read More'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample SOPs */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Sample Statements of Purpose
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Review successful SOP examples to understand what makes applications compelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sampleSOPs.map((sample, index) => (
                <Card key={index} className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg font-heading text-primary">
                      {sample.title}
                    </CardTitle>
                    <div className="text-accent font-semibold">{sample.university}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{sample.description}</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      View Sample
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Ready for Personalized Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              While these resources provide valuable guidance, personalized support can make all the difference.
            </p>
            <Link to="/booking">
              <Button className="btn-hero">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;