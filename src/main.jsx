import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Catalog from './pages/Catalog.jsx';
import NotFound404 from './pages/NotFound404.jsx';
import Gracias from './pages/Gracias.jsx'; // ✅ Nueva página de agradecimiento

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componente que maneja las rutas con animaciones
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/gracias" element={<Gracias />} /> {/* ✅ Nueva ruta */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);