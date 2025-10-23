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
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-neon-blue">
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
            className="bg-gradient-to-br from-blue-700 via-purple-600 to-cyan-500 p-6 rounded-2xl shadow-neon-blue/50 hover:shadow-neon-purple/60 transition flex flex-col justify-between border-2 border-transparent hover:border-cyan-400"
          >
            <span className="text-sm font-semibold mb-2 bg-white/10 px-2 py-1 rounded-full inline-block text-cyan-200">
              {project.category}
            </span>
            <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{project.title}</h3>
            <p className="text-gray-100 text-sm">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
