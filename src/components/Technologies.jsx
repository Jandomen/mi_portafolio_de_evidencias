"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaPython, FaDocker, FaPhp, FaMoon
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiKubernetes, SiGo,
  SiTailwindcss, SiMongodb, SiMysql, SiPostgresql,
  SiExpress, SiPostman
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

export default function Technologies() {
  const categories = [
    {
      title: "Lenguajes",
      items: [
        { name: "JavaScript", icon: <FaJsSquare size={40} color="#f7df1e" /> },
        { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
        { name: "Python", icon: <FaPython size={40} color="#3776ab" /> },
        { name: "PHP", icon: <FaPhp size={40} color="#777bb4" /> },
        { name: "HTML5", icon: <FaHtml5 size={40} color="#e34f26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572b6" /> },
      ],
    },
    {
      title: "Frameworks / Librerías",
      items: [
        { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
        { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
      ],
    },
    {
      title: "Contenedores / Orquestación",
      items: [
        { name: "Docker", icon: <FaDocker size={40} color="#2496ed" /> },
        { name: "Podman", icon: <DiRedis size={40} color="#dc382d" /> },
      ],
    },
    {
      title: "Bases de Datos",
      items: [
        { name: "MySQL", icon: <SiMysql size={40} color="#4479a1" /> },
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47a248" /> },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { name: "Git", icon: <FaGitAlt size={40} color="#f05032" /> },
        { name: "Postman", icon: <SiPostman size={40} color="#ff6c37" /> },
        { name: "Insomnia", icon: <FaMoon size={40} color="#4000bf" /> },
      ],
    },
  ];

  return (
    <motion.section className="py-20 px-6 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center mb-12 text-neon-pink drop-shadow-lg">Tecnologías que manejo</h2>
      {categories.map((category, i) => (
        <div key={i} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {category.items.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="flex flex-col items-center gap-2 hover:text-neon-cyan transition-all"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
