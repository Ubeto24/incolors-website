import React from 'react';
import WholesaleCarousel from './WholesaleCarousel';
import { useTranslation } from 'react-i18next';

export default function WholesalePage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-100 py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">{t('wholesale.title')}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">{t('wholesale.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">💰</span>
            <h3 className="font-semibold text-lg mb-1">{t('wholesale.discount_title')}</h3>
            <p className="text-gray-600 text-sm">{t('wholesale.discount_text')}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🏷️</span>
            <h3 className="font-semibold text-lg mb-1">{t('wholesale.private_label_title')}</h3>
            <p className="text-gray-600 text-sm">{t('wholesale.private_label_text')}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🌍</span>
            <h3 className="font-semibold text-lg mb-1">{t('wholesale.shipping_title')}</h3>
            <p className="text-gray-600 text-sm">{t('wholesale.shipping_text')}</p>
          </div>
        </div>

        <a
          href="https://wa.link/tu-enlace-de-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-700 transition"
        >
          {t('wholesale.contact_button')}
        </a>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <WholesaleCarousel />
      </div>
    </section>
  );
}