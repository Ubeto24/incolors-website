import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-white max-w-2xl"
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
        className="mt-10 md:mt-0 md:ml-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/productos_clientes/hero-incolors.png"
          alt="Incolors Hero"
          className="rounded-xl shadow-lg max-w-sm"
        />
      </motion.div>
    </section>
  );
}