// src/components/ProductOptions.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductOptions() {
  const products = [
    {
      title: 'Vaso Corporativo',
      description: 'Vasos personalizados con logo para eventos o uso interno.',
      image: 'https://i.ibb.co/DgzTdKC5/image.png',
    },
    {
      title: 'Franelas Promocionales',
      description: 'Camisetas con diseño corporativo para campañas publicitarias.',
      image: 'https://i.ibb.co/0RS5H1MC/image.png',
    },
    {
      title: 'Material POP Básico',
      description: 'Folletos, volantes y carteles promocionales.',
      image: 'https://i.ibb.co/wh91nJBF/image.png',
    },
    {
      title: 'Lanyard Corporativo',
      description: 'Cintas portacarnet con la imagen de tu marca.',
      image: 'https://i.ibb.co/KpDBwpDW/image.png',
    },
    {
      title: 'Llavero tipo Lanyard',
      description: 'Llavero con cinta tipo lanyard personalizado.',
      image: 'https://i.ibb.co/mVGthNCN/image.png',
    },
    {
      title: 'Taza Corporativa',
      description: 'Tazas personalizadas ideales para regalos corporativos.',
      image: 'https://i.ibb.co/LdSfZP7C/image.png',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Productos Destacados</h2>
        <p className="text-gray-600 mb-10">Explora algunos de nuestros productos más solicitados.</p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/catalogo"
          className="inline-block mt-10 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  );
}
