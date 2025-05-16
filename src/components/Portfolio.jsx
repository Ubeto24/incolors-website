// src/components/Portfolio.jsx
import React from 'react';

export default function Portfolio() {
  // Proyectos reales con marcas reconocidas
  const projects = [
    {
      title: 'FruFru',
      image: 'https://i.ibb.co/xyz123/frufru.png', // Reemplaza con imagen real
    },
    {
      title: 'Peregrina',
      image: 'https://i.ibb.co/xyz123/peregrina.png',
    },
    {
      title: 'Flor de Aragua',
      image: 'https://i.ibb.co/xyz123/flor-de-aragua.png',
    },
    {
      title: 'Tijeraso',
      image: 'https://i.ibb.co/xyz123/tijeraso.png',
    },
    {
      title: 'Holy Chicken',
      image: 'https://i.ibb.co/xyz123/holychicken.png',
    },
    {
      title: 'Beco',
      image: 'https://i.ibb.co/xyz123/beco.png',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Encabezado actualizado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Portafolio de <span className="text-indigo-600">Clientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grandes marcas han confiado en nosotros para dar vida a sus ideas. Cada proyecto representa una relación de confianza, creatividad y compromiso que nos impulsa a seguir creciendo.

          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}