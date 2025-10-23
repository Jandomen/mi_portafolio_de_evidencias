"use client";

import { motion } from "framer-motion";
import { FaHome, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function ScrollButtons() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`No se encontró la sección con id: ${id}`);
    }
  };

  const buttons = [
    { id: "inicio", icon: <FaHome />, label: "Inicio", color: "from-purple-600 to-pink-500" },
    { id: "tecnologias", icon: <FaCode />, label: "Tecnologías", color: "from-blue-600 to-cyan-400" },
    { id: "proyectos", icon: <FaFolderOpen />, label: "Proyectos", color: "from-green-500 to-emerald-400" },
    { id: "contacto", icon: <FaEnvelope />, label: "Contacto", color: "from-yellow-500 to-orange-400" },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {buttons.map((btn, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(btn.id)}
          whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className={`p-3 rounded-full bg-gradient-to-r ${btn.color} text-white shadow-lg hover:opacity-90 transition relative group`}
          aria-label={btn.label}
        >
          {btn.icon}
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2 py-1 text-sm bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition text-white whitespace-nowrap">
            {btn.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
