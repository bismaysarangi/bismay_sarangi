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
    color: "#ffffff",
    glow: "rgba(255,255,255,0.3)",
    border: "border-gray-600 hover:border-white",
    label: "View my code",
  },
  {
    name: "LinkedIn",
    handle: "bismay-sarangi",
    href: "https://www.linkedin.com/in/bismay-sarangi-0804aa263/",
    icon: Linkedin,
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.5)",
    border: "border-gray-600 hover:border-[#0A66C2]",
    label: "Connect with me",
  },
  {
    name: "Twitter / X",
    handle: "@bismay_sarangi",
    href: "https://x.com/bismay_sarangi",
    icon: Twitter,
    color: "#1D9BF0",
    glow: "rgba(29,155,240,0.5)",
    border: "border-gray-600 hover:border-[#1D9BF0]",
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
      // Fallback for older browsers
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
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#00ff41]">{"{"}</span>
            <span className="text-white">GET_IN_TOUCH</span>
            <span className="text-[#00ff41]">{"}"}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">

          {/* Email card — primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-[#00ff41]/50 hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.25)]">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-[#00ff41]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 font-mono text-xs mb-0.5">{">"} Email me at</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-[#00f3ff] font-mono text-sm md:text-base hover:text-[#00ff41] transition-colors truncate block"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-mono text-xs md:text-sm shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] whitespace-nowrap"
                    >
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">Open Mail</span>
                      <span className="sm:hidden">Mail</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-transparent border-2 border-gray-600 text-gray-300 hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap"
                    >
                      {copied ? (
                        <>
                          <CheckCheck size={14} className="text-[#00ff41]" />
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
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card
                  className={`bg-black/30 backdrop-blur-sm border-2 ${social.border} transition-all duration-300`}
                  style={{
                    ["--glow" as string]: social.glow,
                  }}
                >
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                          style={{
                            background: `${social.color}15`,
                            border: `1px solid ${social.color}40`,
                          }}
                        >
                          <social.icon
                            size={20}
                            style={{ color: social.color }}
                          />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm md:text-base font-semibold group-hover:transition-colors">
                            {social.name}
                          </p>
                          <p className="text-gray-500 font-mono text-xs md:text-sm">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-300 transition-colors">
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
            <p className="text-gray-500 font-mono text-xs">
              {">"} I typically respond within{" "}
              <span className="text-[#00ff41]">24–48 hours</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}