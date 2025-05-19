// ✅ src/components/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 px-6 py-8 flex flex-col space-y-6"
    >
      <button onClick={onClose} className="text-right text-2xl font-bold">&times;</button>

      <Link to="/" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.home')}</Link>
      <a href="#services" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.services')}</a>
      <a href="#portfolio" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.portfolio')}</a>
      <a href="#about" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.about')}</a>
      <a href="#contact" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.contact')}</a>
      <Link to="/catalogo" onClick={onClose} className="text-lg font-medium text-gray-800">{t('nav.catalog')}</Link>

      <div className="mt-8">
        <LanguageSwitcher />
      </div>
    </motion.div>
  );
}
