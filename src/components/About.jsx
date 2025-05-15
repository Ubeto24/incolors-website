// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre <span className="text-indigo-600">Incolors</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-justify">
            En Incolors nos dedicamos a ofrecer soluciones creativas e innovadoras para potenciar la identidad visual de marcas y emprendimientos. A través de productos personalizados y material publicitario impactante, buscamos generar una conexión memorable entre nuestros clientes y su audiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Misión</h3>
            <p className="text-gray-700 text-justify">
              Brindar productos publicitarios personalizados de alta calidad que impulsen la identidad y presencia de marca de nuestros clientes, generando impacto visual y recordación efectiva en sus audiencias.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Visión</h3>
            <p className="text-gray-700 text-justify">
              Ser reconocidos como la empresa líder en Venezuela en soluciones de material POP y personalización creativa, destacándonos por la innovación, calidad y compromiso con cada proyecto.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Valores</h3>
            <p className="text-gray-700 text-justify">
              Creatividad, responsabilidad, excelencia, compromiso, honestidad y orientación al cliente. Estos valores nos guían para ofrecer siempre un servicio que supere expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}