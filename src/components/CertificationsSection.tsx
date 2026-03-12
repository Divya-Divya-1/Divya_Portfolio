import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock } from "lucide-react";

const certs = [
  { name: "IBM Cybersecurity Analyst", status: "Completed", icon: Award },
  { name: "CompTIA Security+", status: "In Progress", icon: Clock },
  { name: "Cisco Certified Network Associate (CCNA)", status: "In Progress", icon: Clock },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">06 — Certifications</span>
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
                Certifications
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-sans mt-4 max-w-sm leading-relaxed">
                Professional certifications supporting my work in cybersecurity,
                networking, and security engineering.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-8"
            >
              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm divide-y divide-border">
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 md:px-8 py-5"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 rounded-full border border-border bg-background/60 flex items-center justify-center shrink-0">
                        <cert.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-sans text-foreground leading-relaxed">
                        {cert.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono tracking-[0.2em] uppercase shrink-0 ${
                        cert.status === "Completed"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}

                <div className="px-6 md:px-8 py-5">
                  <span className="text-[11px] font-sans text-text-dim">
                    Additional certifications in progress.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;