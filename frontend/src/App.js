import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// German version components
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import OpenPositions from "./components/OpenPositions";
import LifeAtGenvex from "./components/LifeAtGenvex";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Ukrainian version components
import Header_UA from "./components/Header_UA";
import Homepage_UA from "./components/Homepage_UA";
import OpenPositions_UA from "./components/OpenPositions_UA";
import LifeAtGenvex_UA from "./components/LifeAtGenvex_UA";
import FAQ_UA from "./components/FAQ_UA";
import Contact_UA from "./components/Contact_UA";
import Footer_UA from "./components/Footer_UA";

// Language switcher component
const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="fixed top-24 right-20 z-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 border border-gray-200 dark:border-gray-600">
      <div className="flex gap-2">
        <button
          onClick={() => onLanguageChange('de')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            currentLang === 'de'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <img 
            src="https://flagcdn.com/16x12/de.png" 
            alt="German flag" 
            className="w-4 h-3"
          />
          DE
        </button>
        <button
          onClick={() => onLanguageChange('ua')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            currentLang === 'ua'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <img 
            src="https://flagcdn.com/16x12/ua.png" 
            alt="Ukrainian flag" 
            className="w-4 h-3"
          />
          УКР
        </button>
      </div>
    </div>
  );
};

// German version
const GermanVersion = ({ onLanguageChange }) => (
  <>
    <LanguageSwitcher currentLang="de" onLanguageChange={onLanguageChange} />
    <Header />
    <main>
      <Homepage />
      <OpenPositions />
      <LifeAtGenvex />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

// Ukrainian version
const UkrainianVersion = ({ onLanguageChange }) => (
  <>
    <LanguageSwitcher currentLang="ua" onLanguageChange={onLanguageChange} />
    <Header_UA />
    <main>
      <Homepage_UA />
      <OpenPositions_UA />
      <LifeAtGenvex_UA />
      <FAQ_UA />
      <Contact_UA />
    </main>
    <Footer_UA />
  </>
);

function App() {
  const [language, setLanguage] = React.useState('de');
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Load theme preference from localStorage on mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Add global theme toggle function to window
  React.useEffect(() => {
    window.toggleTheme = () => {
      const htmlElement = document.documentElement;
      const currentlyDark = htmlElement.classList.contains('dark');
      
      if (currentlyDark) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
        console.log('Switched to light mode');
        
        // Update button icon
        const button = document.querySelector('#theme-toggle-btn');
        if (button) button.innerHTML = '🌙';
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
        console.log('Switched to dark mode');
        
        // Update button icon
        const button = document.querySelector('#theme-toggle-btn');
        if (button) button.innerHTML = '☀️';
      }
    };
  }, []);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    // Scroll to top when changing language
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              language === 'ua' 
                ? <UkrainianVersion onLanguageChange={handleLanguageChange} />
                : <GermanVersion onLanguageChange={handleLanguageChange} />
            } 
          />
          <Route 
            path="/ua" 
            element={<UkrainianVersion onLanguageChange={handleLanguageChange} />} 
          />
          <Route 
            path="/de" 
            element={<GermanVersion onLanguageChange={handleLanguageChange} />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;