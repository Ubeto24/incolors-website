// src/components/Services.jsx
import React from 'react';

export default function Services() {
  // Lista de servicios con SVG inline
  const services = [
    {
      title: "Diseño de Marca",
      text: "Creamos logos, identidad visual y branding que reflejan la esencia de tu empresa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828L9 13.828 5 15l1.172-4z" />
        </svg>
      )
    },
    {
      title: "Material POP",
      text: "Diseñamos e imprimimos etiquetas, pendones, empaques y exhibidores que impulsan tus ventas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 2a1 1 0 00-1 1v14l6-3 6 3V3a1 1 0 00-1-1H5z" />
        </svg>
      )
    },
    {
      title: "Producto Corporativo",
      text: "Desarrollamos productos personalizados como agendas, libretas y cajas para potenciar tu imagen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 1l7.997 4.884v8.232L10 19l-7.997-4.884V5.884z" />
        </svg>
      )
    },
    {
      title: "Marketing Digital",
      text: "Estrategias creativas para redes sociales, campañas y posicionamiento de marca.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 13V7a1 1 0 00-1-1H5V4H3v12h2v-2h12a1 1 0 001-1z" />
        </svg>
      )
    },
    {
      title: "Diseño Editorial",
      text: "Editamos folletos, revistas, catálogos y presentaciones corporativas de alto impacto.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z" />
        </svg>
      )
    },
    {
      title: "Stands y Eventos",
      text: "Diseñamos backings, stands y señalética para potenciar tu marca en exposiciones y ferias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3h12v2H4V3zM3 7h14v2H3V7zm2 4h10v2H5v-2zm-1 4h12v2H4v-2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-indigo-600">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creamos soluciones visuales, impresas y digitales que ayudan a tu empresa a conectar con sus clientes y destacar en el mercado.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 service-card"
            >
              {/* Círculo con ícono SVG embebido */}
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto service-icon">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}