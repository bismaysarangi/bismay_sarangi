import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Resume Parser & Manager",
    description:
      "A sophisticated tool for parsing and managing resumes with advanced text extraction and analysis capabilities.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/bismaysarangi/resume-parser-and-manager",
    demo: null,
  },
  {
    title: "InsightXL",
    description:
      "Excel data analysis and visualization tool with powerful insights generation and interactive dashboards.",
    tech: ["JavaScript", "React", "Chart.js"],
    github: "https://github.com/bismaysarangi/insightXL",
    demo: null,
  },
  {
    title: "eKYC Consent Vault",
    description:
      "Secure digital vault for managing eKYC documents and consent with blockchain-based verification.",
    tech: ["TypeScript", "React", "Node.js", "Blockchain"],
    github: "https://github.com/bismaysarangi/ekyc-consent-vault",
    demo: null,
  },
  {
    title: "Inkly",
    description:
      "Creative blogging platform with rich text editing, markdown support, and social features.",
    tech: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/bismaysarangi/inkly",
    demo: null,
  },
  {
    title: "GraphiQue",
    description:
      "Interactive graph visualization library with advanced algorithms and customizable rendering.",
    tech: ["JavaScript", "D3.js", "Canvas API"],
    github: "https://github.com/bismaysarangi/graphiQue",
    demo: null,
  },
  {
    title: "Synchronize Web",
    description:
      "Real-time collaboration platform for synchronizing tasks and workflows across teams.",
    tech: ["TypeScript", "React", "WebSocket", "Node.js"],
    github: "https://github.com/bismaysarangi/synchronize-web",
    demo: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#ff006e]">{"["}</span>
            <span className="text-white">PROJECTS</span>
            <span className="text-[#ff006e]">{"]"}</span>
          </h2>
          <p className="text-gray-400 text-lg">Some things I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-black/30 backdrop-blur-sm border-2 border-gray-700 hover:border-[#ff006e] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,0,110,0.3)]">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-[#ff006e] transition-colors font-mono">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-transparent border-2 border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-black transition-all duration-300"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
