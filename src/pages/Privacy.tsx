import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Your privacy and data protection are our top priorities.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="text-muted-foreground space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    book a consultation, or communicate with us. This may include your name, email address, 
                    phone number, and any documents you choose to share with us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information 
                    with trusted service providers who assist us in operating our website and providing our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                    over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Document Confidentiality</h2>
                  <p>
                    All documents and personal information shared with us for editing or writing services are 
                    treated with the highest level of confidentiality. We do not share your documents with 
                    third parties and delete them securely after project completion unless you request otherwise.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict certain processing</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us at privacy@amoureditorail.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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

export default Privacy;