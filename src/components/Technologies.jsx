"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaPython, FaDocker, FaPhp, FaVuejs, FaAngular,
  FaSass, FaBootstrap, FaUnity, FaShieldAlt, FaLock, FaNetworkWired,
  FaJava, FaLinux, FaAws
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiGo, SiTailwindcss, SiMongodb,
  SiMysql, SiPostgresql, SiExpress, SiPostman, SiPrisma,
  SiRedux, SiGraphql, SiFirebase, SiSupabase, SiVercel,
  SiNetlify, SiFigma, SiElectron, SiSocketdotio,
  SiStripe, SiCloudflare, SiNginx, SiVite, SiRender,
  SiKalilinux, SiMetasploit, SiWireshark, SiBurpsuite,
  SiOwasp, SiC, SiCplusplus, SiKotlin, SiRust,
  SiSpringboot, SiDotnet, SiGithub, SiGitlab, SiUbuntu,
  SiVirtualbox, SiNpm, SiWebpack, SiInsomnia,
  SiGooglecloud, SiJenkins, SiArgo, SiGithubactions, SiRailway,
  SiSnyk, SiAuth0, SiPfsense, SiOpnsense, SiSplunk, SiSnort,
  SiEthereum, SiSolidity, SiBitcoin, SiPolygon, SiSolana,
  SiCardano, SiPolkadot, SiEthers, SiIpfs, SiAlchemy,
  SiThirdweb, SiOpenzeppelin, SiChainlink, SiOptimism,
  SiUnrealengine, SiGodotengine, SiThreedotjs, SiBabylondotjs,
  SiOpengl, SiVulkan, SiWebgl
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { DiRedis as DiRedisIcon } from "react-icons/di";

