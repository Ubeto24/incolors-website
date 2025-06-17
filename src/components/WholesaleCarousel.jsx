import React from 'react';
import { useKeenSlider } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import wholesaleProducts from '../data/wholesaleProducts';
import { useTranslation } from 'react-i18next';

export default function WholesaleCarousel() {
  const { i18n } = useTranslation();
  // Solo mostrar si el idioma es inglés
  if (i18n.language !== 'en') return null;

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': { perView: 2 },
      '(max-width: 640px)': { perView: 1 },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-indigo-700">Our Bestselling Wholesale Products</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We offer bulk-ready OEM products, ideal for resellers, brands, and fulfillment partners. Inquire today for MOQ and customization.
      </p>
      <div ref={sliderRef} className="keen-slider">
        {wholesaleProducts.map(product => (
          <div key={product.id} className="keen-slider__slide flex justify-center">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center w-72">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-32 h-32 object-cover rounded mb-4 border"
                loading="lazy"
              />
              <h3 className="font-semibold text-base mb-1 text-gray-800">{product.title}</h3>
              <div className="text-xs text-indigo-600 font-semibold mb-2">{product.category.toUpperCase()}</div>
              <div className="text-lg font-bold text-indigo-700 mb-1">{product.pricePerCase}</div>
              <div className="text-sm text-gray-500 mb-3">{product.unitPrice}</div>
              {product.soldOut ? (
                <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-full font-semibold cursor-not-allowed" disabled>SOLD OUT</button>
              ) : (
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">ADD TO CART</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 