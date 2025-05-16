// src/components/ProductOptions.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductOptions() {
  // Lista actualizada de productos destacados reales de Incolors
  const products = [
    {
      title: 'Totebag Corporativa',
      description: 'Bolsos tipo tote personalizados con tu logo, ideales para eventos y kits promocionales.',
      image: 'https://i.ibb.co/9T2tN74/totebag.png', // Reemplaza con tu imagen real si es necesario
    },
    {
      title: 'Lanyard Corporativo',
      description: 'Cintas porta credenciales con diseño personalizado para uso interno y eventos.',
      image: 'https://i.ibb.co/KpDBwpDW/image.png',
    },
    {
      title: 'Gorras Promocionales',
      description: 'Gorras bordadas o sublimadas con el logo de tu empresa para activaciones o personal interno.',
      image: 'https://i.ibb.co/nm4btQx/gorra.png', // Reemplaza con imagen real si tienes una mejor
    },
    {
      title: 'Powerbank Personalizado',
      description: 'Baterías portátiles con tu marca, funcionales y útiles como regalo corporativo.',
      image: 'https://i.ibb.co/P6D3pD3/powerbank.png', // Puedes reemplazar esta también
    },
    {
      title: 'Taza Corporativa',
      description: 'Tazas personalizadas ideales para branding interno o regalos empresariales.',
      image: 'https://i.ibb.co/LdSfZP7C/image.png',
    },
    {
      title: 'Pulsera Elástica Corporativa',
      description: 'Pulseras elásticas personalizadas con el nombre o logo de tu empresa.',
      image: 'https://i.ibb.co/zZ6NfNg/pulsera.png', // Asegúrate de tener esta imagen subida
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Título y subtítulo actualizados */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Productos Destacados</h2>
        <p className="text-gray-600 mb-10">
          Conecta con tus clientes a través de productos promocionales funcionales y memorables. Descubre nuestras totebags, lanyards, gorras, powerbanks, tazas y pulseras corporativas.
        </p>

        {/* Grid de productos responsivo */}
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

        {/* Botón para ir al catálogo */}
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