const techCategories = {
  "Frontend": [
    { name: "React", icon: <FaReact size={28} color="#61dafb" /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} color="#ffffff" /> },
    { name: "TypeScript", icon: <SiTypescript size={28} color="#3178c6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={28} color="#f7df1e" /> },
    { name: "Vue.js", icon: <FaVuejs size={28} color="#42b883" /> },
    { name: "Angular", icon: <FaAngular size={28} color="#dd0031" /> },
    { name: "HTML5", icon: <FaHtml5 size={28} color="#e34f26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={28} color="#1572b6" /> },
    { name: "Sass", icon: <FaSass size={28} color="#cc6699" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} color="#38bdf8" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={28} color="#7952b3" /> },
    { name: "Redux", icon: <SiRedux size={28} color="#764abc" /> },
    { name: "Electron", icon: <SiElectron size={28} color="#478cef" /> },
    { name: "Vite", icon: <SiVite size={28} color="#646cff" /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs size={28} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={28} color="#ffffff" /> },
    { name: "Python", icon: <FaPython size={28} color="#3776ab" /> },
    { name: "Java", icon: <FaJava size={28} color="#f89820" /> },
    { name: "C", icon: <SiC size={28} color="#a8b9cc" /> },
    { name: "C++", icon: <SiCplusplus size={28} color="#00599c" /> },
    { name: "C#", icon: <TbBrandCSharp size={28} color="#239120" /> },
    { name: "Kotlin", icon: <SiKotlin size={28} color="#7f52ff" /> },
    { name: "Rust", icon: <SiRust size={28} color="#dea584" /> },
    { name: "Go", icon: <SiGo size={28} color="#00add8" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={28} color="#6db33f" /> },
    { name: ".NET", icon: <SiDotnet size={28} color="#512bd4" /> },
    { name: "PHP", icon: <FaPhp size={28} color="#777bb4" /> },
    { name: "GraphQL", icon: <SiGraphql size={28} color="#e535ab" /> },
    { name: "Socket.io", icon: <SiSocketdotio size={28} color="#010101" /> },
    { name: "Prisma", icon: <SiPrisma size={28} color="#2D3748" /> },
  ],
  "Bases de Datos": [
    { name: "MongoDB", icon: <SiMongodb size={28} color="#47a248" /> },
    { name: "MySQL", icon: <SiMysql size={28} color="#4479a1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
    { name: "Redis", icon: <DiRedisIcon size={28} color="#dc382d" /> },
    { name: "Firebase", icon: <SiFirebase size={28} color="#ffca28" /> },
    { name: "Supabase", icon: <SiSupabase size={28} color="#3ecf8e" /> },
  ],
  "Ciberseguridad": [
    { name: "Kali Linux", icon: <SiKalilinux size={28} color="#557C94" /> },
    { name: "Metasploit", icon: <SiMetasploit size={28} color="#ff0000" /> },
    { name: "Wireshark", icon: <SiWireshark size={28} color="#1679A7" /> },
    { name: "Burp Suite", icon: <SiBurpsuite size={28} color="#ff6633" /> },
    { name: "Nmap", icon: <FaNetworkWired size={28} color="#4bb1e4" /> },
    { name: "OWASP", icon: <SiOwasp size={28} color="#ffffff" /> },
    { name: "Pentesting", icon: <FaShieldAlt size={28} color="#ff7900" /> },
    { name: "Hacking Ético", icon: <FaLock size={28} color="#ffffff" /> },
    { name: "Splunk", icon: <SiSplunk size={28} color="#ffffff" /> },
    { name: "Snort", icon: <SiSnort size={28} color="#049fd9" /> },
    { name: "pfSense", icon: <SiPfsense size={28} color="#1475cf" /> },
    { name: "OPNsense", icon: <SiOpnsense size={28} color="#d94f00" /> },
    { name: "Snyk", icon: <SiSnyk size={28} color="#8b87c0" /> },
    { name: "Auth0", icon: <SiAuth0 size={28} color="#eb5424" /> },
  ],
  "Blockchain & Web3": [
    { name: "Ethereum", icon: <SiEthereum size={28} color="#627eea" /> },
    { name: "Solidity", icon: <SiSolidity size={28} color="#d1d5db" /> },
    { name: "Bitcoin", icon: <SiBitcoin size={28} color="#f7931a" /> },
    { name: "Polygon", icon: <SiPolygon size={28} color="#8247e5" /> },
    { name: "Solana", icon: <SiSolana size={28} color="#9945ff" /> },
    { name: "Cardano", icon: <SiCardano size={28} color="#1668e3" /> },
    { name: "Polkadot", icon: <SiPolkadot size={28} color="#e6007a" /> },
    { name: "ethers.js", icon: <SiEthers size={28} color="#4c6ef5" /> },
    { name: "IPFS", icon: <SiIpfs size={28} color="#65c2cb" /> },
    { name: "Alchemy", icon: <SiAlchemy size={28} color="#9747ff" /> },
    { name: "Thirdweb", icon: <SiThirdweb size={28} color="#f213a4" /> },
    { name: "OpenZeppelin", icon: <SiOpenzeppelin size={28} color="#4e5ee4" /> },
    { name: "Chainlink", icon: <SiChainlink size={28} color="#2a5ada" /> },
    { name: "Optimism", icon: <SiOptimism size={28} color="#ff0420" /> },
  ],
  "Game Dev": [
    { name: "Unity", icon: <FaUnity size={28} color="#ffffff" /> },
    { name: "Unreal Engine", icon: <SiUnrealengine size={28} color="#d4d4d8" /> },
    { name: "Godot", icon: <SiGodotengine size={28} color="#478cbf" /> },
    { name: "Three.js", icon: <SiThreedotjs size={28} color="#ffffff" /> },
    { name: "Babylon.js", icon: <SiBabylondotjs size={28} color="#bb4648" /> },
    { name: "OpenGL", icon: <SiOpengl size={28} color="#5586a4" /> },
    { name: "Vulkan", icon: <SiVulkan size={28} color="#ac162c" /> },
    { name: "WebGL", icon: <SiWebgl size={28} color="#990000" /> },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <FaDocker size={28} color="#2496ed" /> },
    { name: "Git", icon: <FaGitAlt size={28} color="#f05032" /> },
    { name: "GitHub Actions", icon: <SiGithubactions size={28} color="#2088ff" /> },
    { name: "Jenkins", icon: <SiJenkins size={28} color="#d24939" /> },
    { name: "Argo", icon: <SiArgo size={28} color="#ef7b4e" /> },
    { name: "AWS", icon: <FaAws size={28} color="#ff9900" /> },
    { name: "Google Cloud", icon: <SiGooglecloud size={28} color="#4285f4" /> },
    { name: "Vercel", icon: <SiVercel size={28} color="#ffffff" /> },
    { name: "Netlify", icon: <SiNetlify size={28} color="#00c7b7" /> },
    { name: "Railway", icon: <SiRailway size={28} color="#a970ff" /> },
    { name: "Nginx", icon: <SiNginx size={28} color="#009639" /> },
    { name: "Cloudflare", icon: <SiCloudflare size={28} color="#f38020" /> },
    { name: "Render", icon: <SiRender size={28} color="#46e3b7" /> },
    { name: "Postman", icon: <SiPostman size={28} color="#ff6c37" /> },
  ],
  "Herramientas": [
    { name: "VS Code", icon: <TbBrandVscode size={28} color="#007acc" /> },
    { name: "GitHub", icon: <SiGithub size={28} color="#ffffff" /> },
    { name: "GitLab", icon: <SiGitlab size={28} color="#fc6d26" /> },
    { name: "Linux", icon: <FaLinux size={28} color="#fcc624" /> },
    { name: "Ubuntu", icon: <SiUbuntu size={28} color="#e95420" /> },
    { name: "VirtualBox", icon: <SiVirtualbox size={28} color="#4b8bbe" /> },
    { name: "npm", icon: <SiNpm size={28} color="#cb3837" /> },
    { name: "Webpack", icon: <SiWebpack size={28} color="#8dd6f9" /> },
    { name: "Insomnia", icon: <SiInsomnia size={28} color="#7b68ee" /> },
    { name: "Figma", icon: <SiFigma size={28} color="#f24e1e" /> },
    { name: "Stripe", icon: <SiStripe size={28} color="#635bff" /> },
  ],
};

const categories = ["Todas", ...Object.keys(techCategories)];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredTechs =
    activeCategory === "Todas"
      ? Object.values(techCategories).flat()
      : techCategories[activeCategory];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? "text-white shadow-lg shadow-cyan-500/25"
                  : "text-slate-400 bg-slate-800/60 border border-slate-700/50 hover:text-white hover:border-cyan-500/30"
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/30 transition-colors cursor-default"
              >
                <div className="transform drop-shadow-lg">
                  {tech.icon}
                </div>
                <span className="text-xs text-slate-400 font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
