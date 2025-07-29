import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockAPI } from '../mock';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openItems, setOpenItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const response = await mockAPI.getFAQs();
        setFaqs(response.data);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFAQs();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading frequently asked questions...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ for Applicants
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to the most common questions about joining GENVEX Team. 
            Can't find what you're looking for? Don't hesitate to contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {openItems[faq.id] && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-0">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our team is here to help! Reach out to us directly and we'll provide 
                personalized answers to any specific questions about joining GENVEX Team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                  size="lg"
                >
                  Kontaktieren Sie uns jetzt
                </Button>
                <Button 
                  onClick={() => window.open(`mailto:genvexteam@gmail.com?subject=Frage zur Zustellfahrer-Position`, '_blank')}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-white transition-colors duration-200"
                  size="lg"
                >
                  Direkt E-Mail senden
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            <strong>Telefon:</strong> +49 176 400 99823 | 
            <strong className="ml-2">E-Mail:</strong> genvexteam@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;