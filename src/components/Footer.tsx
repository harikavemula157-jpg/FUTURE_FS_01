import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built with ❤️ &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
