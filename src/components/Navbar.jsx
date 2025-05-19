import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            IC
          </div>
          <span className="ml-3 text-xl font-semibold text-gray-800">Incolors</span>
        </Link>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

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

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col px-6 pt-6 pb-8 shadow-xl animate-slide-in overflow-y-auto">
          <a onClick={handleLinkClick} href="#home" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.home')}</a>
          <a onClick={handleLinkClick} href="#services" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.services')}</a>
          <a onClick={handleLinkClick} href="#portfolio" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.portfolio')}</a>
          <a onClick={handleLinkClick} href="#about" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.about')}</a>
          <a onClick={handleLinkClick} href="#contact" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.contact')}</a>
          <Link onClick={handleLinkClick} to="/catalogo" className="py-3 border-b border-gray-200 text-lg font-medium">{t('nav.catalog')}</Link>

          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
