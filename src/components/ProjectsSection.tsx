import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Enterprise Network Penetration Testing Lab",
    problem:
      "Built a simulated multi-host enterprise network to evaluate the full attack lifecycle in a controlled environment, covering reconnaissance, exploitation, privilege escalation, and lateral movement.",
    impact:
      "Identified credential reuse, misconfigured services, and unpatched attack paths across multiple hosts. Produced a structured remediation report mapping findings to risk and attack progression.",
    tech: ["Nmap", "Burp Suite", "Hydra", "SQLMap", "John the Ripper", "Proxychains", "LinPEAS"],
    category: "Offensive Security",
    github: "https://github.com/Divya-Divya-1/Enterprise-Network-Penetration-Testing",
  },
  {
    num: "02",
    title: "Privacy Framework for Smart Home IoT Devices",
    problem:
      "Smart home devices often collect sensitive telemetry with minimal privacy controls, while manufacturers frequently lack strong governance around data minimization, consent, and retention.",
    impact:
      "Designed a structured privacy framework addressing device-level protections, user consent, and data governance. Delivered the work as a research-backed model with practical implementation guidance.",
    tech: ["IoT Security", "Privacy Engineering", "Research", "Risk Analysis"],
    category: "Research",
    github: "https://github.com/Divya-Divya-1/Smart-Home-IOT-Privacy-Framework",
  },
  {
    num: "03",
    title: "AWS S3 Data Exfiltration Detection and Alerts",
    problem:
      "Default AWS configurations do not reliably detect abnormal S3 access patterns such as bulk downloads, unauthorized deletions, or suspicious account activity without custom monitoring.",
    impact:
      "Implemented an automated detection workflow using CloudTrail, CloudWatch, Lambda, and SES, with S3 versioning for recovery. The design improved visibility into potentially malicious activity and enabled faster response.",
    tech: ["AWS", "CloudTrail", "CloudWatch", "Lambda", "SES", "S3", "Athena"],
    category: "Cloud Security",
    github: "https://github.com/Divya-Divya-1/AWS-Cloud-Security-S3-Exfiltration-Detection",
  },
  {
    num: "04",
    title: "Multiparty One-Time Pad Protocol",
    problem:
      "Traditional OTP approaches are inefficient in asynchronous group communication because they waste pad material and struggle to guarantee safe allocation without reuse.",
    impact:
      "Designed a multiparty OTP scheme using directional pad allocation and d-separation constraints. The protocol preserved secrecy while reducing unnecessary pad consumption across participants.",
    tech: ["Python", "Cryptography", "Algorithm Design", "Simulation Testing"],
    category: "Cryptography",
    github: "https://github.com/Divya-Divya-1/Multiparty-OTP-Asynchronous-Communication",
  },
  {
    num: "05",
    title: "Enterprise Network Monitoring and Troubleshooting Lab",
    problem:
      "Without structured monitoring and fault isolation, network teams can miss DNS failures, DHCP exhaustion, degraded OSPF adjacencies, and routing instability until outages affect users.",
    impact:
      "Built a segmented lab network with OSPF, scoped DHCP pools, and split-horizon DNS. Used Wireshark and tcpdump to document repeatable troubleshooting workflows and root-cause analysis across L2/L3 issues.",
    tech: ["TCP/IP", "DNS", "DHCP", "OSPF", "Wireshark", "tcpdump", "Routing", "Packet Analysis", "Network Troubleshooting"],
    category: "Network Engineering",
    github: "#",
  },
  {
    num: "06",
    title: "Smart Encryption Guide and Secure File Protection Toolkit",
    problem:
      "Developers often repeat common encryption mistakes such as weak key derivation, insecure modes, and poor key handling because practical secure references are difficult to find.",
    impact:
      "Built a Python-based toolkit implementing AES-256-CBC encryption, SHA-256 hashing with salts, and PBKDF2-based derivation. Combined working code with clear documentation to support secure implementation decisions.",
    tech: ["Python", "AES-256", "SHA-256", "PBKDF2", "Hashing", "Key Management", "Secure File Handling"],
    category: "Security Engineering",
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-divider section-padding">
        <span className="section-divider-label">03 — Projects</span>
      </div>

      <div className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.08]">
              Selected <span className="italic text-gradient-primary">Projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-sans mt-4 max-w-2xl leading-relaxed">
              A curated set of security, cloud, networking, and cryptography projects with clear problem statements, technical implementation, and measurable outcomes.
            </p>
          </motion.div>

          {/* Project list */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.num} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      className="relative rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8"
    >
      {/* Background number
      <div className="absolute top-5 right-6 font-display text-[4rem] md:text-[6rem] leading-none text-border/25 pointer-events-none select-none">
        {project.num}
      </div> */}

      {/* Top row */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div className="max-w-3xl">
          <span className="text-[10px] font-mono text-primary/70 tracking-[0.25em] uppercase block mb-3">
            {project.num} · {project.category}
          </span>

          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.12] max-w-4xl">
            {project.title}
          </h3>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-md text-[11px] font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 tracking-wider uppercase shrink-0"
        >
          <ArrowUpRight size={12} />
          GitHub
        </a>
      </div>

      {/* Problem / Impact */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-10 mb-8">
        <div>
          <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase block mb-3">
            Problem
          </span>
          <p className="text-sm md:text-[15px] text-secondary-foreground font-sans leading-8">
            {project.problem}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase block mb-3">
            Impact
          </span>
          <p className="text-sm md:text-[15px] text-secondary-foreground font-sans leading-8">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Stack */}
      <div className="relative z-10">
        <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase block mb-3">
          Stack
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-[10px] md:text-[11px] font-mono text-muted-foreground bg-background/60 border border-border rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectsSection;