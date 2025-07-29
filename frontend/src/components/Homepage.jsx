import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, MessageCircle, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Homepage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Werde Teil des GENVEX Team –{' '}
            <span className="text-blue-600">Erfolg liefern</span> mit Amazon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Werde Teil von Hamburgs führendem Amazon Delivery Service Partner. 
            Wir suchen zuverlässige Fahrer, die mit uns wachsen und einen echten Unterschied in unserer Gemeinschaft machen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
            >
              Jetzt bewerben
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('positions')}
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-200"
            >
              Stellenangebote ansehen
            </Button>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihr Partner für exzellente Zustellung
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als offizieller Amazon Delivery Service Partner in Hamburg verbindet das GENVEX Team 
            die Zuverlässigkeit des Amazon-Logistiknetzwerks mit unserem Engagement für Mitarbeiterentwicklung und -zufriedenheit.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zuverlässigkeit</h3>
              <p className="text-gray-600">
                Beständige Leistung und verlässlicher Service, auf den sich Kunden und Teammitglieder verlassen können.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teamgeist</h3>
              <p className="text-gray-600">
                Starke Zusammenarbeit und gegenseitige Unterstützung schaffen ein positives Arbeitsumfeld, in dem alle gemeinsam erfolgreich sind.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Immer verbunden</h3>
              <p className="text-gray-600">
                Konstante Kommunikation und direkter Support sorgen dafür, dass Sie niemals allein sind.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unterstützung</h3>
              <p className="text-gray-600">
                Umfassende Betreuung und kontinuierliche Entwicklungsmöglichkeiten in unserem wachsenden Unternehmen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose GENVEX */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Warum GENVEX Team wählen?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Offizieller Amazon DSP mit vollständiger Unterstützung</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Attraktive Vergütung: €15,50/Stunde + €10 täglich für Verpflegung (netto)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Umfassende Schulung und kontinuierliche Weiterentwicklung</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Moderne Lieferfahrzeuge und Sicherheitsausrüstung</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Unterstützendes Teamumfeld in Hamburg mit starkem Zusammenhalt</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">24/7 Dispatcher-Support und direkter Draht zum Team</p>
                </div>
              </div>
              <Button 
                onClick={() => scrollToSection('positions')}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                size="lg"
              >
                Möglichkeiten erkunden
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bereit, Teil unseres Teams zu werden?</h3>
                <p className="text-gray-700 mb-6">
                  Machen Sie den ersten Schritt zu einer lohnenden Karriere im Lieferservice mit Hamburgs vertrauensvollem Amazon DSP.
                </p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full transition-colors duration-200"
                >
                  Bewerbung starten
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;