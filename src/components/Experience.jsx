"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBriefcase, FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiKalilinux } from "react-icons/si";

const experiences = [
  {
    title: "Ingeniero de Software",
    company: "Lumière Tech (Francia)",
    period: "2026 – Presente",
    description: [
      "Desarrollo de plataformas web a nivel internacional",
      "Arquitectura escalable y optimización de rendimiento",
    ],
    icons: [<SiNextdotjs key="next" size={24} color="#ffffff" />, <FaReact key="react" size={24} color="#61dafb" />],
  },
  {
    title: "Full Stack Jr.",
    company: "Codrava LP",
    period: "2025 – 2026",
    description: [
      "Desarrollo de Hormiruta (optimización de rutas)",
      "APIs REST y mejora de rendimiento (+30%)",
    ],
    icons: [<SiNextdotjs key="next" size={24} color="#ffffff" />, <FaNodeJs key="node" size={24} color="#339933" />],
  },
  {
    title: "Analista de Ciberseguridad",
    company: "Orange Cyberdefense",
    period: "2023 – 2025",
    description: [
      "Monitoreo de amenazas y respuesta a incidentes (SOC)",
      "Análisis de vulnerabilidades y hardening de sistemas",
    ],
    icons: [<FaShieldAlt key="shield" size={24} color="#ff7900" />, <FaLock key="lock" size={24} color="#ffffff" />],
  },
  {
    title: "Full Stack",
    company: "TechSolutions MX",
    period: "2023 – 2025",
    description: [
      "Desarrollo con React y Node.js",
      "Integración de APIs y bases de datos",
    ],
    icons: [<FaReact key="react" size={24} color="#61dafb" />, <FaNodeJs key="node" size={24} color="#339933" />],
  },
  {
    title: "Especialista en Pentesting",
    company: "Cybolt",
    period: "2021 – 2023",
    description: [
      "Pruebas de penetración y hacking ético",
      "Auditorías de seguridad ofensiva y remediación",
    ],
    icons: [<SiKalilinux key="kali" size={24} color="#557C94" />, <FaUserSecret key="secret" size={24} color="#ffffff" />],
  },
  {
    title: "Frontend",
    company: "Digital Nova Studio",
    period: "2021 – 2023",
    description: [
      "Interfaces con React y Tailwind",
    ],
    icons: [<FaReact key="react" size={24} color="#61dafb" />, <SiTailwindcss key="tailwind" size={24} color="#38bdf8" />],
  },
  {
    title: "Web Jr. Freelance",
    company: "Freelance",
    period: "2020 – 2021",
    description: [
      "Desarrollo de sitios web",
    ],
    icons: [<FaReact key="react" size={24} color="#61dafb" />, <SiJavascript key="js" size={24} color="#f7df1e" />],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experiencia Laboral</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mi trayectoria profesional y proyectos en los que he participado
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea vertical de tiempo */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row justify-between items-center md:h-64 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] border-4 border-slate-950 z-10"></div>

                  {/* Contenido */}
                  <div className={`w-full md:w-5/12 mb-8 md:mb-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
                      <div className={`absolute top-0 w-32 h-32 bg-cyan-500/10 blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-all ${isEven ? "right-0" : "left-0"}`}></div>
                      
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "justify-start" : "md:justify-end justify-start"}`}>
                        {exp.icons.map((icon, i) => (
                          <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                            {icon}
                          </div>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-cyan-500 mb-4 flex-wrap ${isEven ? "justify-start" : "md:justify-end justify-start"}`}>
                        <FaBriefcase className="text-sm" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-slate-400 text-xs ml-1 px-2 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
                          {exp.period}
                        </span>
                      </div>

                      <ul className={`space-y-2 text-slate-300 text-sm ${isEven ? "text-left" : "md:text-right text-left"}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 ${isEven ? "" : "md:flex-row-reverse"}`}>
                            <span className="text-cyan-500 mt-0.5 flex-shrink-0">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
