import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const faqs = [
    {
      question: "What is the typical turnaround time for document writing?",
      answer: "Our turnaround times vary by service: SOPs take 5-7 days, LORs take 3-5 days, editing services take 2-3 days, and consultations are scheduled within 24-48 hours. We also offer expedited services for urgent applications."
    },
    {
      question: "How do you ensure each document is unique and personalized?",
      answer: "Every document is crafted from scratch based on your individual story, experiences, and goals. We conduct detailed consultations to understand your background and aspirations, ensuring each piece authentically represents your unique journey."
    },
    {
      question: "Can you help with applications to specific universities or programs?",
      answer: "Absolutely! We customize documents based on specific program requirements and university cultures. Our team researches each institution to align your application with their values and expectations."
    },
    {
      question: "What if I need revisions to my document?",
      answer: "All our services include multiple revision rounds. We work with you until you're completely satisfied with the final document. Your success is our priority, and we're committed to delivering excellence."
    },
    {
      question: "Do you work with international students?",
      answer: "Yes! We have extensive experience working with students from around the world. We understand the unique challenges international applicants face and tailor our approach accordingly."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply book a free consultation through our booking page. We'll discuss your needs, timeline, and goals to create a personalized plan for your application journey."
    },
    {
      question: "What information do you need from me to start writing?",
      answer: "We'll need details about your academic background, work experience, research interests, career goals, and the specific programs you're applying to. We'll guide you through providing all necessary information during our consultation."
    },
    {
      question: "Are your services confidential?",
      answer: "Absolutely. We maintain strict confidentiality for all client information and documents. Your privacy and trust are paramount to our service."
    },
    {
      question: "Can you help with scholarship applications?",
      answer: "Yes! Many of our document writing and editing services apply to scholarship applications. We can help you craft compelling narratives that highlight your achievements and potential."
    },
    {
      question: "What makes Amour Editorial different from other writing services?",
      answer: "Our team includes former admissions officers and published authors who understand what makes applications successful. We focus on authentic storytelling rather than generic templates, ensuring your unique voice shines through."
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
              <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Find answers to common questions about our services, process, and how we can help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help! Book a free consultation or reach out directly for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="btn-hero">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Us
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

export default FAQs;