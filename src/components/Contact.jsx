import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contáctanos <span className="text-yellow-300">Hoy</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto mb-6"></div>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Estamos listos para ayudarte en tus proyectos creativos y corporativos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Información de contacto */}
          <div className="md:w-1/2 space-y-6 text-white">
            <h3 className="text-2xl font-semibold mb-4">Información de contacto</h3>
            <p>📍 Dirección: Carrizal, San Antonio de los Altos</p>
            <p>📞 Teléfono: <a href="tel:+584241888534" className="text-indigo-200 hover:underline">+58 424-1888534</a></p>
            <p>📱 WhatsApp: <a href="https://wa.me/+584241888534" target="_blank" rel="noreferrer" className="text-green-300 hover:underline">Escríbenos por WhatsApp</a></p>
            <p>📷 Instagram: <a href="https://instagram.com/incolors.vzla" target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">@incolors.vzla</a></p>
            <p>🎵 TikTok: <a href="https://www.tiktok.com/@incolors.vzla" target="_blank" rel="noreferrer" className="text-white hover:underline">@incolors.vzla</a></p>
          </div>

          {/* Formulario de contacto */}
          <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8">
            <form name="contact" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Escribe tu mensaje..."
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none h-40"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}