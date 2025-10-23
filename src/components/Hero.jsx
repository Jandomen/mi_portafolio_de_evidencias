"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import perfil from "../../public/alejandro.jpeg";

export default function Hero() {
  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 md:px-20"
    >
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-neon-pink shadow-neon-pink/50">
          <Image src={perfil} alt="Alejandro Serrano Teran" fill className="object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-neon-pink drop-shadow-lg">
          Alejandro Serrano Teran
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
          Desarrollador Fullstack apasionado por construir soluciones digitales innovadoras y eficientes. Me
          especializo en crear experiencias web fluidas, intuitivas y visualmente impactantes, combinando creatividad y
          tecnología para transformar ideas en realidades funcionales.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ec4899, 0 0 40px #8b5cf6" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="bg-gradient-to-r from-neon-purple to-neon-blue px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all"
        >
          Contacta conmigo
        </motion.button>
      </div>
    </motion.section>
  );
}