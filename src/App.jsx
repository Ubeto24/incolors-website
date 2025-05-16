import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Gracias from './pages/Gracias'; // ✅ Importa tu componente de agradecimiento
import { motion } from 'framer-motion';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>

      {/* Botones sociales flotantes */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/+584241888534"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg transition duration-300"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-sm md:text-2xl"></i>
        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Escríbenos
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/incolors.vzla"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-24 right-6 z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg transition duration-300"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram text-sm md:text-2xl"></i>
        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Instagram
        </span>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@incolors.vzla"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-44 right-6 z-50 bg-black hover:bg-gray-900 text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg transition duration-300"
        aria-label="TikTok"
      >
        <i className="fab fa-tiktok text-sm md:text-2xl"></i>
        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          TikTok
        </span>
      </a>
    </motion.div>
  );
}
