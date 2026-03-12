import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">05 — Education</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.08]">
                Education
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-sans mt-4 max-w-sm leading-relaxed">
                Graduate study focused on cybersecurity, network security, cloud security,
                and applied cryptography.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-8"
            >
              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center bg-background/60 shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                      New York University
                    </h3>
                    <p className="text-sm md:text-base text-primary font-sans font-medium mt-2">
                      Master of Science in Cybersecurity
                    </p>
                    <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mt-2">
                      New York, NY
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary mb-3">
                      Academic Focus
                    </p>
                    <p className="text-sm md:text-[15px] text-secondary-foreground font-sans leading-8">
                      Cybersecurity, network security, cloud security, and security engineering
                      with practical exposure to monitoring, infrastructure, and applied defense.
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary mb-3">
                      Graduate Coursework
                    </p>
                    <p className="text-sm md:text-[15px] text-secondary-foreground font-sans leading-8">
                      Computer Networking, Network Security, Cloud Security,
                      Application Security, Penetration Testing, Applied Cryptography,
                      Security Engineering, and Information Security & Privacy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;