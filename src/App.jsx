
import React, { useState, useEffect } from 'react';

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Footer from "./component/Footer";
import Education from "./component/Education";

function App() {
  const [theme, setTheme] = useState('light'); // Initial theme is set to light
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme to the body element
  };

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

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    <div className={`App min-h-screen flex flex-col ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <Navbar />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-4 rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${
          !showTopButton ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-gray-700 text-gray-300'
        }`}
      >
        &#8679; Top
      </button>
      <button
        onClick={toggleTheme}
        className={`fixed bottom-16 right-5 p-2 rounded-full shadow-lg transition-all duration-300 ${
          theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
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
