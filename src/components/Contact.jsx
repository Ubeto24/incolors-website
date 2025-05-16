// src/components/Contact.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

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
      .catch((error) => alert('Hubo un error al enviar el mensaje: ' + error));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contáctanos <span className="text-yellow-300">Hoy</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white max-w-2xl mx-auto">
            Estamos listos para ayudarte en tus proyectos creativos y corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg text-gray-800">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Información de contacto</h3>
            <p>📍 Dirección: Carrizal, San Antonio de los Altos</p>
            <p>📞 Teléfono: <a href="tel:+584241888534" className="text-indigo-600 hover:underline">+58 424-1888534</a></p>
            <p>📱 WhatsApp: <a href="https://wa.me/+584241888534" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">Escríbenos por WhatsApp</a></p>
            <p>📸 Instagram: <a href="https://instagram.com/incolors.vzla" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">@incolors.vzla</a></p>
            <p>🎵 TikTok: <a href="https://tiktok.com/@incolors.vzla" target="_blank" rel="noreferrer" className="text-black hover:underline">@incolors.vzla</a></p>
          </div>

          {/* Formulario de contacto */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
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
                placeholder="Nombre"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}