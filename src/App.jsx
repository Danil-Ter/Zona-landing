import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css';
import WOW from 'wow.js';
import { Element } from "react-scroll";

const App = () => {
  useEffect(() => {
    const wow = new WOW({
      offset: 300
    });
    wow.init();
  }, []);


  return (
    <div>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
