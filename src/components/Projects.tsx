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
    tech: ["React", "Python", "FastAPI", "MongoDB"],
    github: "https://github.com/bismaysarangi/resume-parser-and-manager",
    live: "https://resume-parser-and-manager.vercel.app/",
  },
  {
    title: "InsightXL",
    description:
      "Excel data analysis and visualization tool with powerful insights generation and interactive dashboards.",
    tech: ["JavaScript", "React", "Chart.js", "Node.js"],
    github: "https://github.com/bismaysarangi/insightXL",
    live: "https://insightxl.onrender.com/",
  },
  {
    title: "eKYC Consent Vault",
    description:
      "Secure digital vault for managing eKYC documents and consent with blockchain-based verification.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Blockchain"],
    github: "https://github.com/bismaysarangi/ekyc-consent-vault",
    live: "https://ekyc-consent-vault.vercel.app/",
  },
  {
    title: "Inkly",
    description:
      "Creative blogging platform with rich text editing, markdown support, and social features.",
    tech: ["JavaScript", "React", "Cloudinary", "MongoDB"],
    github: "https://github.com/bismaysarangi/inkly",
    live: "https://inkly-ashen.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="retro-divider mb-16 md:mb-24" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#f0c674]">{"["}</span>
            <span className="text-[#c8c8b4]"> PROJECTS </span>
            <span className="text-[#f0c674]">{"]"}</span>
          </h2>
          <p className="text-[#c8c8b4]/50 text-base md:text-lg">
            Some things I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full bg-[#16162a]/50 backdrop-blur-sm border border-[#2a2a3e] hover:border-[#f0c674]/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(240,198,116,0.08)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[#c8c8b4] group-hover:text-[#f0c674] transition-colors font-mono text-base md:text-lg leading-snug">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#c8c8b4]/45 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono bg-[#f0c674]/8 text-[#f0c674]/80 border border-[#f0c674]/15 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent border border-[#f0c674]/50 text-[#f0c674] hover:bg-[#f0c674] hover:text-[#0f0f0f] transition-all duration-300 text-xs md:text-sm py-2.5 font-mono"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent border border-[#61afef]/50 text-[#61afef] hover:bg-[#61afef] hover:text-white transition-all duration-300 text-xs md:text-sm py-2.5 font-mono"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        Live Link
                      </a>
                    </Button>
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
