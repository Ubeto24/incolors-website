import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana De Sousa',
      title: 'Estudiante',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      comment:
        'Incolors me ayudó en el desarrollo de mi tesis. Permitiendo estudiar su línea de reciclaje de plástico PET utilizado en sus procesos de impresión 3D.',
      rating: 5
    },
    {
      name: 'Carlos Martínez',
      title: 'Director, TechSolutions',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment:
        'El equipo de Incolors entendió perfectamente nuestras necesidades y entregó un sitio web corporativo que superó todas nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Laura Fernández',
      title: 'Gerente, TaskMaster',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      comment:
        'La aplicación móvil que desarrolló Incolors ha sido fundamental para mejorar la productividad de nuestro equipo. ¡Excelente trabajo!',
      rating: 4.5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen <span className="text-indigo-600">nuestros clientes</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Testimonios reales de empresas que han confiado en nosotros para sus proyectos digitales.
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