import React from 'react';
import { Clock, MapPin, Euro, Users, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const OpenPositions = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const requirements = [
    "Class B driver's license (or willingness to obtain)",
    "Reliable and punctual work ethic",
    "Physical fitness for package handling",
    "Basic German or English communication skills",
    "Clean driving record",
    "Smartphone for delivery app usage"
  ];

  const offerings = [
    "Competitive salary starting at €14.50/hour",
    "Performance-based monthly bonuses up to €300",
    "Comprehensive paid training program",
    "Full-time position with 40 hours/week",
    "Modern delivery vehicles provided",
    "Supportive team environment and mentorship",
    "Opportunity for advancement within Amazon network",
    "Employee benefits and insurance options"
  ];

  return (
    <section id="positions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">
            NOW HIRING
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our growing team of professional delivery drivers in Hamburg. 
            We're looking for dedicated individuals ready to build a career with us.
          </p>
        </div>

        {/* Main Job Card */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">
                  Delivery Driver (Full-time)
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                    Hamburg, Germany
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-600" />
                    Full-time, 40 hours/week
                  </div>
                  <div className="flex items-center">
                    <Euro className="h-4 w-4 mr-1 text-blue-600" />
                    From €14.50/hour + bonuses
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 mt-4 md:mt-0">
                Multiple Positions Available
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                  Requirements
                </h3>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  What We Offer
                </h3>
                <div className="space-y-3">
                  {offerings.map((offer, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{offer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About the Role
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a Delivery Driver with GENVEX Team, you'll be the face of Amazon in Hamburg, 
                ensuring customers receive their packages safely and on time. You'll work with 
                cutting-edge delivery technology, drive modern vehicles, and be part of a 
                supportive team that values your contributions. This is more than just a job – 
                it's an opportunity to build a career in the growing logistics industry.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Why This Role is Perfect For You:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Work independently while being part of a supportive team</li>
                  <li>• Stay active and engaged throughout your workday</li>
                  <li>• Interact with customers and make a positive impact in the community</li>
                  <li>• Develop skills in logistics, customer service, and technology</li>
                  <li>• Build towards supervisory and management opportunities</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join GENVEX Team today and become part of Hamburg's most trusted delivery service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('life')}
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 transition-colors duration-200"
                >
                  Learn About Life at GENVEX
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Questions about the application process?
          </p>
          <Button 
            onClick={() => scrollToSection('faq')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            Check Our FAQ Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;