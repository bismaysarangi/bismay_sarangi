import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12">
      {/* Retro divider */}
      <div className="retro-divider mb-12" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6">
            <a
              href="https://github.com/bismaysarangi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 md:w-auto md:h-auto flex items-center justify-center rounded-lg md:rounded-none border border-[#2a2a3e] md:border-0 text-[#c8c8b4]/40 hover:text-[#f0c674] active:scale-95 md:active:scale-100 transition-all duration-300 touch-manipulation"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/bismay-sarangi-0804aa263/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 md:w-auto md:h-auto flex items-center justify-center rounded-lg md:rounded-none border border-[#2a2a3e] md:border-0 text-[#c8c8b4]/40 hover:text-[#f0c674] active:scale-95 md:active:scale-100 transition-all duration-300 touch-manipulation"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://x.com/bismay_sarangi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 md:w-auto md:h-auto flex items-center justify-center rounded-lg md:rounded-none border border-[#2a2a3e] md:border-0 text-[#c8c8b4]/40 hover:text-[#f0c674] active:scale-95 md:active:scale-100 transition-all duration-300 touch-manipulation"
            >
              <Twitter size={22} />
            </a>
            <a
              href="mailto:bismaysarangi@gmail.com"
              aria-label="Email"
              className="w-10 h-10 md:w-auto md:h-auto flex items-center justify-center rounded-lg md:rounded-none border border-[#2a2a3e] md:border-0 text-[#c8c8b4]/40 hover:text-[#f0c674] active:scale-95 md:active:scale-100 transition-all duration-300 touch-manipulation"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#c8c8b4]/50 font-mono text-xs md:text-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-1 leading-relaxed">
              <span>© {new Date().getFullYear()} Bismay Sarangi. Built with</span>
              <Heart size={14} className="text-[#e06c75] shrink-0" />
              <span>using React + TypeScript + Tailwind CSS</span>
            </p>
          </div>

          {/* Terminal-style signature */}
          <div className="font-mono text-xs text-[#c8c8b4]/40">
            {">"} console.log("Thanks for visiting!")
          </div>

        </div>
      </div>
    </footer>
  );
}