import React from 'react';
export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-indigo-600">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones digitales integrales diseñadas para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-paint-brush",
              title: "Diseño Web",
              text: "Creamos sitios web atractivos y funcionales que reflejan la esencia de tu marca."
            },
            {
              icon: "fas fa-mobile-alt",
              title: "Desarrollo Móvil",
              text: "Aplicaciones nativas e híbridas para cualquier dispositivo."
            },
            {
              icon: "fas fa-chart-line",
              title: "Marketing Digital",
              text: "Estrategias personalizadas para aumentar tu visibilidad."
            },
            {
              icon: "fas fa-shopping-cart",
              title: "E-commerce",
              text: "Soluciones completas para vender en línea de forma efectiva."
            },
            {
              icon: "fas fa-search",
              title: "SEO",
              text: "Mejora tu posicionamiento y tráfico orgánico en Google."
            },
            {
              icon: "fas fa-bullhorn",
              title: "Branding",
              text: "Identidad de marca clara y diferenciada."
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 service-card">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}