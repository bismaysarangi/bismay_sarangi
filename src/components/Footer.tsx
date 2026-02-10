import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/bismaysarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bismay-sarangi-0804aa263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/bismay_sarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-[#00f3ff] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Bismay Sarangi. Built with
              <Heart size={16} className="text-[#ff006e] animate-pulse" />
              using React + TypeScript + Tailwind CSS
            </p>
          </div>

          {/* Terminal-style signature */}
          <div className="font-mono text-xs text-gray-600">
            {">"} console.log("Thanks for visiting! 🚀")
          </div>
        </div>
      </div>
    </footer>
  );
}
