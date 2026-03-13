import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";

interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  highlights: string[];
  details: {
    label?: string;
    items: string[];
  }[];
}

const experiences: Experience[] = [
  {
    role: "Security Engineer",
    org: "Tuppl Technologies Inc.",
    period: "Feb 2026 – Present",
    location: "USA (Remote)",
    highlights: [
      "Built AWS security monitoring workflows using CloudTrail and CloudWatch.",
      "Developed Python scripts to automate log analysis and detection workflows.",
      "Investigated suspicious cloud activity and supported security event analysis.",
      "Improved visibility into security alerts and system behavior across cloud services.",
    ],
    details: [
      {
        label: "Responsibilities",
        items: [
          "Designed monitoring pipelines using AWS CloudTrail, CloudWatch, and event filtering to detect unusual system behavior.",
          "Automated log parsing and correlation using Python scripts to reduce manual investigation time.",
          "Supported investigation of anomalous API activity and potential data exfiltration indicators.",
          "Implemented security logging strategies to improve cloud infrastructure observability.",
        ],
      },
    ],
  },
  {
    role: "System Security Engineer",
    org: "Akar IT Services",
    period: "Aug 2022 – Jul 2023",
    location: "Kurukshetra, Haryana, India",
    highlights: [
      "Performed vulnerability assessments across enterprise Linux and Windows systems.",
      "Implemented system hardening and security configuration improvements.",
      "Assisted firewall rule reviews and network access policy enforcement.",
      "Strengthened infrastructure security posture through risk mitigation.",
    ],
    details: [
      {
        label: "Responsibilities",
        items: [
          "Conducted vulnerability scanning and remediation analysis using security assessment tools.",
          "Hardened Linux and Windows systems by applying secure configuration baselines.",
          "Reviewed firewall rule sets and assisted with access control improvements.",
          "Supported infrastructure security audits and remediation documentation.",
        ],
      },
    ],
  },
  {
    role: "Security Engineer",
    org: "Infosys",
    period: "Jul 2021 – Jul 2022",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Monitored system and network activity logs for potential anomalies.",
      "Supported security operations and incident investigation workflows.",
      "Assisted with security event analysis and response documentation.",
      "Helped improve monitoring visibility across enterprise systems.",
    ],
    details: [
      {
        label: "Responsibilities",
        items: [
          "Analyzed network and host-level logs to detect unusual system behavior.",
          "Assisted incident response teams with investigation and remediation tracking.",
          "Documented findings from security monitoring activities and vulnerability reviews.",
          "Contributed to improving operational security monitoring processes.",
        ],
      },
    ],
  },
  {
    role: "Instructor & Teaching Assistant",
    org: "New York University",
    period: "Sep 2024 – Dec 2025",
    location: "New York, NY, USA",
    highlights: [
      "Led hands-on cybersecurity and networking labs for over 200 students.",
      "Taught packet analysis, network troubleshooting, and security monitoring concepts.",
      "Guided practical exercises using tools such as Wireshark, Nmap, and Burp Suite.",
      "Supported course instruction for multiple cybersecurity subjects.",
    ],
    details: [
      {
        label: "Courses Supported",
        items: [
          "Computer Networking",
          "Application Security",
          "Information Security and Privacy",
        ],
      },
      {
        label: "Responsibilities",
        items: [
          "Designed and delivered lab sessions covering TCP/IP, DNS, DHCP, OSPF, and packet analysis using Wireshark.",
          "Guided students through penetration testing exercises using Nmap and Burp Suite.",
          "Assisted students in understanding application vulnerabilities such as SQL injection and XSS.",
          "Evaluated lab assignments and provided feedback on security analysis and troubleshooting techniques.",
          "Supported coursework on security monitoring, network defense, and threat analysis.",
        ],
      },
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] uppercase text-primary/70 mb-3">
              <Briefcase className="w-3 h-3" />
              Experience
            </span>

            <h3 className="font-display text-2xl md:text-3xl text-foreground leading-[1.1] mb-2">
              {exp.role}
            </h3>

            <p className="text-base md:text-lg text-foreground/85 font-sans">
              {exp.org}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </span>
            <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4 mb-6">
          {exp.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="glow-dot mt-[7px] shrink-0" />
              <p className="text-sm md:text-[15px] text-secondary-foreground leading-7 font-sans">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.22em] uppercase text-primary/75 hover:text-primary transition-colors duration-200"
        >
          {expanded ? "Hide Details" : "View Details"}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-border/70 space-y-8">
                {exp.details.map((section, si) => (
                  <div key={si}>
                    {section.label && (
                      <h4 className="text-[10px] font-mono tracking-[0.24em] uppercase text-primary mb-4">
                        {section.label}
                      </h4>
                    )}

                    <div className="grid gap-3">
                      {section.items.map((item, ii) => (
                        <div key={ii} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                          <p className="text-sm md:text-[15px] text-muted-foreground leading-7 font-sans">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">04 — Experience</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.08]">
              Professional Experience
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-sans mt-4 leading-relaxed max-w-2xl">
              Experience across security engineering, cloud monitoring, infrastructure hardening, networking, and academic instruction in enterprise, startup, and university environments.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.org + exp.period} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
