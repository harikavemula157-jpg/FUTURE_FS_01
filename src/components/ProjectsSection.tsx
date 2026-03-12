import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses, message threading, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    tags: ["Next.js", "OpenAI", "WebSocket", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevOps Dashboard",
    description: "Monitoring dashboard for CI/CD pipelines with real-time metrics and automated alerting system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    tags: ["React", "D3.js", "Docker", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management API",
    description: "RESTful API with OAuth2, rate limiting, and comprehensive documentation using OpenAPI spec.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=340&fit=crop",
    tags: ["Express", "TypeScript", "MongoDB", "Jest"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-8"
      >
        <motion.h2 variants={item} className="font-display font-medium text-section mb-12 gradient-text">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass-card glass-card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                {project.featured && (
                  <span className="absolute top-3 left-3 z-10 gradient-bg text-xs font-display font-medium px-2.5 py-1 rounded-md text-primary-foreground">
                    Featured
                  </span>
                )}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
