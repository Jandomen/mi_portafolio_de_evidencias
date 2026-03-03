"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaPython, FaDocker, FaPhp, FaVuejs, FaAngular,
  FaSass, FaBootstrap, FaUnity
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiGo, SiTailwindcss, SiMongodb,
  SiMysql, SiPostgresql, SiExpress, SiPostman, SiPrisma,
  SiRedux, SiGraphql, SiFirebase, SiSupabase, SiVercel,
  SiNetlify, SiFigma, SiElectron, SiSocketdotio,
  SiStripe, SiCloudflare, SiNginx, SiVite, SiRender
} from "react-icons/si";
import { DiRedis as DiRedisIcon } from "react-icons/di";

const allTechs = [
  { name: "React", icon: <FaReact size={28} color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} color="#ffffff" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} color="#3178c6" /> },
  { name: "JavaScript", icon: <FaJsSquare size={28} color="#f7df1e" /> },
  { name: "Vue.js", icon: <FaVuejs size={28} color="#42b883" /> },
  { name: "Angular", icon: <FaAngular size={28} color="#dd0031" /> },
  { name: "Vite", icon: <SiVite size={28} color="#646cff" /> },
  { name: "Electron", icon: <SiElectron size={28} color="#478cef" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} color="#339933" /> },
  { name: "Express", icon: <SiExpress size={28} color="#ffffff" /> },
  { name: "Python", icon: <FaPython size={28} color="#3776ab" /> },
  { name: "PHP", icon: <FaPhp size={28} color="#777bb4" /> },
  { name: "Go", icon: <SiGo size={28} color="#00add8" /> },
  { name: "HTML5", icon: <FaHtml5 size={28} color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={28} color="#1572b6" /> },
  { name: "Sass", icon: <FaSass size={28} color="#cc6699" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={28} color="#38bdf8" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={28} color="#7952b3" /> },
  { name: "Redux", icon: <SiRedux size={28} color="#764abc" /> },
  { name: "GraphQL", icon: <SiGraphql size={28} color="#e535ab" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} color="#47a248" /> },
  { name: "MySQL", icon: <SiMysql size={28} color="#4479a1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
  { name: "Redis", icon: <DiRedisIcon size={28} color="#dc382d" /> },
  { name: "Prisma", icon: <SiPrisma size={28} color="#2D3748" /> },
  { name: "Firebase", icon: <SiFirebase size={28} color="#ffca28" /> },
  { name: "Supabase", icon: <SiSupabase size={28} color="#3ecf8e" /> },
  { name: "Docker", icon: <FaDocker size={28} color="#2496ed" /> },
  { name: "Git", icon: <FaGitAlt size={28} color="#f05032" /> },
  { name: "Postman", icon: <SiPostman size={28} color="#ff6c37" /> },
  { name: "Vercel", icon: <SiVercel size={28} color="#ffffff" /> },
  { name: "Netlify", icon: <SiNetlify size={28} color="#00c7b7" /> },
  { name: "Figma", icon: <SiFigma size={28} color="#f24e1e" /> },
  { name: "Socket.io", icon: <SiSocketdotio size={28} color="#010101" /> },
  { name: "Stripe", icon: <SiStripe size={28} color="#635bff" /> },
  { name: "Nginx", icon: <SiNginx size={28} color="#009639" /> },
  { name: "Cloudflare", icon: <SiCloudflare size={28} color="#f38020" /> },
  { name: "Render", icon: <SiRender size={28} color="#46e3b7" /> },
];

export default function Technologies() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"
        >
          {allTechs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.15, y: -8 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/30 transition-all cursor-default"
            >
              <div className="transform transition-transform drop-shadow-lg">
                {tech.icon}
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
