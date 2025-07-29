import React from 'react';
import { Clock, MapPin, Euro, Users, GraduationCap, ArrowRight, CheckCircle, UtensilsCrossed } from 'lucide-react';
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
    "Führerschein Klasse B",
    "Zuverlässigkeit und Pünktlichkeit",
    "Grundkenntnisse in Deutsch oder Englisch"
  ];

  const offerings = [
    "Attraktives Gehalt €15,50 brutto/Stunde",
    "Zusätzlich €10 netto täglich für Verpflegung",
    "Umfassende bezahlte Schulungsprogramme",
    "Vollzeitstelle mit 40 Stunden/Woche",
    "Moderne Lieferfahrzeuge gestellt",
    "Smartphone und Arbeitskleidung werden bereitgestellt",
    "Unterstützendes Teamumfeld und Mentoring",
    "Aufstiegsmöglichkeiten im Amazon-Netzwerk",
    "Krankenversicherung"
  ];

  return (
    <section id="positions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">
            ❌ Das Team ist vollständig. Folgen Sie uns für Neuigkeiten
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Offene Stellen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Werden Sie Teil unseres wachsenden Teams professioneller Lieferfahrer in Hamburg. 
            Wir suchen engagierte Personen, die bereit sind, eine Karriere mit uns aufzubauen.
          </p>
        </div>

        {/* Main Job Card */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">
                  Zustellfahrer (Vollzeit)
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                    Hamburg, Deutschland
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-600" />
                    Vollzeit, 40 Stunden/Woche
                  </div>
                  <div className="flex items-center">
                    <Euro className="h-4 w-4 mr-1 text-blue-600" />
                    €15,50 brutto/Stunde
                  </div>
                  <div className="flex items-center">
                    <UtensilsCrossed className="h-4 w-4 mr-1 text-blue-600" />
                    Verpflegungsgeld netto €10 täglich
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 mt-4 md:mt-0">
                Wir warten auf Ihre Bewerbung
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                  Anforderungen
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
                  Was wir bieten
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
                Über die Position
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Als Zustellfahrer im GENVEX Team werden Sie das Gesicht von Amazon in Hamburg und sorgen dafür, 
                dass Kunden ihre Pakete sicher und pünktlich erhalten. Sie arbeiten mit modernster Liefertechnologie, 
                fahren moderne Fahrzeuge und sind Teil eines unterstützenden Teams, das Ihre Beiträge schätzt. 
                Das ist mehr als nur ein Job – es ist eine Gelegenheit, eine Karriere in der wachsenden Logistikbranche aufzubauen.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Warum diese Position perfekt für Sie ist:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Selbstständig arbeiten und trotzdem Teil eines unterstützenden Teams sein</li>
                  <li>• Aktiv bleiben und während des Arbeitstages engagiert sein</li>
                  <li>• Mit Kunden interagieren und einen positiven Einfluss in der Gemeinschaft haben</li>
                  <li>• Fähigkeiten in Logistik, Kundenservice und Technologie entwickeln</li>
                  <li>• Aufbau in Richtung Führungs- und Managementmöglichkeiten</li>
                  <li>• Starker Teamzusammenhalt und immer verfügbare Unterstützung</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bereit, Ihre Reise zu starten?
              </h3>
              <p className="text-gray-600 mb-6">
                Werden Sie noch heute Teil des GENVEX Teams und werden Sie Teil von Hamburgs vertrauensvollstem Lieferservice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
                >
                  Bewerbung einreichen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('life')}
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 transition-colors duration-200"
                >
                  Leben bei GENVEX erfahren
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Fragen zum Bewerbungsprozess?
          </p>
          <Button 
            onClick={() => scrollToSection('faq')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            Schauen Sie in unseren FAQ-Bereich
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;