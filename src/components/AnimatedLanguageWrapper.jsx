// src/components/AnimatedLanguageWrapper.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AnimatedLanguageWrapper({ children }) {
  const { i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}