import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:divyabodla1@gmail.com",
    value: "divyabodla1@gmail.com",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/Divya-Divya-1",
    value: "Divya-Divya-1",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/divya-d-2b1a88131/",
    value: "View Profile",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">07 — Contact</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-3xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.08]">
              Open to <span className="italic text-gradient-primary">opportunities</span>.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-sans mt-5 max-w-2xl leading-relaxed">
              Seeking full-time opportunities in cybersecurity, security engineering,
              network engineering, and cloud security. Feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-5 md:p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full border border-border bg-background/60 flex items-center justify-center shrink-0">
                      <link.icon
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-muted-foreground tracking-[0.22em] uppercase mb-2">
                        {link.label}
                      </p>
                      <p className="text-sm md:text-base font-sans text-foreground break-words">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;