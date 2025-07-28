import React, { useState } from 'react';
import { Clock, Coffee, MapPin, Users, Truck, Award, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const LifeAtGenvex = () => {
  const [activeTab, setActiveTab] = useState('typical-day');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamPhotos = [
    {
      title: "Unsere Lieferflotte",
      description: "Moderne, gut gewartete Fahrzeuge mit neuester Liefertechnologie ausgestattet",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop"
    },
    {
      title: "Arbeitsplatz",
      description: "Organisierte und effiziente Paket-Sortierung und Beladung",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Ladestation",
      description: "Strukturierte und effiziente Verfahren für Paketsortierung und -verladung",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
    }
  ];

  const dailySchedule = [
    { time: "10:30", activity: "Ankunft im Depot", icon: Coffee },
    { time: "10:50", activity: "Beladen der vorbereiteten Tour", icon: Truck },
    { time: "11:00", activity: "Abfahrt zur Zustellung", icon: MapPin },
    { time: "18:00", activity: "Rückkehr zum Depot, Abschlussverfahren", icon: Award }
  ];

  return (
    <section id="life" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leben bei GENVEX Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, wie es wirklich ist, bei Hamburgs führendem Lieferteam zu arbeiten. 
            Von täglichen Routinen bis hin zur Teamkultur - erhalten Sie einen Einblick in Ihren zukünftigen Arbeitsplatz.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          <Button
            onClick={() => setActiveTab('typical-day')}
            variant={activeTab === 'typical-day' ? 'default' : 'outline'}
            className={`mb-2 transition-colors duration-200 ${
              activeTab === 'typical-day' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Clock className="h-4 w-4 mr-2" />
            Typischer Arbeitstag
          </Button>
          <Button
            onClick={() => setActiveTab('team-photos')}
            variant={activeTab === 'team-photos' ? 'default' : 'outline'}
            className={`mb-2 transition-colors duration-200 ${
              activeTab === 'team-photos' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Team & Fahrzeugflotte
          </Button>
        </div>

        {/* Typical Day Tab */}
        {activeTab === 'typical-day' && (
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Ein Tag im Leben eines GENVEX Fahrers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <Badge className="bg-blue-600 text-white mb-2">
                              {item.time}
                            </Badge>
                            <p className="text-gray-800 font-medium">{item.activity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Was unseren Arbeitstag besonders macht
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Flexibilität:</strong> Routen sind effizient geplant, um Stress zu minimieren</li>
                    <li>• <strong>Unterstützung:</strong> Immer verbunden mit unserem Dispatch-Team für Hilfe</li>
                    <li>• <strong>Technologie:</strong> Erweiterte GPS- und Lieferungs-Apps machen die Navigation einfach</li>
                    <li>• <strong>Erfolg:</strong> Sehen Sie jeden Tag die direkte Auswirkung Ihrer Arbeit</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team Photos Tab */}
        {activeTab === 'team-photos' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {teamPhotos.map((photo, index) => (
                <Card key={index} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Truck className="h-16 w-16 text-blue-600" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600">
                      {photo.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-12 mb-6">
                  <PlayCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Video: Leben als GENVEX Fahrer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Demnächst verfügbar: Ein Einblick, wie es wirklich ist, Teil unseres Teams zu sein
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">
                    Video bald verfügbar
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Culture Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Teamgeist</h3>
              <p className="text-sm text-gray-600">Starke Bindungen und gegenseitige Unterstützung</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Moderne Flotte</h3>
              <p className="text-sm text-gray-600">Gut gewartete, zuverlässige Fahrzeuge</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Work-Life-Balance</h3>
              <p className="text-sm text-gray-600">Strukturierte Zeitpläne, faire Arbeitszeiten</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bereit, Teil unseres Teams zu werden?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Erleben Sie den Unterschied der Arbeit mit einem Unternehmen, das seine Fahrer schätzt und 
            in ihren Erfolg investiert. Ihre Karriere in der Lieferbranche beginnt hier.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
          >
            Starten Sie heute Ihre Bewerbung
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtGenvex;