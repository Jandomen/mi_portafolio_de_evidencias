"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/jandomen",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alejandro-serrano-teran",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Email",
    href: "mailto:alquizor8@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="py-16 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Trabajemos juntos</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            ¿Tienes un proyecto en mente? No dudes en contactarme. 
            Estoy disponible para colaboraciones y oportunidades profesionales.
          </p>
          
          <a
            href="mailto:alquizor8@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            Enviar mensaje
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all border border-slate-700 hover:border-cyan-500/30"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Alejandro Serrano Teran. 
            <span className="flex items-center gap-1">
              Hecho con <FaHeart className="text-pink-500" size={12} /> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
