"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "JandoClip",
    link: "https://jando-clip.vercel.app",
    desc: "Portafolio de videos de edición profesional",
    category: "Portafolio",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "JandoTube",
    link: "https://jandotube.vercel.app",
    desc: "Plataforma tipo YouTube",
    category: "Portafolio",
    tech: ["Next.js", "React", "MongoDB"],
  },
  {
    title: "JandoShop",
    link: "https://jandoshop.vercel.app",
    desc: "Tienda online - frontend cliente",
    category: "E-commerce",
    tech: ["Next.js", "React", "Tailwind", "Stripe"],
  },
  {
    title: "JandoShop Admin",
    link: "https://jandoshop-admin.vercel.app",
    desc: "Panel de administración del e-commerce",
    category: "E-commerce",
    tech: ["Next.js", "React", "Prisma"],
  },
  {
    title: "BromiChat",
    link: "https://bromichat.vercel.app",
    desc: "Frontend de chat en tiempo real",
    category: "Chat",
    tech: ["React", "Socket.io", "Node.js"],
  },
  {
    title: "JandoChat",
    link: "https://jandochat.vercel.app",
    desc: "Chat en tiempo real",
    category: "Chat",
    tech: ["React", "Socket.io", "Express"],
  },
  {
    title: "JandiBot",
    link: "https://jandibot.vercel.app",
    desc: "Interfaz de chatbot con IA",
    category: "IA",
    tech: ["React", "OpenAI", "Tailwind"],
  },
  {
    title: "JandoChain",
    link: "https://jandochain.vercel.app",
    desc: "Sistema de votaciones Web3",
    category: "Web3",
    tech: ["React", "Solidity", "Ethers.js"],
  },
  {
    title: "JandoLive",
    link: "https://jandolive.vercel.app",
    desc: "Video bidireccional con WebRTC",
    category: "Video",
    tech: ["React", "WebRTC", "Socket.io"],
  },
  {
    title: "ZenFlow",
    link: "https://zenflow-one.vercel.app",
    desc: "Landing page moderna",
    category: "Landing",
    tech: ["Next.js", "Tailwind", "Framer"],
  },
  {
    title: "Mariscon",
    link: "https://mariscon.vercel.app",
    desc: "Web de restaurante",
    category: "Landing",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Hormiruta",
    link: "https://hormiruta.vercel.app",
    desc: "App para optimización y gestión de rutas",
    category: "Logística",
    tech: ["Next.js", "React", "Maps API", "PostgreSQL"],
  },
  {
    title: "Jandrogen",
    link: "https://jandrogen.vercel.app",
    desc: "Tienda e-commerce para generadores de hidrógeno",
    category: "E-commerce",
    tech: ["Vite", "React", "Tailwind", "Stripe"],
  },
  {
    title: "JandoMoon",
    link: "https://jandomoon.vercel.app",
    desc: "Juego interactivo tipo arcade",
    category: "Juego",
    tech: ["Vite", "React", "Canvas API"],
  },
];

const categoryColors = {
  Portafolio: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
  "E-commerce": { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  Chat: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400" },
  IA: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400" },
  Web3: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
  Video: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400" },
  Landing: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
  Logística: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400" },
  Juego: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400" },
};

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo web
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = categoryColors[project.category] || categoryColors["Portafolio"];
            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group relative p-6 rounded-2xl bg-slate-800/50 border ${colors.border} hover:bg-slate-800 transition-all duration-300 flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {project.category}
                    </span>
                    <FaExternalLinkAlt className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={14} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                    {project.tech?.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
