import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import OpenPositions from "./components/OpenPositions";
import LifeAtGenvex from "./components/LifeAtGenvex";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Homepage />
          <OpenPositions />
          <LifeAtGenvex />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;