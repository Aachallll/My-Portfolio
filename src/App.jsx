import React, { useState, useEffect } from 'react';
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from './component/About';
import Skills from "./component/Skills";
import Project from "./component/Project";
import Footer from "./component/Footer";
import Education from "./component/Education";
import { RiArrowUpSLine } from "@remixicon/react";

function App() {
  const [theme, setTheme] = useState('light'); // Theme state
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App min-h-screen flex flex-col ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-4 rounded-full shadow-lg transition-opacity duration-300 ease-in-out flex items-center justify-center ${
          !showTopButton ? "opacity-0 pointer-events-none" : "opacity-100"
        } bg-blue-800 text-white hover:bg-blue-700`}
        aria-label="Scroll to Top"
      >
        <RiArrowUpSLine size={24} />
      </button>
      
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
