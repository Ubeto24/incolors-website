// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2 items-center">
      <button onClick={() => changeLanguage('es')} title="Español">
        🇻🇪
      </button>
      <button onClick={() => changeLanguage('en')} title="English">
        🇺🇸
      </button>
      <button onClick={() => changeLanguage('pt')} title="Português">
        🇵🇹
      </button>
    </div>
  );
}