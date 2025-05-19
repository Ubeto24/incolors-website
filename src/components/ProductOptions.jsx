import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProductOptions() {
  const { t } = useTranslation();

  const products = [
    {
      title: t('products.totebag.title'),
      description: t('products.totebag.description'),
      image: 'https://i.ibb.co/9T2tN74/totebag.png',
    },
    {
      title: t('products.lanyard.title'),
      description: t('products.lanyard.description'),
      image: 'https://i.ibb.co/KpDBwpDW/image.png',
    },
    {
      title: t('products.cap.title'),
      description: t('products.cap.description'),
      image: 'https://i.ibb.co/nm4btQx/gorra.png',
    },
    {
      title: t('products.powerbank.title'),
      description: t('products.powerbank.description'),
      image: 'https://i.ibb.co/P6D3pD3/powerbank.png',
    },
    {
      title: t('products.mug.title'),
      description: t('products.mug.description'),
      image: 'https://i.ibb.co/LdSfZP7C/image.png',
    },
    {
      title: t('products.bracelet.title'),
      description: t('products.bracelet.description'),
      image: 'https://i.ibb.co/zZ6NfNg/pulsera.png',
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
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
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