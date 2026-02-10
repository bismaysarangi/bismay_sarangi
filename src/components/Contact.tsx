import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate email sending (replace with actual email service integration)
    // You can use EmailJS, SendGrid, or your own backend API
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#00ff41]">{"{"}</span>
            <span className="text-white">GET_IN_TOUCH</span>
            <span className="text-[#00ff41]">{"}"}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-black/30 backdrop-blur-sm border-2 border-gray-700 hover:border-[#00ff41] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-mono text-white">
                <Mail className="text-[#00ff41]" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-gray-300 mb-2"
                  >
                    {">"} Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-gray-700 rounded-lg text-white font-mono focus:border-[#00ff41] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-gray-300 mb-2"
                  >
                    {">"} Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-gray-700 rounded-lg text-white font-mono focus:border-[#00ff41] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-gray-300 mb-2"
                  >
                    {">"} Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-gray-700 rounded-lg text-white font-mono focus:border-[#00ff41] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.5)] hover:shadow-[0_0_20px_rgba(0,255,65,0.8)]"
                >
                  {status === "idle" && (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && (
                    <>
                      <CheckCircle size={20} className="mr-2" />
                      Message Sent!
                    </>
                  )}
                  {status === "error" && "Error - Try Again"}
                </Button>
              </form>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-[#00ff41] font-mono text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-400 font-mono text-sm"
          >
            <p>Or reach out directly at:</p>
            <a
              href="mailto:bismaysarangi@gmail.com"
              className="text-[#00f3ff] hover:text-[#00ff41] transition-colors"
            >
              bismaysarangi@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
