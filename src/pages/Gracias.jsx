import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export default function Gracias() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por tu mensaje! 🎉</h2>
        <p className="text-gray-600 mb-6">
          Hemos recibido tu consulta y te responderemos lo antes posible.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </motion.section>
  );
}// src/pages/Gracias.jsx
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
        Hemos recibido tu consulta y te contactaremos muy pronto.
      </p>
      <Link to="/">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Volver al inicio
        </button>
      </Link>
    </motion.section>
  );
}