// src/components/IncolorsSocialSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function IncolorsSocialSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Síguenos en <span className="text-indigo-600">Redes Sociales</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Mantente conectado con nuestras últimas novedades, lanzamientos y promociones exclusivas.
        </p>

        <div className="flex justify-center space-x-6 mt-8">
          {/* Instagram */}
          <a
            href="https://instagram.com/incolors.vzla"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white text-2xl hover:scale-105 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+584241888534"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl hover:scale-105 transition"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@incolors.ve?_t=ZM-8wQzWOUrk7L&_r=1"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white text-2xl hover:scale-105 transition"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </section>
  );
}