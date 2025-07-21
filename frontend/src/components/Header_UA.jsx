import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header_UA = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.imgur.com/TIvcRlb.png" 
              alt="GENVEX Team Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Головна
            </button>
            <button
              onClick={() => scrollToSection('positions')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Вакансії
            </button>
            <button
              onClick={() => scrollToSection('life')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Життя в GENVEX
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Контакти
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors duration-200"
          >
            Подати заявку
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Головна
              </button>
              <button
                onClick={() => scrollToSection('positions')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Вакансії
              </button>
              <button
                onClick={() => scrollToSection('life')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Життя в GENVEX
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Контакти
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 transition-colors duration-200"
              >
                Подати заявку
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header_UA;