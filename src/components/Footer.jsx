import { Mail, Phone, MapPin } from "lucide-react";
import {
  footerQuickLinks,
  footerServices,
  footerSocialLinks,
} from "../utils/data";
import { CognitoLogo } from "../assets/CognitoLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="flex items-center justify-center  bg-foreground text-background mx-auto ">
      <div className="container max-w-7xl mx-auto  sm:px-6 lg:px-8 px-4 py-4 md:px-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text ">
              <CognitoLogo />{" "}
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Intelligent AI-powered vision and cognitive solutions.
              Transforming ideas into reality with advanced artificial
              intelligence.
            </p>
            <div className="flex space-x-4">
              {footerSocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@cognitovisions.com"
                  className="text-background/80 hover:text-background transition-smooth text-sm"
                >
                  info@cognitovisions.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+919581193026"
                  className="text-background/80 hover:text-background transition-smooth text-sm"
                >
                  +91 95811 93026
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <a
                  href="https://maps.app.goo.gl/wADGjn7kVeQ1REJx9?g_st=aw"
                  target="__blank"
                  className="text-background/80 text-sm"
                >
                  Visakhapatnam, India
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Cognito Visions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-smooth text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-smooth text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-smooth text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
