import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Divya-Divya-1" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/divya-d-2b1a88131/" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-primary/[0.12] blur-[130px]" />
        <div className="absolute top-[12%] right-[12%] w-[320px] h-[320px] rounded-full bg-accent/[0.12] blur-[120px]" />
        <div className="absolute bottom-[8%] left-[10%] w-[260px] h-[260px] rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground/20" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/20" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground/20" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-foreground/10" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-foreground/10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* outer glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

            {/* outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/35" />

            {/* second ring */}
            <div className="absolute inset-[10px] rounded-full border border-accent/35" />

            {/* network nodes */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,210,120,0.55)]" />
            <span className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(120,170,255,0.45)]" />
            <span className="absolute bottom-5 right-3 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,210,120,0.45)]" />
            <span className="absolute top-8 right-3 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(120,170,255,0.45)]" />

            {/* connector accents */}
            <span className="absolute top-5 left-[22px] w-10 h-px bg-gradient-to-r from-primary/0 to-primary/40 rotate-[25deg]" />
            <span className="absolute bottom-8 right-[18px] w-10 h-px bg-gradient-to-r from-accent/0 to-accent/40 -rotate-[25deg]" />

            {/* image frame */}
            <div className="absolute inset-[18px] rounded-full p-[3px] bg-gradient-to-br from-primary/80 via-white/30 to-accent/80">
              <div className="w-full h-full rounded-full bg-card/90 backdrop-blur-sm p-1.5">
                <img
                  src="/profile.jpg"
                  alt="Fnu Divya"
                  className="w-full h-full object-cover rounded-full border border-border"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="glow-dot" />
          <span className="text-[11px] font-mono text-primary tracking-[0.28em] uppercase">
            Security &amp; Network Engineer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
        >
          {/* <span className="block text-foreground font-display text-6xl md:text-8xl leading-[0.95]">
            Fnu
          </span> */}
          <span className="block text-gradient-primary italic font-display text-6xl md:text-8xl leading-[1.05] pb-2">
            Divya
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-base md:text-lg text-muted-foreground mb-4 font-sans"
        >
          M.S. Cybersecurity · New York University
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-[15px] text-secondary-foreground font-sans leading-8 mb-8"
        >
          I build practical security, cloud, and networking projects focused on
          detection, hardening, monitoring, and real-world troubleshooting.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-sans text-xs font-medium tracking-wider uppercase shadow-[0_10px_30px_rgba(255,210,120,0.16)] hover:opacity-95 transition-all duration-300"
          >
            View Projects
            <ArrowDown size={13} />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon size={15} />
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;