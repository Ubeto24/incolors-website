import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding principal */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              IC
            </div>
            <span className="ml-3 text-xl font-bold">Incolors</span>
          </div>
          <p className="text-gray-400">
            {t('footer.description')}
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white transition">{t('nav.home')}</a></li>
            <li><a href="#services" className="hover:text-white transition">{t('nav.services')}</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">{t('nav.portfolio')}</a></li>
            <li><a href="#about" className="hover:text-white transition">{t('nav.about')}</a></li>
            <li><a href="#contact" className="hover:text-white transition">{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Servicios reales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>{t('footer.brand_design')}</li>
            <li>{t('footer.pop_material')}</li>
            <li>{t('footer.corporate_product')}</li>
            <li>{t('footer.digital_marketing')}</li>
            <li>{t('footer.editorial_design')}</li>
            <li>{t('footer.stands_events')}</li>
          </ul>
        </div>

        {/* Suscripción */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.subscribe')}</h3>
          <p className="text-gray-400 mb-4">{t('footer.subscribe_text')}</p>
          <form className="flex">
            <input
              type="email"
              placeholder={t('footer.email_placeholder')}
              className="px-4 py-2 rounded-l-full text-gray-800 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-r-full"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-center md:text-left">
          © 2025 Incolors Estudio Creativo C.A. • Incolors Group LLC
        </div>
        <div className="text-center md:text-right">
          <Link to="/privacidad" className="hover:underline">{t('footer.privacy')}</Link>
        </div>
      </div>

      {/* Propiedad intelectual */}
      <div className="mt-4 px-6 text-xs text-center text-gray-500">
        {t('footer.copyright')}
      </div>
    </footer>
  );
}