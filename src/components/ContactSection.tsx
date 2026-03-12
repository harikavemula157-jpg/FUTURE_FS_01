import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send } from "lucide-react";
import { container, item } from "@/lib/animations";

const contactInfo = [
  { icon: Mail, label: "vemulaharika35@gmail.com", href: "mailto:vemulaharika35@gmail.com" },
  { icon: MapPin, label: "Tadepalligudem, India" },
  { icon: Globe, label: "yourportfolio.com", href: "https://yourportfolio.com" },
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "full-stack-developer" },
  { prompt: true, text: "cat skills.txt" },
  { prompt: false, text: "React | Node.js | TypeScript | PostgreSQL" },
  { prompt: true, text: "echo $STATUS" },
  { prompt: false, text: "Available for new opportunities ✓" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <motion.h2 variants={item} className="font-display font-medium text-section mb-12 gradient-text">Get in Touch</motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={item} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-3">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <c.icon size={16} className="text-primary flex-shrink-0" />
                  {c.href ? (
                    <a href={c.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{c.label}</a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-card p-4 font-mono text-xs">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45 80% 55%)" }} />
                <span className="w-2.5 h-2.5 rounded-full bg-success" />
                <span className="ml-2 text-muted-foreground">terminal</span>
              </div>
              <div className="space-y-1">
                {terminalLines.map((line, i) => (
                  <div key={i}>
                    {line.prompt ? (
                      <span><span className="text-success">➜</span> <span className="text-primary">~</span> <span>{line.text}</span></span>
                    ) : (
                      <span className="text-muted-foreground">{line.text}</span>
                    )}
                  </div>
                ))}
                <div>
                  <span className="text-success">➜</span> <span className="text-primary">~</span>{" "}
                  <span className="inline-block w-1.5 h-3.5 bg-foreground animate-blink" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form variants={item} onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground block mb-1.5">Name</label>
              <input id="name" type="text" className="input-glass" placeholder="Your name"
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input id="email" type="email" className="input-glass" placeholder="your@email.com"
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-muted-foreground block mb-1.5">Subject</label>
              <input id="subject" type="text" className="input-glass" placeholder="What's this about?"
                value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground block mb-1.5">Message</label>
              <textarea id="message" className="input-glass min-h-[120px] resize-none" placeholder="Your message..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn-gradient w-full flex items-center justify-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
