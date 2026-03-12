import { motion } from "framer-motion";
import { Monitor, Server, Cloud } from "lucide-react";
import { container, item } from "@/lib/animations";

interface Skill { name: string; level: number; }
interface SkillCategory { title: string; icon: typeof Monitor; skills: Skill[]; }

const categories: SkillCategory[] = [
  { title: "Frontend", icon: Monitor, skills: [
    { name: "React / Next.js", level: 92 }, { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 90 }, { name: "Framer Motion", level: 78 },
  ]},
  { title: "Backend", icon: Server, skills: [
    { name: "Node.js / Express", level: 85 }, { name: "Python / Django", level: 72 },
    { name: "PostgreSQL", level: 80 }, { name: "REST / GraphQL", level: 82 },
  ]},
  { title: "DevOps", icon: Cloud, skills: [
    { name: "Docker / K8s", level: 70 }, { name: "AWS / GCP", level: 75 },
    { name: "Git / CI-CD", level: 88 }, { name: "Linux", level: 78 },
  ]},
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <motion.h2 variants={item} className="font-display font-medium text-section mb-12 gradient-text">Skills & Expertise</motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={item} className="glass-card glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-6">
                <cat.icon size={20} className="text-primary" />
                <h3 className="font-display text-xl font-medium">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div className="h-full rounded-full gradient-bg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
