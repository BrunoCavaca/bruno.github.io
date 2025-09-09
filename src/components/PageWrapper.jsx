// src/components/PageWrapper.jsx
import { motion } from "framer-motion";
import React from "react";

export default function PageWrapper({ title, children }) {
  return (
    <motion.div
      className="p-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block">
        {title}
      </h1>
      <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{children}</div>
    </motion.div>
  );
}
