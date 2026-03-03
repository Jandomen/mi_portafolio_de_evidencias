"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import perfil from "../../public/alejandro.jpeg";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950" />
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex justify-center mb-8 md:mb-0 z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-slate-700 gradient-border">
            <Image src={perfil} alt="Alejandro Serrano Teran" fill className="object-cover" priority />
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-cyan-400 font-medium mb-4 tracking-wider uppercase text-sm"
        >
          Fullstack Developer
        </motion.p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-slate-200">Hola, soy </span>
          <span className="gradient-text">Alejandro</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
          Desarrollo soluciones digitales innovadoras y experiencias web fluidas. 
          Combino creatividad y tecnología para transformar ideas en realidades funcionales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("proyectos")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
          >
            Ver Proyectos
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contacto")}
            className="px-8 py-3 glass rounded-full font-semibold text-white transition-all hover:bg-slate-700/50"
          >
            Contactar
          </motion.button>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("tecnologias")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown size={24} />
        </motion.div>
      </motion.button>
    </motion.section>
  );
}
