import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { container, item } from "@/lib/animations";

const posts = [
  { tag: "Frontend", readTime: "5 min read", title: "Building Performant React Applications with Suspense",
    excerpt: "Exploring concurrent features in React 18 and how Suspense boundaries improve perceived performance.", date: "Feb 15, 2026" },
  { tag: "Backend", readTime: "8 min read", title: "Designing Type-Safe REST APIs with Express and Zod",
    excerpt: "How schema validation at the edge eliminates an entire class of runtime errors in production.", date: "Jan 28, 2026" },
  { tag: "Architecture", readTime: "6 min read", title: "Event-Driven Microservices: Lessons from Production",
    excerpt: "Practical patterns for building resilient event-driven systems with RabbitMQ and Node.js.", date: "Jan 10, 2026" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <motion.h2 variants={item} className="font-display font-medium text-section mb-12 gradient-text">Latest Articles</motion.h2>

        <div className="space-y-4">
          {posts.map((post) => (
            <motion.a key={post.title} variants={item} href="#"
              className="glass-card glass-card-hover p-5 flex items-center justify-between gap-4 group block">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-display font-medium gradient-bg text-primary-foreground px-2 py-0.5 rounded">{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-medium mb-1 truncate">{post.title}</h3>
                <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground mt-2 block">{post.date}</span>
              </div>
              <ArrowRight size={18} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
