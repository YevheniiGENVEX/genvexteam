import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header_UA from "./components/Header_UA";
import Homepage_UA from "./components/Homepage_UA";
import OpenPositions_UA from "./components/OpenPositions_UA";
import LifeAtGenvex_UA from "./components/LifeAtGenvex_UA";
import FAQ_UA from "./components/FAQ_UA";
import Contact_UA from "./components/Contact_UA";
import Footer_UA from "./components/Footer_UA";

function App_UA() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header_UA />
        <main>
          <Homepage_UA />
          <OpenPositions_UA />
          <LifeAtGenvex_UA />
          <FAQ_UA />
          <Contact_UA />
        </main>
        <Footer_UA />
      </BrowserRouter>
    </div>
  );
}

export default App_UA;