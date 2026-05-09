import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Copy, CheckCheck, ExternalLink } from "lucide-react";

const EMAIL = "bismaysarangi@gmail.com";

const socials = [
  {
    name: "GitHub",
    handle: "@bismaysarangi",
    href: "https://github.com/bismaysarangi",
    icon: Github,
    color: "#c8c8b4",
    border: "border-[#2a2a3e] hover:border-[#c8c8b4]/50",
    label: "View my code",
  },
  {
    name: "LinkedIn",
    handle: "bismay-sarangi",
    href: "https://www.linkedin.com/in/bismay-sarangi-0804aa263/",
    icon: Linkedin,
    color: "#0A66C2",
    border: "border-[#2a2a3e] hover:border-[#0A66C2]/50",
    label: "Connect with me",
  },
  {
    name: "Twitter / X",
    handle: "@bismay_sarangi",
    href: "https://x.com/bismay_sarangi",
    icon: Twitter,
    color: "#1D9BF0",
    border: "border-[#2a2a3e] hover:border-[#1D9BF0]/50",
    label: "Follow me",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
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
            <span className="text-[#f0c674]">{"{"}</span>
            <span className="text-[#c8c8b4]"> GET_IN_TOUCH </span>
            <span className="text-[#f0c674]">{"}"}</span>
          </h2>
          <p className="text-[#c8c8b4]/50 text-base md:text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#16162a]/50 backdrop-blur-sm border border-[#f0c674]/30 hover:border-[#f0c674]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(240,198,116,0.08)]">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#f0c674]/10 border border-[#f0c674]/20 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-[#f0c674]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#c8c8b4]/50 font-mono text-xs mb-0.5">{">"} Email me at</p>
                      <a href={`mailto:${EMAIL}`} className="text-[#f0c674] font-mono text-sm md:text-base hover:text-[#f0c674]/80 transition-colors truncate block">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-transparent border border-[#f0c674] text-[#f0c674] hover:bg-[#f0c674] hover:text-[#0f0f0f] transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap">
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">Open Mail</span>
                      <span className="sm:hidden">Mail</span>
                    </a>
                    <button onClick={handleCopyEmail} className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-transparent border border-[#2a2a3e] text-[#c8c8b4]/70 hover:border-[#f0c674] hover:text-[#f0c674] transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap">
                      {copied ? (
                        <>
                          <CheckCheck size={14} className="text-[#98c379]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social links */}
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className={`bg-[#16162a]/30 backdrop-blur-sm border ${social.border} transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,198,116,0.05)]`}>
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300" style={{ background: `${social.color}12`, border: `1px solid ${social.color}30` }}>
                          <social.icon size={20} style={{ color: social.color }} />
                        </div>
                        <div>
                          <p className="text-[#c8c8b4] font-mono text-sm md:text-base font-semibold">{social.name}</p>
                          <p className="text-[#c8c8b4]/35 font-mono text-xs md:text-sm">{social.handle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#c8c8b4]/30 group-hover:text-[#c8c8b4]/60 transition-colors">
                        <span className="font-mono text-xs hidden sm:block">{social.label}</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}

          {/* Terminal footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <p className="text-[#c8c8b4]/30 font-mono text-xs">
              {">"} I typically respond within{" "}
              <span className="text-[#f0c674]">24–48 hours</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}