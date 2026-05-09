import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "> BISMAY SARANGI_";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Warm grid background */}
      <div className="absolute inset-0 retro-grid [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f0c674]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal-style header */}
          <div className="mb-8 inline-block">
            <div className="border border-[#2a2a3e] bg-[#0f0f0f]/70 backdrop-blur-sm p-6 rounded-xl font-mono shadow-[0_0_40px_rgba(240,198,116,0.05)]">
              <div className="flex items-center gap-2 mb-4 text-[#c8c8b4]/50">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e06c75]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f0c674]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#98c379]" />
                <span className="ml-4 text-xs tracking-wider">terminal@portfolio:~$</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#f0c674] mb-2">
                {text}
                {showCursor && <span className="animate-pulse text-[#e06c75]">|</span>}
              </h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#c8c8b4] mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-[#c8c8b4]/60 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building innovative solutions with modern web technologies.
            <br />
            Passionate about creating exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 justify-center mb-8"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-transparent border border-[#f0c674] text-[#f0c674] hover:bg-[#f0c674] hover:text-[#0f0f0f] transition-all duration-300 shadow-[0_0_15px_rgba(240,198,116,0.15)] hover:shadow-[0_0_25px_rgba(240,198,116,0.3)] font-mono tracking-wide"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-transparent border border-[#e06c75]/60 text-[#e06c75] hover:bg-[#e06c75] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(224,108,117,0.1)] hover:shadow-[0_0_25px_rgba(224,108,117,0.2)] font-mono tracking-wide"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/bismaysarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8c8b4]/40 hover:text-[#f0c674] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bismay-sarangi-0804aa263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8c8b4]/40 hover:text-[#f0c674] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/bismay_sarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8c8b4]/40 hover:text-[#f0c674] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:bismaysarangi@gmail.com"
              className="text-[#c8c8b4]/40 hover:text-[#f0c674] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
