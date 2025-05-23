import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function NotFound404() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('notfound.title')}</h2>
      <p className="text-gray-600 mb-6">{t('notfound.description')}</p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        {t('notfound.back_home')}
      </Link>
    </motion.div>
  );
}