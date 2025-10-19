import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const resumeURL =
    "../../public/Tomohiro-Komiyama-FlowCV-Resume-20251015 (final).pdf";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Volt0303", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "shunhosoo@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
            Get In Touch
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="neon-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="neon-border"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="neon-border resize-none"
              />
              <Button
                type="submit"
                className="w-full group shadow-glow hover:shadow-glow-violet transition-all"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              <div className="flex flex-col flex-grow glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full group"
                onClick={() => window.open(resumeURL, "_blank")}
              >
                <FileDown className="mr-2 h-4 w-4 group-hover:scale-125 transition-transform" />
                Read Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
