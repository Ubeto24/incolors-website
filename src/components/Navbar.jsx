// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Cierra menú al cambiar idioma
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo-incolors.png" alt="Incolors logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-semibold text-gray-800">Incolors</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.home')}</a>
          <a href="#services" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.services')}</a>
          <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.portfolio')}</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.about')}</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.contact')}</a>
          <Link to="/catalogo" className="text-gray-700 hover:text-indigo-600 nav-link">{t('nav.catalog')}</Link>
          {i18n.language === 'en' && (
            <Link to="/wholesale" className="text-gray-700 hover:text-indigo-600 nav-link font-bold">Wholesale</Link>
          )}

          {/* Language Selector */}
          <div className="flex space-x-2 ml-4">
            <button onClick={() => changeLanguage('es')} className="text-xl">🇻🇪</button>
            <button onClick={() => changeLanguage('en')} className="text-xl">🇺🇸</button>
            <button onClick={() => changeLanguage('pt')} className="text-xl">🇵🇹</button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white px-6 py-4 shadow-lg space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.home')}</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.services')}</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.portfolio')}</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.about')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.contact')}</a>
          <Link to="/catalogo" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600">{t('nav.catalog')}</Link>

          {/* Idiomas móvil */}
          <div className="flex space-x-3 pt-3 border-t border-gray-200">
            <button onClick={() => changeLanguage('es')} className="text-xl">🇻🇪</button>
            <button onClick={() => changeLanguage('en')} className="text-xl">🇺🇸</button>
            <button onClick={() => changeLanguage('pt')} className="text-xl">🇵🇹</button>
          </div>
        </nav>
      )}
    </header>
  );
}