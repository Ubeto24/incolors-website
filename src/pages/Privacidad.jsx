// src/pages/Privacidad.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Privacidad() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{t('privacy.title')}</h1>

      <p className="mb-6">{t('privacy.intro')}</p>

      <h2 className="text-xl font-semibold mb-2 mt-6">{t('privacy.section1_title')}</h2>
      <p className="mb-4">{t('privacy.section1_text')}</p>

      <h2 className="text-xl font-semibold mb-2 mt-6">{t('privacy.section2_title')}</h2>
      <p className="mb-4">{t('privacy.section2_text')}</p>

      <h2 className="text-xl font-semibold mb-2 mt-6">{t('privacy.section3_title')}</h2>
      <p className="mb-4">{t('privacy.section3_text')}</p>

      <h2 className="text-xl font-semibold mb-2 mt-6">{t('privacy.section4_title')}</h2>
      <p className="mb-4">{t('privacy.section4_text')}</p>

      <h2 className="text-xl font-semibold mb-2 mt-6">{t('privacy.section5_title')}</h2>
      <p className="mb-4">{t('privacy.section5_text')}</p>

      <p className="mt-8 text-sm text-gray-500 italic">{t('privacy.footer')}</p>
    </section>
  );
}