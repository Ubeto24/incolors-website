import React from 'react';
import { useTranslation } from 'react-i18next';
import frufru from '../assets/productos_clientes/frufru.png';
import peregrina from '../assets/productos_clientes/peregrina.png';
import tijerazo from '../assets/productos_clientes/tijerazo.png';
import holychicken from '../assets/productos_clientes/holychicken.png';
import beco from '../assets/productos_clientes/beco.png';
import gorraFlorDeAragua from '../assets/productos_clientes/gorra-flordearagua.png';

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    { title: 'FruFru', image: frufru, alt: 'frufru.png' },
    { title: 'Peregrina', image: peregrina, alt: 'peregrina.png' },
    { title: 'Tijerazo', image: tijerazo, alt: 'tijerazo.png' },
    { title: 'Holy Chicken', image: holychicken, alt: 'holychicken.png' },
    { title: 'Beco', image: beco, alt: 'beco.png' },
    { title: 'Flor de Aragua', image: gorraFlorDeAragua, alt: 'gorra-flordearagua.png' }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-72">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}