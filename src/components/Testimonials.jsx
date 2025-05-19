import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Mariana De Sousa',
      title: t('testimonials.mariana.title'),
      comment: t('testimonials.mariana.comment'),
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      rating: 5
    },
    {
      name: 'Carlos Martínez',
      title: t('testimonials.carlos.title'),
      comment: t('testimonials.carlos.comment'),
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      name: 'Laura Fernández',
      title: t('testimonials.laura.title'),
      comment: t('testimonials.laura.comment'),
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 4.5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('testimonials.title')} <span className="text-indigo-600">{t('testimonials.highlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <p className="text-indigo-600 text-sm mb-3">{item.title}</p>
              <p className="text-gray-600 text-sm mb-4">{item.comment}</p>
              <div className="flex justify-center text-yellow-400 text-sm">
                {[...Array(Math.floor(item.rating))].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {item.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}