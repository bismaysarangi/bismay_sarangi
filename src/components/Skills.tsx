import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPython,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#00f3ff]">{"<"}</span>
            <span className="text-white">TECH_STACK</span>
            <span className="text-[#00f3ff]">{" />"}</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="border-2 border-gray-700 bg-black/30 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center gap-3 hover:border-[#00f3ff] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                <skill.icon
                  size={48}
                  className="transition-all duration-300"
                  style={{
                    color: skill.color,
                    filter: "drop-shadow(0 0 8px currentColor)",
                  }}
                />
                <span className="text-white font-mono text-sm group-hover:text-[#00f3ff] transition-colors">
                  {skill.name}
                </span>
              </div>

              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#ff006e] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Additional skills text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-mono text-sm">
            {">"} Also experienced with: REST APIs, GraphQL, CI/CD, AWS,
            Responsive Design, and more...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
