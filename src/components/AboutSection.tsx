import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">01 — About</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15] tracking-tight max-w-4xl">
              I build secure systems across{" "}
              <span className="italic text-gradient-primary">cybersecurity</span>,
              {" "}cloud, and networks.
            </h2>
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-7"
            >
              <div className="space-y-6">
                <p className="text-sm md:text-base text-secondary-foreground leading-[1.9] font-sans">
                  I’m an <span className="text-foreground font-medium">M.S. Cybersecurity student at New York University</span> with prior experience across security engineering, system security, cloud monitoring, and networking. My background includes hands-on work at Tuppl, Infosys, Akar IT Services, and NYU instructional labs.
                </p>

                <p className="text-sm md:text-base text-secondary-foreground leading-[1.9] font-sans">
                  My work focuses on monitoring workflows, anomaly investigation, infrastructure hardening, and troubleshooting systems across both host and network layers. I’m especially interested in practical security work that connects <span className="text-foreground font-medium">security operations, cloud security, network engineering, and infrastructure support</span>.
                </p>

                <p className="text-sm md:text-base text-secondary-foreground leading-[1.9] font-sans">
                  I’m currently targeting roles in <span className="text-primary font-medium">cybersecurity, security engineering, network engineering, and cloud security</span> where I can contribute from day one through hands-on analysis, automation, monitoring, and technical problem-solving.
                </p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:col-span-5"
            >
              <div className="space-y-8 md:pl-6 border-l border-border/60">
                <div>
                  <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-primary mb-2">
                    Focus Areas
                  </p>
                  <p className="text-sm md:text-base text-secondary-foreground leading-7 font-sans">
                    Cybersecurity, cloud security, network engineering, threat detection, and infrastructure hardening.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-primary mb-2">
                    What I Bring
                  </p>
                  <p className="text-sm md:text-base text-secondary-foreground leading-7 font-sans">
                    Hands-on experience with monitoring, troubleshooting, log analysis, automation, and production-style lab environments.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-primary mb-2">
                    Based In
                  </p>
                  <p className="text-sm md:text-base text-secondary-foreground font-sans">
                    USA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;