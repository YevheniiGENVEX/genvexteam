import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, MessageCircle, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Homepage_UA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Приєднуйтеся до команди GENVEX Team –{' '}
            <span className="text-blue-600">Доставляємо успіх</span> з Amazon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Станьте частиною провідного партнера служби доставки Amazon у Гамбурзі. 
            Ми шукаємо надійних водіїв, які хочуть розвиватися разом з нами та робити реальний внесок у наше співтовариство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
            >
              Подати заявку зараз
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('positions')}
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-200"
            >
              Переглянути вакансії
            </Button>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ваш партнер у досконалості доставки
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Як офіційний партнер служби доставки Amazon у Гамбурзі, команда GENVEX Team поєднує 
            надійність логістичної мережі Amazon з нашим прагненням до розвитку та задоволення працівників.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Надійність</h3>
              <p className="text-gray-600">
                Стабільна робота та надійне обслуговування, на яке можуть розраховувати клієнти та колеги.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Командний дух</h3>
              <p className="text-gray-600">
                Міцна співпраця та взаємна підтримка створюють позитивне робоче середовище, де кожен досягає успіху разом.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Завжди на зв'язку</h3>
              <p className="text-gray-600">
                Постійна комунікація та пряма підтримка гарантують, що ви ніколи не залишитеся наодинці.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Підтримка</h3>
              <p className="text-gray-600">
                Всебічне супроводження та постійні можливості розвитку в нашій зростаючій компанії.
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
                Чому варто обрати команду GENVEX?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Офіційний партнер Amazon з повною підтримкою (також за межами робочого процесу)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Конкурентна оплата: €15,50 брутто/година + €10 щодня на харчування (нетто)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Комплексне навчання та постійний розвиток</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Сучасний парк доставки та обладнання безпеки</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Підтримуюче командне середовище в Гамбурзі з міцною згуртованістю</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Цілодобова підтримка диспетчера та прямий зв'язок з командою</p>
                </div>
              </div>
              <Button 
                onClick={() => scrollToSection('positions')}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                size="lg"
              >
                Дослідити можливості
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Готові приєднатися до нас?</h3>
                <p className="text-gray-700 mb-6">
                  Зробіть перший крок до корисної кар'єри у службах доставки з надійним партнером Amazon у Гамбурзі.
                </p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full transition-colors duration-200"
                >
                  Розпочати заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage_UA;