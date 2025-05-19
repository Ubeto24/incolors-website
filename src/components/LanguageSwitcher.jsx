import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', label: '🇪🇸', name: 'Español' },
    { code: 'en', label: '🇺🇸', name: 'English' },
    { code: 'pt', label: '🇵🇹', name: 'Português' } // 🇵🇹 Portugal
  ];

  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`text-xl sm:text-2xl transition hover:scale-110 ${
            i18n.language === lang.code ? 'opacity-100' : 'opacity-40'
          }`}
          aria-label={`Cambiar a ${lang.name}`}
          title={lang.name}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}