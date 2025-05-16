// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
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
            Creamos soluciones visuales, impresas y digitales que conectan tu marca con las personas.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#services" className="hover:text-white transition">Servicios</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portafolio</a></li>
            <li><a href="#about" className="hover:text-white transition">Nosotros</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Servicios reales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Diseño de Marca</li>
            <li>Material POP</li>
            <li>Producto Corporativo</li>
            <li>Marketing Digital</li>
            <li>Diseño Editorial</li>
            <li>Stands y Eventos</li>
          </ul>
        </div>

        {/* Suscripción */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
          <p className="text-gray-400 mb-4">Recibe las últimas noticias y ofertas especiales.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Tu email"
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

      {/* Línea inferior con aviso legal */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-center md:text-left">
          © 2025 Incolors Estudio Creativo C.A. • Incolors Global Trade LLC
        </div>
        <div className="text-center md:text-right">
          <Link to="/privacidad" className="hover:underline">Aviso de privacidad</Link>
        </div>
      </div>

      {/* Propiedad intelectual */}
      <div className="mt-4 px-6 text-xs text-center text-gray-500">
        Todo el contenido, imágenes, diseños y elementos gráficos presentes en este sitio son propiedad intelectual de Incolors. Su uso no autorizado está prohibido.
      </div>
    </footer>
  );
}