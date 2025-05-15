// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contáctanos <span className="text-yellow-300">Hoy</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto mb-6"></div>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Estamos listos para ayudarte en tus proyectos creativos y corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">Información de contacto</h3>
            <p><span className="mr-2">📍</span>Dirección: Carrizal, San Antonio de los Altos</p>
            <p>
              <span className="mr-2">📞</span>Teléfono:{' '}
              <a href="tel:+584241888534" className="text-yellow-300 underline">+58 424-1888534</a>
            </p>
            <p>
              <span className="mr-2">📱</span>WhatsApp:{' '}
              <a href="https://wa.me/+584241888534" className="text-green-300 underline" target="_blank" rel="noreferrer">
                Escríbenos por WhatsApp
              </a>
            </p>
            <p>
              <span className="mr-2">📷</span>Instagram:{' '}
              <a href="https://instagram.com/incolors.vzla" className="text-pink-300 underline" target="_blank" rel="noreferrer">
                @incolors.vzla
              </a>
            </p>
            <p>
              <span className="mr-2">🎵</span>TikTok:{' '}
              <a href="https://tiktok.com/@incolors.vzla" className="text-white underline" target="_blank" rel="noreferrer">
                @incolors.vzla
              </a>
            </p>
          </div>

          {/* Formulario */}
          <form className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Correo"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}