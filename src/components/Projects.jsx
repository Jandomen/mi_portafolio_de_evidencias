"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "JandoClip",
    link: "https://jando-clip.vercel.app",
    desc: "Portafolio de videos de edición profesional",
    category: "Portafolio",
  },
  {
    title: "JandoTube",
    link: "https://jandotube.vercel.app",
    desc: "Primera versión de plataforma tipo YouTube",
    category: "Portafolio",
  },
  {
    title: "JandoShop",
    link: "https://jandoshop.vercel.app",
    desc: "Tienda online - frontend cliente",
    category: "E-commerce",
  },
  {
    title: "JandoShop Admin",
    link: "https://jandoshop-admin.vercel.app",
    desc: "Panel de administración del e-commerce",
    category: "E-commerce",
  },
  {
    title: "BromiChat",
    link: "https://bromichat.vercel.app",
    desc: "Frontend de chat, actualizado",
    category: "Chat",
  },
  {
    title: "JandoChat",
    link: "https://jandochat.vercel.app",
    desc: "Primera versión del frontend de chat",
    category: "Chat",
  },
  {
    title: "JandiBot",
    link: "https://jandibot.vercel.app",
    desc: "Primera parte visual de JandiBot GPT",
    category: "IA / Chat",
  },
  {
    title: "JandoChain",
    link: "https://jandochain.vercel.app",
    desc: "Frontend de votaciones Web3",
    category: "Web3",
  },
  {
    title: "JandoLive",
    link: "https://jandolive.vercel.app",
    desc: "Video bidireccional con WebRTC",
    category: "Video",
  },
  {
    title: "ZenFlow",
    link: "https://zenflow-one.vercel.app",
    desc: "Landing page lista para deploy",
    category: "Landing Page",
  },
  {
    title: "Mariscon",
    link: "https://mariscon.vercel.app",
    desc: "Web de restaurante, navbar responsivo",
    category: "Landing Page",
  },
];

export default function Projects() {
  return (
    <motion.section className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400 drop-shadow-lg">
        Proyectos
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-800 p-6 rounded-2xl border-2 border-gray-700 
                       hover:border-yellow-400 
                       hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] 
                       transition-all duration-300 
                       flex flex-col justify-between 
                       overflow-hidden
                       group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            
            <span className="text-xs font-semibold mb-2 bg-gray-900/80 px-3 py-1 rounded-full inline-block text-yellow-400 border border-yellow-400/50">
              {project.category}
            </span>

           
            <h3 className="text-lg font-bold mb-2 text-yellow-400 drop-shadow-sm">
              {project.title}
            </h3>

           
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}