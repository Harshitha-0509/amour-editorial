import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <FileText className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="text-muted-foreground space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Acceptance of Terms</h2>
                  <p>
                    By accessing and using Amour Editorial's services, you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Service Description</h2>
                  <p>
                    Amour Editorial provides professional writing and editing services including but not 
                    limited to Statement of Purpose (SOP) writing, Letter of Recommendation (LOR) writing, 
                    document editing, and strategic consultation for academic and professional applications.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Client Responsibilities</h2>
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Providing accurate and complete information</li>
                    <li>Meeting agreed-upon deadlines for feedback and revisions</li>
                    <li>Ensuring all information provided is truthful and authentic</li>
                    <li>Making timely payments for services rendered</li>
                    <li>Understanding that our services are for guidance and assistance only</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Commitments</h2>
                  <p>Amour Editorial commits to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Delivering high-quality, original content</li>
                    <li>Meeting agreed-upon deadlines</li>
                    <li>Maintaining strict confidentiality</li>
                    <li>Providing the number of revisions specified in your service package</li>
                    <li>Professional and ethical conduct in all interactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Intellectual Property</h2>
                  <p>
                    Upon full payment, clients retain ownership of the final documents we create for them. 
                    However, Amour Editorial retains the right to use anonymized examples of our work for 
                    marketing and educational purposes, with all identifying information removed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Revision Policy</h2>
                  <p>
                    Each service package includes a specified number of revision rounds. Additional revisions 
                    beyond the included amount may incur additional charges. Revisions must be requested 
                    within 30 days of final delivery.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Refund Policy</h2>
                  <p>
                    Refunds are considered on a case-by-case basis. If you are unsatisfied with our service, 
                    please contact us within 7 days of final delivery to discuss resolution options.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Limitation of Liability</h2>
                  <p>
                    Amour Editorial provides writing and editing services but cannot guarantee admission to 
                    any institution or program. Our services are advisory in nature, and final admission 
                    decisions rest solely with the respective institutions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Confidentiality</h2>
                  <p>
                    We maintain strict confidentiality regarding all client information and documents. 
                    We do not share client details or documents with third parties without explicit consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Termination</h2>
                  <p>
                    Either party may terminate the service agreement with written notice. In case of termination, 
                    payment will be prorated based on work completed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us at legal@amoureditorail.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective 
                    immediately upon posting to our website.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last Updated: December 2024
                  </p>
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

export default Terms;