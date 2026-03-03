"use client";

import { motion } from "framer-motion";
import { FaHome, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function ScrollButtons() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    { id: "inicio", icon: <FaHome />, label: "Inicio" },
    { id: "tecnologias", icon: <FaCode />, label: "Tecnologías" },
    { id: "proyectos", icon: <FaFolderOpen />, label: "Proyectos" },
    { id: "contacto", icon: <FaEnvelope />, label: "Contacto" },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {buttons.map((btn, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(btn.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative p-3 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-700 transition-all shadow-lg"
          aria-label={btn.label}
        >
          {btn.icon}
          <span className="absolute right-full mr-3 px-3 py-1 text-sm bg-slate-800 text-slate-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
            {btn.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
