import React from 'react';
import { Truck, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/genvex-logo.svg" 
                alt="GENVEX Team Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hamburg's premier Amazon Delivery Service Partner, committed to delivering 
              excellence while building careers in the growing logistics industry.
            </p>
            <p className="text-gray-400 text-sm">
              Official Amazon DSP | Serving Hamburg and surrounding areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('positions')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Open Positions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('life')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Life at GENVEX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Zamok 20</p>
                  <p className="text-gray-300">21029 Hamburg, Germany</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+491764000000"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  +49 176 400 0000
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:genvexteam@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  genvexteam@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 7:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 GENVEX Team. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <span>Amazon Delivery Service Partner</span>
              <span>•</span>
              <span>Equal Opportunity Employer</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Join the team that's delivering the future of logistics in Hamburg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;