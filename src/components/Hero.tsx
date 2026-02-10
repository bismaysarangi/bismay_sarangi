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
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal-style header */}
          <div className="mb-8 inline-block">
            <div className="border-2 border-[#00f3ff] bg-black/50 backdrop-blur-sm p-6 rounded-lg font-mono">
              <div className="flex items-center gap-2 mb-4 text-[#00f3ff]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm">terminal@portfolio:~$</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#00f3ff] mb-2">
                {text}
                {showCursor && <span className="animate-pulse">|</span>}
              </h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-sans"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-sans"
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
              className="bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]"
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
              className="bg-transparent border-2 border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,0,110,0.5)] hover:shadow-[0_0_20px_rgba(255,0,110,0.8)]"
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
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bismay-sarangi-0804aa263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://x.com/bismay_sarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Twitter size={28} />
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ opacity: 0.3 }}
      />
    </section>
  );
}
