import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const services = [
    { value: "sop", label: "Statement of Purpose (SOP)" },
    { value: "lor", label: "Letter of Recommendation (LOR)" },
    { value: "editing", label: "Document Editing & Review" },
    { value: "consultation", label: "Strategic Consultation" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(files)]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Calendar className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Book Your Consultation
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Schedule a free consultation to discuss your goals and discover how we can help transform your story.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-primary">
                        Schedule Your Free Consultation
                      </CardTitle>
                      <CardDescription>
                        Tell us about your needs and preferred timing. We'll confirm your appointment within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <Label htmlFor="service">Service of Interest *</Label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the service you're interested in" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Scheduling */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input id="date" type="date" required />
                        </div>
                        <div>
                          <Label htmlFor="time">Preferred Time *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, '')}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Goals and Background */}
                      <div>
                        <Label htmlFor="goals">Your Goals & Background</Label>
                        <Textarea 
                          id="goals"
                          placeholder="Tell us about your academic/professional goals, target programs, and any specific challenges you're facing..."
                          className="h-32"
                        />
                      </div>

                      {/* File Upload */}
                      <div>
                        <Label>Upload Supporting Documents (Optional)</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload existing drafts, transcripts, or reference materials
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="fileUpload"
                          />
                          <Label htmlFor="fileUpload" className="cursor-pointer">
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                              Choose Files
                            </Button>
                          </Label>
                        </div>
                        
                        {/* Uploaded Files List */}
                        {uploadedFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                                <span className="text-sm">{file.name}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button className="w-full btn-hero">
                        Schedule Free Consultation
                        <Calendar className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* What to Expect */}
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg font-heading text-primary flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                        What to Expect
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>30-minute consultation via video call</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Personalized strategy discussion</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Service recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Timeline and next steps</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Q&A session</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg font-heading text-primary flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-accent" />
                        Quick Contact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">
                          Need immediate assistance or have questions?
                        </p>
                        <div>
                          <strong className="text-primary">Email:</strong>
                          <br />
                          <span className="text-muted-foreground">hello@amoureditorail.com</span>
                        </div>
                        <div>
                          <strong className="text-primary">Response Time:</strong>
                          <br />
                          <span className="text-muted-foreground">Within 24 hours</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Booking;