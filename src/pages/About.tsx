import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-photo.jpg";

const About = () => {
  const founders = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Co-Founder & Lead Editor",
      bio: "Former admissions officer at Harvard Business School with 8+ years of experience in academic writing and student mentorship.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c5c3?w=400",
      linkedin: "#"
    },
    {
      name: "James Chen",
      role: "Co-Founder & Strategy Director",
      bio: "Published author and writing coach who has helped over 500 students craft compelling personal narratives for top universities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "We believe every person has a unique story worth telling. Our mission is to help you find and express your authentic voice in a way that resonates with admissions committees."
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Every document we craft is strategically designed to align with your specific academic and career objectives, ensuring maximum impact and relevance."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We work closely with each client to understand their background, aspirations, and the unique value they bring to their chosen field of study."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Our track record speaks for itself - hundreds of successful admissions to top universities worldwide, with a 95% acceptance rate for our clients."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                About Amour Editorial
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Where passion for storytelling meets expertise in academic writing. 
                We're dedicated to helping students and professionals find their voice 
                and achieve their dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Amour Editorial was founded in 2019 by two passionate educators who recognized 
                    a critical gap in the application process. Too many brilliant students were 
                    struggling to articulate their potential in written form.
                  </p>
                  <p>
                    Having worked in admissions offices and seen thousands of applications, our 
                    founders understood what makes a document truly compelling. They decided to 
                    bridge this gap by offering personalized, expert writing services.
                  </p>
                  <p>
                    Today, we've helped over 1,000 students gain admission to their dream 
                    institutions, from Ivy League universities to specialized programs worldwide. 
                    Our approach combines deep understanding of admissions processes with 
                    exceptional writing expertise.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Amour Editorial team"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do, from our first conversation 
                with clients to the final document delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-primary">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Meet Our Founders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate minds behind Amour Editorial, bringing decades of 
                combined experience in education, writing, and admissions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="card-premium text-center">
                  <CardContent className="p-8">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-soft"
                    />
                    <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                      {founder.name}
                    </h3>
                    <div className="text-accent font-medium mb-4">{founder.role}</div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={founder.linkedin}
                        className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:hello@amoureditorial.com"
                        className="p-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent-glow transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and how our expertise can help you 
              achieve them. Start with a free consultation.
            </p>
            <Link to="/booking">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-glow text-lg px-8 py-4 group">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;