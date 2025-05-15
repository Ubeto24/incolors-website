import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Lanyard Corporativo',
    category: 'material pop',
    image: 'https://i.ibb.co/DgzTdKC5/image.png',
    description: 'Cintas portacarnet personalizadas para eventos y empresas.'
  },
  {
    id: 2,
    name: 'Llavero tipo Lanyard',
    category: 'material pop',
    image: 'https://i.ibb.co/0RS5H1M/IMG-20240523-123008-214.jpg',
    description: 'Llavero con cinta personalizada para uso promocional.'
  },
  {
    id: 3,
    name: 'Taza Corporativa',
    category: 'vasos',
    image: 'https://i.ibb.co/wh91nJB/IMG-20240523-122938-984.jpg',
    description: 'Taza personalizada ideal para regalos empresariales.'
  },
  {
    id: 4,
    name: 'Franelas Sublimadas',
    category: 'franelas',
    image: 'https://i.ibb.co/KpDBwpD/IMG-20240523-122930-753.jpg',
    description: 'Franelas con diseño corporativo y logos a todo color.'
  },
  {
    id: 5,
    name: 'Pendones y Banners',
    category: 'material pop',
    image: 'https://i.ibb.co/mVGthNC/IMG-20240523-122919-430.jpg',
    description: 'Soluciones visuales para puntos de venta o eventos.'
  },
  {
    id: 6,
    name: 'Stickers personalizados',
    category: 'material pop',
    image: 'https://i.ibb.co/LdSfZP7C/image.png',
    description: 'Etiquetas adhesivas para branding y promociones.'
  },
  {
    id: 7,
    name: 'Botones Publicitarios',
    category: 'material pop',
    image: 'https://i.ibb.co/0VdwgvfT/image.png',
    description: 'Botones redondos ideales para ferias y campañas.'
  },
  {
    id: 8,
    name: 'Chapas Magnéticas',
    category: 'material pop',
    image: 'https://i.ibb.co/5xrmJLv/IMG-20240523-122858-814.jpg',
    description: 'Identificación profesional con sistema magnético.'
  },
  {
    id: 9,
    name: 'Identificadores PVC',
    category: 'material pop',
    image: 'https://i.ibb.co/rffjzby/IMG-20240523-122849-486.jpg',
    description: 'Carnets rígidos de alta calidad para colaboradores.'
  },
  {
    id: 10,
    name: 'Libretas Corporativas',
    category: 'tech',
    image: 'https://i.ibb.co/C5KkqfK/image.png',
    description: 'Cuadernos personalizados con logo y diseño corporativo.'
  },
  {
    id: 11,
    name: 'Vasos térmicos',
    category: 'vasos',
    image: 'https://i.ibb.co/TB6n5m6/image.png',
    description: 'Vasos térmicos reutilizables con impresión full color.'
  },
  {
    id: 12,
    name: 'Power Bank Personalizado',
    category: 'tech',
    image: 'https://i.ibb.co/G4dchYY/image.png',
    description: 'Cargador portátil con logo ideal como regalo corporativo.'
  },
  {
    id: 13,
    name: 'Cable Multifunción',
    category: 'tech',
    image: 'https://i.ibb.co/Y7xJnbR/image.png',
    description: 'Cable USB multi entrada con logotipo personalizado.'
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const categories = ['all', 'material pop', 'vasos', 'franelas', 'tech'];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Catálogo de <span className="text-indigo-600">Productos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Explora nuestra variedad de productos por categoría.
          </p>
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Volver al inicio
          </a>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProducts.map(product => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              layout
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Catalog;