// src/components/Portfolio.jsx
import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Lanyard Corporativo',
      image: 'https://i.ibb.co/DgzTdKC5/image.png',
    },
    {
      title: 'Diseño de Producto',
      image: 'https://i.ibb.co/G4dchYYR/image.png',
    },
    {
      title: 'Publicidad Impresa',
      image: 'https://i.ibb.co/Y7xJnbRW/image.png',
    },
    {
      title: 'Merchandising Promocional',
      image: 'https://i.ibb.co/DgzTdKC5/image.png',
    },
    {
      title: 'Identidad Visual',
      image: 'https://i.ibb.co/LdSfZP7C/image.png',
    },
    {
      title: 'Packaging Creativo',
      image: 'https://i.ibb.co/LdSfZP7C/image.png',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-indigo-600">Portafolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mira algunos de nuestros proyectos más destacados en branding, diseño y material POP.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}