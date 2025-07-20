import React from 'react';
import { Clock, MapPin, Euro, Users, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const OpenPositions_UA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const requirements = [
    "Водійські права категорії B (або готовність отримати)",
    "Надійність та пунктуальність",
    "Фізична підготовка для перенесення посилок (90% посилок важать макс. 5кг)",
    "Базове спілкування німецькою або англійською мовою",
    "Чиста водійська історія"
  ];

  const offerings = [
    "Конкурентна зарплата від €15,50/година",
    "Додатково €10 нетто щодня на харчування",
    "Щомісячні премії за результативність до €300",
    "Комплексна оплачувана програма навчання",
    "Повна зайнятість 40 годин/тиждень",
    "Забезпечення сучасними транспортними засобами доставки",
    "Підтримуюче командне середовище та менторство",
    "Можливості кар'єрного росту в мережі Amazon",
    "Соціальні пільги та варіанти страхування"
  ];

  return (
    <section id="positions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">
            ЗАРАЗ НАБИРАЄМО
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Відкриті вакансії
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Приєднуйтеся до нашої зростаючої команди професійних водіїв доставки в Гамбурзі. 
            Ми шукаємо відданих людей, готових будувати кар'єру з нами.
          </p>
        </div>

        {/* Main Job Card */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">
                  Водій доставки (повна зайнятість)
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                    Гамбург, Німеччина
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-600" />
                    Повна зайнятість, 40 годин/тиждень
                  </div>
                  <div className="flex items-center">
                    <Euro className="h-4 w-4 mr-1 text-blue-600" />
                    Від €15,50/година + €10 щодня
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 mt-4 md:mt-0">
                Доступно декілька позицій
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                  Вимоги
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
                  Що ми пропонуємо
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
                Про роль
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Як водій доставки в команді GENVEX, ви станете обличчям Amazon у Гамбурзі, 
                забезпечуючи безпечне та своєчасне отримання посилок клієнтами. Ви будете працювати з 
                передовими технологіями доставки, керувати сучасними транспортними засобами та бути частиною 
                підтримуючої команди, яка цінує ваш внесок. Це більше ніж просто робота – 
                це можливість побудувати кар'єру у зростаючій логістичній індустрії.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Чому ця роль ідеально підходить для вас:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Працюйте самостійно, залишаючись частиною підтримуючої команди</li>
                  <li>• Залишайтеся активними та залученими протягом робочого дня</li>
                  <li>• Взаємодійте з клієнтами та робіть позитивний вплив у спільноті</li>
                  <li>• Розвивайте навички в логістиці, обслуговуванні клієнтів та технологіях</li>
                  <li>• Будуйте шлях до керівних та управлінських можливостей</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Готові розпочати свою подорож?
              </h3>
              <p className="text-gray-600 mb-6">
                Приєднуйтеся до команди GENVEX сьогодні та станьте частиною найнадійнішої служби доставки Гамбурга.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
                >
                  Подати заявку
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('life')}
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 transition-colors duration-200"
                >
                  Дізнатися про життя в GENVEX
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Є питання щодо процесу подачі заявки?
          </p>
          <Button 
            onClick={() => scrollToSection('faq')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            Перевірте наш розділ FAQ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions_UA;