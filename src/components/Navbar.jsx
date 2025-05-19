import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            IC
          </div>
          <span className="ml-3 text-xl font-semibold text-gray-800">Incolors</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.home')}</a>
          <a href="#services" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.services')}</a>
          <a href="#portfolio" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.portfolio')}</a>
          <a href="#about" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.about')}</a>
          <a href="#contact" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.contact')}</a>
          <Link to="/catalogo" className="nav-link text-gray-800 hover:text-indigo-600">{t('nav.catalog')}</Link>

          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow">
          <a onClick={handleLinkClick} href="#home" className="block py-2 text-gray-800">{t('nav.home')}</a>
          <a onClick={handleLinkClick} href="#services" className="block py-2 text-gray-800">{t('nav.services')}</a>
          <a onClick={handleLinkClick} href="#portfolio" className="block py-2 text-gray-800">{t('nav.portfolio')}</a>
          <a onClick={handleLinkClick} href="#about" className="block py-2 text-gray-800">{t('nav.about')}</a>
          <a onClick={handleLinkClick} href="#contact" className="block py-2 text-gray-800">{t('nav.contact')}</a>
          <Link to="/catalogo" onClick={handleLinkClick} className="block py-2 text-gray-800">{t('nav.catalog')}</Link>

          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}