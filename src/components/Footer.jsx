// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div>
            <a href="#" className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">IC</div>
              <span className="ml-3 text-xl font-semibold">Incolors</span>
            </a>
            <p className="text-gray-400 text-sm sm:text-base">Creatividad sin límites para transformar tu negocio digital.</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Inicio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portafolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">Nosotros</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Diseño Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Desarrollo Móvil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">E-commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">SEO</a></li>
            </ul>
          </div>

          {/* Suscripción */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Recibe las últimas noticias y ofertas especiales.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-none text-gray-800 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-indigo-700 transition"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 sm:mb-0">© 2023 Incolors. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}