import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroImage from '../assets/productos_clientes/hero-incolors.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
        className="text-white max-w-2xl z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-lg mb-8">{t("hero.subtitle")}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#contact"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-100 transition"
          >
            {t("hero.cta_quote")}
          </a>
          <a
            href="#portfolio"
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
          >
            {t("hero.cta_portfolio")}
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 md:-ml-8 lg:-ml-16 flex-shrink-0 z-0"
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
      >
        <motion.img
          src={heroImage}
          alt="Incolors Hero"
          className="rounded-xl shadow-lg max-w-md w-[400px] md:w-[440px] lg:w-[500px]"
          initial={{ scale: 0.95 }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}