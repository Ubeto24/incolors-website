// src/components/Contact.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === 'en';
  const whatsappNumber = isEnglish ? '+17543301430' : '+584241888534';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/gracias'))
      .catch((error) => alert(t('contact.error') + ': ' + error));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')} <span className="text-yellow-300">{t('contact.highlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg text-gray-800">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t('contact.info_title')}</h3>
            <p>📍 {t('contact.address')}</p>

            {!isEnglish && (
              <p>📞 {t('contact.phone')} <a href="tel:+584241888534" className="text-indigo-600 hover:underline">+58 424-1888534</a></p>
            )}

            {isEnglish && (
              <p>📞 USA Office: <a href="tel:+17543301430" className="text-green-600 hover:underline">+1 754-330-1430</a></p>
            )}

            <p>📱 WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">{whatsappNumber}</a></p>
            <p>📸 Instagram: <a href="https://instagram.com/incolors.vzla" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">@incolors.vzla</a></p>
            <p>🎵 TikTok: <a href="https://tiktok.com/@incolors.vzla" target="_blank" rel="noreferrer" className="text-black hover:underline">@incolors.vzla</a></p>
          </div>

          {/* Formulario de contacto */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name_placeholder')}
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.email_placeholder')}
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
              />
            </div>
            <textarea
              name="message"
              placeholder={t('contact.message_placeholder')}
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
            />

            <div data-netlify-recaptcha="true"></div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
            >
              {t('contact.submit_button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}