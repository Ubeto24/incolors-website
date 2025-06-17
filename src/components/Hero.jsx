import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="hero-clip-path bg-gradient-to-r from-indigo-500 to-purple-600 pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Columna izquierda: texto y botones */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {t('hero.title')}{' '}
              <span className="text-yellow-300">{t('hero.highlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
              >
                {t('hero.cta_contact')}
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-semibold transition duration-300"
              >
                {t('hero.cta_portfolio')}
              </a>
            </div>
          </div>

          {/* Columna derecha: imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Productos publicitarios Incolors"
              className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}