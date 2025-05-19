import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('about.title')} <span className="text-indigo-600">Incolors</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-justify">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{t('about.mission_title')}</h3>
            <p className="text-gray-700 text-justify">
              {t('about.mission_text')}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{t('about.vision_title')}</h3>
            <p className="text-gray-700 text-justify">
              {t('about.vision_text')}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{t('about.values_title')}</h3>
            <p className="text-gray-700 text-justify">
              {t('about.values_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}