import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Network, Cloud, Code2, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Shield,
    label: "Security Engineering",
    shortLabel: "Security",
    description:
      "Hands-on capabilities across detection, monitoring, vulnerability analysis, incident response, and security hardening.",
    skills: [
      "Security Monitoring",
      "Threat Detection",
      "Threat Hunting",
      "SIEM",
      "Incident Response",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Risk Analysis",
      "Access Control",
      "Security Hardening",
      "Cryptography",
      "Identity & Access Management",
      "Threat Modeling",
      "Log Analysis",
    ],
  },
  {
    icon: Network,
    label: "Network Infrastructure",
    shortLabel: "Networking",
    description:
      "Practical networking knowledge spanning packet analysis, routing, troubleshooting, and enterprise network operations.",
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "OSPF",
      "Routing",
      "Switching Fundamentals",
      "Packet Analysis",
      "Network Troubleshooting",
      "Network Monitoring",
      "Wireshark",
      "tcpdump",
      "Firewalls",
      "Linux Networking",
      "Network Security",
    ],
  },
  {
    icon: Cloud,
    label: "Cloud & Platform Security",
    shortLabel: "Cloud",
    description:
      "Cloud security experience focused on AWS logging, monitoring, identity, infrastructure visibility, and secure operations.",
    skills: [
      "AWS",
      "CloudTrail",
      "CloudWatch",
      "IAM",
      "S3",
      "Lambda",
      "Athena",
      "GuardDuty",
      "Security Hub",
      "VPC",
      "EC2",
      "AWS Monitoring",
      "Cloud Security Operations",
      "Event-Driven Detection",
    ],
  },
  {
    icon: Code2,
    label: "Programming & Automation",
    shortLabel: "Programming",
    description:
      "Technical implementation for scripting, analysis, and workflow automation across security and infrastructure use cases.",
    skills: [
      "Python",
      "Bash",
      "SQL",
      "Automation Scripting",
      "Data Parsing",
      "CLI Tooling",
      "Problem Solving",
      "Technical Debugging",
    ],
  },
  {
    icon: Wrench,
    label: "Security Tooling",
    shortLabel: "Tools",
    description:
      "Common tools used across labs, academic environments, troubleshooting workflows, and security-focused project work.",
    skills: [
      "Splunk",
      "ELK Stack",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Hydra",
      "SQLMap",
      "Snort",
      "John the Ripper",
      "Git",
      "GitHub",
      "Docker",
      "Netcat",
      "Linux",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkillGroup, setActiveSkillGroup] = useState(0);

  const activeGroup = skillGroups[activeSkillGroup];
  const ActiveIcon = activeGroup.icon;

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">02 — Skills</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.1]">
              Technical Skills
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-sans mt-4 leading-relaxed max-w-2xl">
              A focused overview of the technologies, systems, and tools I use across
              cybersecurity, cloud monitoring, networking, and hands-on security engineering work.
            </p>
          </motion.div>

          {/* Top tab navigation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              const isActive = activeSkillGroup === index;

              return (
                <button
                  key={group.label}
                  onClick={() => setActiveSkillGroup(index)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md border text-xs md:text-sm font-mono transition-all duration-300 ${
                    isActive
                      ? "bg-card text-foreground border-primary/40"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  <Icon size={15} />
                  <span>{group.shortLabel}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Active skill panel */}
          <motion.div
            key={activeGroup.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left panel */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <ActiveIcon size={18} className="text-primary" />
                  <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-primary">
                    Capability Area
                  </p>
                </div>

                <h3 className="text-xl md:text-2xl font-sans font-medium text-foreground mb-3">
                  {activeGroup.label}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-7">
                  {activeGroup.description}
                </p>
              </div>

              {/* Right panel */}
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-2.5">
                  {activeGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 text-[11px] md:text-xs font-mono text-secondary-foreground bg-background/60 border border-border rounded-md hover:border-primary/30 hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;