import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// German/English version components
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
    <div className="fixed top-20 right-4 z-40 bg-white shadow-lg rounded-lg p-2 border">
      <div className="flex gap-2">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
            currentLang === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          DE/EN
        </button>
        <button
          onClick={() => onLanguageChange('ua')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
            currentLang === 'ua'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          УКР
        </button>
      </div>
    </div>
  );
};

// German/English version
const GermanVersion = ({ onLanguageChange }) => (
  <>
    <LanguageSwitcher currentLang="en" onLanguageChange={onLanguageChange} />
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
  const [language, setLanguage] = React.useState('en');

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