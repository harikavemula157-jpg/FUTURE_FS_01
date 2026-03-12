import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

const techStack = ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:vemulaharika35@gmail.com", label: "Email" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Gradient blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(230 80% 60%), transparent 70%)", filter: "blur(100px)" }}
      />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(280 80% 60%), transparent 70%)", filter: "blur(100px)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 text-center py-24"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-bold text-hero leading-[1.1] mb-6"
        >
          <span className="gradient-text">Full-Stack</span>
          <br />
          Developer
        </motion.h1>

        <motion.p variants={item} className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8">
          I build fast, reliable, and user-friendly web applications from concept to deployment.
        </motion.p>

        {/* Tech stack chips */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass-card px-3 py-1.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex justify-center gap-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass-card glass-card-hover p-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll arrow */}
        <motion.a
          variants={item}
          href="#about"
          className="inline-block text-muted-foreground animate-bounce-arrow"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
