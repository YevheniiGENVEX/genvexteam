import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check current theme on mount
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const willBeDark = !htmlElement.classList.contains('dark');
    
    if (willBeDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDarkMode(willBeDark);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
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
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Startseite
            </button>
            <button
              onClick={() => scrollToSection('positions')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Stellenangebote
            </button>
            <button
              onClick={() => scrollToSection('life')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Leben bei GENVEX Team
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 mx-4"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <span className="text-xl">
              {isDarkMode ? "☀️" : "🌙"}
            </span>
          </button>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors duration-200"
          >
            Jetzt bewerben
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
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-left"
              >
                Startseite
              </button>
              <button
                onClick={() => scrollToSection('positions')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Stellenangebote
              </button>
              <button
                onClick={() => scrollToSection('life')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Leben bei GENVEX Team
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
                Kontakt
              </button>
              
              {/* Mobile Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <span>Theme</span>
                <span className="text-xl">
                  {isDarkMode ? "☀️" : "🌙"}
                </span>
              </button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 transition-colors duration-200"
              >
                Jetzt bewerben
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;