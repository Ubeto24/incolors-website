import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Catalog from './pages/Catalog.jsx';
import Gracias from './pages/Gracias.jsx';
import Privacidad from './pages/Privacidad.jsx';
import WholesalePage from './pages/WholesalePage.jsx';
import NotFound404 from './pages/NotFound404.jsx';

// Idiomas
import './i18n/i18n.js';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/wholesale" element={<WholesalePage />} />
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
