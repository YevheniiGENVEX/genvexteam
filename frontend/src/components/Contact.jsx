import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { mockAPI } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    position: 'delivery-driver'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await mockAPI.submitApplication(formData);
      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          position: 'delivery-driver'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fehler beim Senden der Bewerbung:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bereit, Ihre Karriere mit dem GENVEX Team zu starten? Kontaktieren Sie uns noch heute. 
            Wir sind hier, um Ihre Fragen zu beantworten und Sie zu einem erfolgreichen Arbeitsstart zu führen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Besuchen Sie unser Büro
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">GENVEX Team</p>
                    <p className="text-gray-700">Unterm Heilbrunnen 8</p>
                    <p className="text-gray-700">21029 Hamburg, Deutschland</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Mo-Sa: 8:00 - 18:00</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Im Herzen des Hamburger Logistikbezirks gelegen, gut mit öffentlichen Verkehrsmitteln erreichbar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Telefon</p>
                      <a 
                        href="tel:+4917640099823" 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        +49 176 400 99823
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">E-Mail</p>
                      <a 
                        href="mailto:genvexteam@gmail.com" 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        genvexteam@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Unser Antwort-Versprechen
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bewerbungsbestätigung innerhalb von 24 Stunden</li>
                  <li>• Erstes Telefon-Screening innerhalb von 2-3 Werktagen</li>
                  <li>• Kompletter Einstellungsprozess dauert normalerweise 1-2 Wochen</li>
                  <li>• Direkter Telefonsupport während der Geschäftszeiten</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-blue-600" />
                  Senden Sie Ihre Bewerbung
                </CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">
                  Schnellbewerbung
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 font-medium">Bewerbung erfolgreich eingereicht!</p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Wir werden Sie innerhalb von 2-3 Werktagen kontaktieren, um Ihr Interview zu planen.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">Etwas ist schiefgelaufen</p>
                    <p className="text-red-700 text-sm mt-1">
                      Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter genvexteam@gmail.com
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Vollständiger Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Geben Sie Ihren vollständigen Namen ein"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="ihre.email@beispiel.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefonnummer *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="+49 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Interessierte Position</Label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="delivery-driver">Zustellfahrer (Vollzeit)</option>
                      <option value="part-time-driver">Teilzeit-Fahrer</option>
                      <option value="other">Andere Position</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht oder Fragen (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Erzählen Sie uns von Ihren Erfahrungen, stellen Sie Fragen oder teilen Sie uns alles andere mit, was wir wissen sollten..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors duration-200 disabled:opacity-50"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Bewerbung wird eingereicht...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Bewerbung einreichen
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Lieber anrufen? Erreichen Sie uns unter{' '}
                    <a 
                      href="tel:+4917640099823" 
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      +49 176 400 99823
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;