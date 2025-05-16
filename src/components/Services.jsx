// src/components/Services.jsx
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título y descripción de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-indigo-600">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creamos soluciones visuales, impresas y digitales que ayudan a tu empresa a conectar con sus clientes y destacar en el mercado.
          </p>
        </div>

        {/* Grid de servicios responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-palette",
              title: "Diseño de Marca",
              text: "Creamos logos, identidad visual y branding que reflejan la esencia de tu empresa."
            },
            {
              icon: "fas fa-box-open",
              title: "Material POP",
              text: "Diseñamos e imprimimos etiquetas, pendones, empaques y exhibidores que impulsan tus ventas."
            },
            {
              icon: "fas fa-cube",
              title: "Producto Corporativo",
              text: "Desarrollamos productos personalizados como agendas, libretas y cajas para potenciar tu imagen."
            },
            {
              icon: "fas fa-bullhorn",
              title: "Marketing Digital",
              text: "Estrategias creativas para redes sociales, campañas y posicionamiento de marca."
            },
            {
              icon: "fas fa-book-open",
              title: "Diseño Editorial",
              text: "Editamos folletos, revistas, catálogos y presentaciones corporativas de alto impacto."
            },
            {
              icon: "fas fa-object-group",
              title: "Stands y Eventos",
              text: "Diseñamos backings, stands y señalética para potenciar tu marca en exposiciones y ferias."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 service-card"
            >
              {/* Círculo con ícono centrado */}
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto service-icon">
                <i className={service.icon}></i>
              </div>

              {/* Título del servicio */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>

              {/* Descripción del servicio */}
              <p className="text-gray-600 text-center">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}