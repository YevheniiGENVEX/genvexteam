import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer_UA = () => {
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
                src="https://i.imgur.com/TIvcRlb.png" 
                alt="GENVEX Team Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Провідний партнер служби доставки Amazon у Гамбурзі, відданий досягненню 
              досконалості при побудові кар'єр у зростаючій логістичній індустрії.
            </p>
            <p className="text-gray-400 text-sm">
              Офіційний партнер Amazon | Обслуговуємо Гамбург та прилеглі регіони
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Головна
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('positions')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Вакансії
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('life')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Життя в GENVEX
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
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактна інформація</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Unterm Heilbrunnen 8</p>
                  <p className="text-gray-300">21029 Гамбург, Німеччина</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+4917640099823"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  +49 176 400 99823
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
                <span className="text-gray-300">Пн-Сб: 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 GENVEX Team. Всі права захищені.</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <span>Партнер служби доставки Amazon</span>
              <span>•</span>
              <span>Роботодавець рівних можливостей</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Приєднуйтеся до команди, яка доставляє майбутнє логістики в Гамбурзі
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_UA;