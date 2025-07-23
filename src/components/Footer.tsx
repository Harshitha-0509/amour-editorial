import { BookOpen, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-heading font-bold text-xl">Amour Editorial</h3>
                <p className="text-sm text-primary-foreground/80">Where your story finds its true voice</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming academic and professional journeys through exceptional writing and editing services. 
              Let us help you craft documents that truly reflect your potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Stories</Link></li>
              <li><Link to="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">Resources</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/faqs" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">hello@amoureditorial.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Amour Editorial. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;