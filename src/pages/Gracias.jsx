// src/pages/Gracias.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Link } from 'react-router-dom';

export default function Gracias() {
  const { width, height } = useWindowSize();

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <Confetti width={width} height={height} />
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">¡Gracias por tu mensaje!</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Hemos recibido tu consulta y te responderemos muy pronto.
      </p>
      <Link to="/">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Volver al inicio
        </button>
      </Link>
    </motion.section>
  );
}