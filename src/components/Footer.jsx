"use client";

import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

// Animation variants for the footer
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Animation variants for social icons
const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.3 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="py-12 px-6 bg-gray-900 text-gray-300 text-center flex flex-col items-center justify-center w-full"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      {/* Copyright Text */}
      <p className="text-sm mb-4 md:text-base">
        &copy; {new Date().getFullYear()} Alejandro Serrano Teran. Todos los derechos reservados.
      </p>

      {/* Social Links with Icons */}
      <div className="flex space-x-6 mb-4">
        <motion.a
          href="https://github.com/jandomen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-neon-pink transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
          aria-label="GitHub Profile"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </motion.a>
        <motion.a
          href="https://web.facebook.com/alejandroserranoteran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-neon-pink transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
          aria-label="Facebook Profile"
        >
          <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
        </motion.a>
        <motion.a
          href="mailto:alquizor8@gmail.com"
          className="text-gray-300 hover:text-neon-pink transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
          aria-label="Email Contact"
        >
          <FaEnvelope className="w-6 h-6 md:w-8 md:h-8" />
        </motion.a>
      </div>

      {/* Contact Email */}
      <p className="text-sm md:text-base">
        Contacto: <a href="mailto:alquizor8@gmail.com" className="text-neon-pink hover:underline">alquizor8@gmail.com</a>
      </p>
    </motion.footer>
  );
}