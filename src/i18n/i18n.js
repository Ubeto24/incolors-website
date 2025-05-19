import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './es.json';
import en from './en.json';
import pt from './pt.json';

i18n
  .use(LanguageDetector) // ✅ Detecta idioma del navegador
  .use(initReactI18next) // ✅ Integración con React
  .init({
    fallbackLng: 'es', // ✅ Español como idioma por defecto
    resources: {
      es: { translation: es },
      en: { translation: en },
      pt: { translation: pt }
    },
    interpolation: {
      escapeValue: false // ✅ Previene doble escapado en React
    }
  });

export default i18n;