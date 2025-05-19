import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    { title: 'FruFru', image: 'https://i.ibb.co/xyz123/frufru.png' },
    { title: 'Peregrina', image: 'https://i.ibb.co/xyz123/peregrina.png' },
    { title: 'Flor de Aragua', image: 'https://i.ibb.co/xyz123/flor-de-aragua.png' },
    { title: 'Tijerazo', image: 'https://i.ibb.co/xyz123/tijeraso.png' },
    { title: 'Holy Chicken', image: 'https://i.ibb.co/xyz123/holychicken.png' },
    { title: 'Beco', image: 'https://i.ibb.co/xyz123/beco.png' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('portfolio.title')} <span className="text-indigo-600">{t('portfolio.highlight')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

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