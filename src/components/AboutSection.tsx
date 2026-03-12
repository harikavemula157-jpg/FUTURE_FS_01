import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Cpu, Code2 } from "lucide-react";
import { container, item } from "@/lib/animations";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: FolderOpen, value: "20+", label: "Projects" },
  { icon: Cpu, value: "15+", label: "Technologies" },
  { icon: Code2, value: "100K+", label: "Lines of Code" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <motion.h2 variants={item} className="font-display font-medium text-section mb-4 gradient-text">About Me</motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <motion.div variants={item} className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate full-stack developer with over 3 years of experience building modern web applications. My journey started with a curiosity about how things work on the internet, which quickly evolved into a deep love for crafting elegant solutions to complex problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the entire development lifecycle — from designing intuitive user interfaces with React and TypeScript to architecting scalable backend systems with Node.js and PostgreSQL. I believe great software is built at the intersection of clean code and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I contribute to open-source projects, write technical articles, and explore emerging technologies. I'm currently focused on cloud-native architectures and developer experience tooling.
            </p>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={item} className="glass-card glass-card-hover p-5 flex flex-col items-center text-center">
                <stat.icon size={24} className="text-primary mb-3" />
                <span className="font-display text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
