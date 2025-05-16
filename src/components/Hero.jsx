// Importación del módulo React
import React from 'react';

// Componente funcional Hero
export default function Hero() {
  return (
    // Sección principal con ID "home" y fondo degradado personalizado
    <section
      id="home"
      className="hero-clip-path bg-gradient-to-r from-indigo-500 to-purple-600 pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Contenedor centrado con paddings */}
      <div className="container mx-auto px-6">
        {/* Layout flexible para columna en móviles y fila en desktop */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Columna izquierda: texto y botones */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            {/* Título principal con tipografía grande y negrita */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Impulsamos marcas con{' '}
              <span className="text-yellow-300">creatividad</span>
            </h1>

            {/* Subtítulo con descripción clara del servicio */}
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Diseñamos y producimos productos corporativos y publicitarios que
              conectan con tus clientes y elevan el valor de tu marca. Somos tu
              aliado creativo de confianza.
            </p>

            {/* Botones: contacto y portafolio */}
            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Botón primario */}
              <a
                href="#contact"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
              >
                Contáctanos
              </a>
              {/* Botón secundario con estilo de borde */}
              <a
                href="#portfolio"
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-semibold transition duration-300"
              >
                Ver trabajos
              </a>
            </div>
          </div>

          {/* Columna derecha: imagen representativa */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Material POP"
              className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
