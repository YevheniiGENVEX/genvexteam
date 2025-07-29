import React, { useState } from 'react';
import { Clock, Coffee, MapPin, Users, Truck, Award, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const LifeAtGenvex_UA = () => {
  const [activeTab, setActiveTab] = useState('typical-day');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamPhotos = [
    {
      title: "Наш автопарк доставки",
      description: "Сучасні, добре обслуговувані транспортні засоби, оснащені найновішими технологіями доставки",
      image: "https://i.imgur.com/BoQ9lWO.jpeg"
    },
    {
      title: "Станція завантаження",
      description: "Організований та ефективний процес сортування та завантаження посилок",
      image: "https://i.imgur.com/pMREY0z.jpeg"
    }
  ];

  const dailySchedule = [
    { time: "10:40", activity: "Прибуття до депо", icon: Coffee },
    { time: "10:50", activity: "Завантаження підготовленого маршруту", icon: Truck },
    { time: "11:10", activity: "Відправлення на доставку", icon: MapPin },
    { time: "19:10", activity: "Повернення до депо, завершальні процедури", icon: Award }
  ];

  return (
    <section id="life" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Життя в команді GENVEX
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Дізнайтеся, як насправді працювати з провідною командою доставки Гамбурга. 
            Від щоденних рутин до командної культури - отримайте інсайдерський погляд на ваше майбутнє робоче місце.
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
            Типовий день
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
            Команда і автопарк
          </Button>
        </div>

        {/* Typical Day Tab */}
        {activeTab === 'typical-day' && (
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  День з життя водія GENVEX <span className="text-sm font-normal text-gray-500">(опціонально)</span>
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
                    Що робить наш робочий день особливим
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Гнучкість:</strong> Маршрути планують ефективно для мінімізації стресу</li>
                    <li>• <strong>Підтримка:</strong> Завжди на зв'язку з диспетчерською для допомоги</li>
                    <li>• <strong>Технології:</strong> Розвинені GPS та додатки доставки спрощують навігацію</li>
                    <li>• <strong>Досягнення:</strong> Бачте прямий вплив своєї роботи кожен день</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team Photos Tab */}
        {activeTab === 'team-photos' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {teamPhotos.map((photo, index) => {
                const isLoadingStation = photo.title === "Станція завантаження";
                const CardComponent = ({ children }) => (
                  <Card key={index} className={`shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isLoadingStation ? 'cursor-pointer' : ''}`}>
                    {children}
                  </Card>
                );

                if (isLoadingStation) {
                  return (
                    <a
                      key={index}
                      href="https://maps.app.goo.gl/dHkAXQWg7iYmye2y8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${photo.image})` }}>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {photo.title}
                          </h3>
                          <p className="text-gray-600">
                            {photo.description}
                          </p>
                          <p className="text-blue-600 text-sm mt-2 font-medium">
                            🗺️ Переглянути на Google Maps
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  );
                } else {
                  return (
                    <Card key={index} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${photo.image})` }}>
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
                  );
                }
              })}
            </div>

            {/* Video Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-12 mb-6">
                  <PlayCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Дивіться: Життя водія GENVEX
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Скоро: Внутрішній погляд на те, як насправді бути частиною нашої команди
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">
                    Відео доступне скоро
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
              <h3 className="font-semibold text-gray-900 mb-2">Командний дух</h3>
              <p className="text-sm text-gray-600">Міцні зв'язки та взаємна підтримка</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Сучасний автопарк</h3>
              <p className="text-sm text-gray-600">Добре обслуговувані, надійні транспортні засоби</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Баланс роботи-життя</h3>
              <p className="text-sm text-gray-600">Структуровані графіки, справедливі години</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Готові приєднатися до нашої команди?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Відчуйте різницю роботи з компанією, яка цінує своїх водіїв та 
            інвестує в їх успіх. Ваша кар'єра в доставці починається тут.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
          >
            Розпочніть заявку сьогодні
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtGenvex_UA;