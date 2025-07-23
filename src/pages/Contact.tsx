import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@amoureditorial.com",
      description: "Send us your questions anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Available Worldwide",
      description: "Remote consultations available"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "Usually much faster"
    }
  ];

  const services = [
    "Statement of Purpose (SOP)",
    "Letter of Recommendation (LOR)",
    "Document Editing & Review",
    "Strategic Consultation",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Have questions about our services? Ready to start your project? 
                We're here to help you take the next step in your academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  For urgent inquiries, please call us directly.
                </p>

                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Service of Interest</Label>
                          <Select onValueChange={(value) => handleChange("service", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={6}
                          className="mt-2"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      <Button type="submit" className="w-full btn-accent group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're available to discuss your project and answer any questions 
                  you might have about our services.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="card-elegant">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                            <p className="text-lg font-medium text-foreground mb-1">{item.content}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ Callout */}
                <Card className="card-premium mt-8">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-primary">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Before reaching out, you might find answers to common questions 
                      in our FAQ section.
                    </p>
                    <Button variant="outline" className="w-full">
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Office Hours & Response Times
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                </div>
                <div>
                  <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Email Response</h3>
                  <p className="text-muted-foreground">Usually within 4 hours<br />Always within 24 hours</p>
                </div>
                <div>
                  <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Phone Calls</h3>
                  <p className="text-muted-foreground">By appointment<br />Flexible scheduling available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;