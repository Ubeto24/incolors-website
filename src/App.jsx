import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductOptions from './components/ProductOptions';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IncolorsSocialSection from './components/IncolorsSocialSection';
import { motion } from 'framer-motion';
import AnimatedLanguageWrapper from './components/AnimatedLanguageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedLanguageWrapper>
        <Navbar />
        <Hero />
        <Services />
        <ProductOptions />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <IncolorsSocialSection />
        <Footer />
      </AnimatedLanguageWrapper>

      <a
        href="https://wa.me/+584241888534"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg transition duration-300"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-sm md:text-2xl" />
        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Escríbenos
        </span>
      </a>
    </motion.div>
  );
}