import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProductOptions() {
  const { t } = useTranslation();

  const products = [
    {
      title: t('products.totebag.title'),
      description: t('products.totebag.description'),
      image: '/assets/productos_clientes/totebag.png',
    },
    {
      title: t('products.lanyard.title'),
      description: t('products.lanyard.description'),
      image: '/assets/productos_clientes/lanyard.png',
    },
    {
      title: t('products.cap.title'),
      description: t('products.cap.description'),
      image: '/assets/productos_clientes/gorra-corporativa.png',
    },
    {
      title: t('products.powerbank.title'),
      description: t('products.powerbank.description'),
      image: '/assets/productos_clientes/powerbank.png',
    },
    {
      title: t('products.mug.title'),
      description: t('products.mug.description'),
      image: '/assets/productos_clientes/taza-incolors.png',
    },
    {
      title: t('products.bracelet.title'),
      description: t('products.bracelet.description'),
      image: '/assets/productos_clientes/pulsera-corporativa.png',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          {t('products.section_title')}
        </h2>
        <p className="text-gray-600 mb-10">
          {t('products.section_description')}
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="w-full h-72 mb-4 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/catalogo"
          className="inline-block mt-10 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          {t('products.catalog_button')}
        </Link>
      </div>
    </section>
  );
}