import { useState, useEffect } from "react";
import {
  Terminal, ShieldCheck, ShieldAlert, Mail, Download, ExternalLink, X,
  Radio, Fingerprint, Network, Code2, GraduationCap, ChevronRight, Award, FileText,
} from "lucide-react";

// Lucide 1.0 eliminó los iconos de marca (GitHub, LinkedIn...) por temas de
// trademark, así que los sustituimos por SVGs propios con el mismo estilo.
function Github({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.8 1.2 1.83 1.2 3.09 0 4.44-2.71 5.42-5.29 5.7.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
function Linkedin({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const TOKENS = {
  ink: "#0E1416",
  panel: "#161D20",
  panelAlt: "#1C2427",
  line: "#2A3438",
  text: "#E7ECEE",
  muted: "#8FA3AA",
  blue: "#4FB6C4",
  amber: "#D98E4A",
};

const BOOT_LINE = "whoami --role=soc-analyst,fullstack-dev";

function useTypewriter(text, speed = 32) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

function Eyebrow({ children, accent }) {
  return (
    <div
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-4"
      style={{ color: accent }}
    >
      <span>&gt;&gt;</span>
      <span>{children}</span>
    </div>
  );
}

function StatusDot({ active, accent }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full mr-2"
      style={{
        backgroundColor: active ? accent : TOKENS.line,
        boxShadow: active ? `0 0 8px ${accent}` : "none",
        transition: "all .3s ease",
      }}
    />
  );
}

const UI = {
  es: {
    nav: { about: "Sobre mí", skills: "Skills", certifications: "Certificaciones", projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
    heroRole: "Analista SOC Junior · Especialista en Ciberseguridad · Desarrollador Full-Stack",
    heroText:
      "Combino una mentalidad ofensiva y defensiva para la mitigación proactiva de riesgos. Mi formación en desarrollo de software me da una ventaja analítica diferencial: entender las vulnerabilidades lógicas de una topología desde su propio código fuente.",
    viewGithub: "Ver GitHub",
    downloadCV: "Descargar CV",
    contactBtn: "Contactar",
    statusBlue: "STATUS: monitorizando",
    statusRed: "STATUS: explotando",
    skillsEyebrow: "Habilidades técnicas",
    certificationsEyebrow: "Certificaciones",
    courseTag: "curso",
    certTag: "certificación",
    viewCertificate: "Ver certificado",
    certificatePending: "Certificado en PDF pendiente de añadir.",
    projectsEyebrow: "Proyectos destacados",
    toComplete: "por completar",
    experienceEyebrow: "Experiencia",
    contactEyebrow: "Contacto",
    contactBlurb: "Abierto a oportunidades como analista SOC, pentester junior o desarrollador full-stack.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    closeLabel: "Cerrar",
    viewOnGithub: "Ver en GitHub",
    githubPending: "Enlace a GitHub pendiente de añadir.",
    buildLabel: (mode) => `build: portfolio-v1 · modo actual: ${mode === "blue" ? "blue-team" : "red-team"}`,
    cvFile: "/cv-victor-capdevila.pdf",
  },
  en: {
    nav: { about: "About", skills: "Skills", certifications: "Certifications", projects: "Projects", experience: "Experience", contact: "Contact" },
    heroRole: "Junior SOC Analyst · Cybersecurity Specialist · Full-Stack Developer",
    heroText:
      "Cybersecurity Specialist with an architectural foundation in Full-Stack Web Development. I bring a differential analytical capacity to understand software topologies from their source code, identifying underlying logical vulnerabilities and applying Secure Coding methodologies in CI/CD pipelines — oriented towards SOC integration and proactive risk mitigation.",
    viewGithub: "View GitHub",
    downloadCV: "Download CV",
    contactBtn: "Contact",
    statusBlue: "STATUS: monitoring",
    statusRed: "STATUS: exploiting",
    skillsEyebrow: "Technical skills",
    certificationsEyebrow: "Certifications",
    courseTag: "course",
    certTag: "certification",
    viewCertificate: "View certificate",
    certificatePending: "Certificate PDF coming soon.",
    projectsEyebrow: "Featured projects",
    toComplete: "to be added",
    experienceEyebrow: "Experience",
    contactEyebrow: "Contact",
    contactBlurb: "Open to opportunities as a SOC analyst, junior pentester, or full-stack developer.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    closeLabel: "Close",
    viewOnGithub: "View on GitHub",
    githubPending: "GitHub link coming soon.",
    buildLabel: (mode) => `build: portfolio-v1 · current mode: ${mode === "blue" ? "blue-team" : "red-team"}`,
    cvFile: "/cv-victor-capdevila-en.pdf",
  },
};

const SKILL_GROUPS = [
  {
    mode: "blue",
    icon: ShieldCheck,
    title: { es: "Seguridad Defensiva (Blue Team) y SOC", en: "Defensive Security & Forensics (Blue Team)" },
    items: ["Wazuh", "Splunk", "Wireshark", "Autopsy", "Volatility"],
  },
  {
    mode: "red",
    icon: ShieldAlert,
    title: { es: "Seguridad Ofensiva (Red Team) e Ing. Inversa", en: "Offensive Security & Auditing (Red Team)" },
    items: ["Metasploit", "Burp Suite", "Nmap", "Ghidra", "x64dbg", "Detect It Easy"],
  },
  {
    mode: "dev",
    icon: Code2,
    title: { es: "Desarrollo de Software y Automatización", en: "Software Development & Automation" },
    items: ["Python", "Java", "Node.js", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    mode: "dev",
    icon: Network,
    title: { es: "Sistemas, Arquitectura y Herramientas", en: "Systems, Architecture & Tools" },
    items: ["Kali Linux", "Parrot OS", "Arch / CachyOS", "Docker", "Git/GitHub", "Power BI"],
  },
];

const CERTIFICATIONS = [
  {
    type: "course",
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2026",
    desc: {
      es: "Curso introductorio sobre fundamentos de IA generativa: cómo funcionan estas herramientas, escritura de prompts efectivos y uso responsable de la IA en el trabajo diario.",
      en: "Introductory course on generative AI fundamentals: how these tools work, writing effective prompts, and using AI responsibly in everyday work.",
    },
    pdf: "/certs/google-ai-essentials.pdf",
    verifyUrl: "",
  },
];

const PROJECTS = [
  {
    status: "listo",
    tag: "full-stack",
    title: { es: "Gestión de pedidos para restaurantes", en: "Restaurant Order Management App" },
    desc: {
      es: "Arquitectura full-stack con Node.js + Express (API REST) y Sequelize sobre MySQL/PostgreSQL. Frontend en React + Tailwind con personalización dinámica de pedidos y seguimiento de stock. Endpoints CRUD con multer para carga de imágenes.",
      en: "Complete Full-Stack architecture utilizing Node.js and Express for the backend REST API, coupled with Sequelize ORM for scalable relational database management (MySQL/PostgreSQL). Highly responsive React and Tailwind CSS frontend, tailored to optimize kitchen workflows.",
    },
    stack: ["Node.js", "Express", "Sequelize", "React", "Tailwind"],
    github: "https://github.com/vilacprd",
    detail: {
      es: "Diseño y despliegue de una arquitectura Full-Stack completa: API REST en Node.js/Express, ORM Sequelize para la gestión escalable de bases de datos relacionales, y frontend en React + Tailwind adaptado a los flujos de trabajo de cocina. Incluye endpoints CRUD robustos para catálogos de productos, integración de multer para carga segura de imágenes, y una arquitectura modular documentada para facilitar futuros despliegues.",
      en: "Designed and deployed a complete Full-Stack architecture utilizing Node.js and Express for the backend REST API, coupled with Sequelize ORM for scalable relational database management (MySQL/PostgreSQL). Engineered a highly responsive frontend interface using React and Tailwind CSS, tailored to optimize kitchen workflows with dynamic order customization and ingredient stock tracking. Implemented robust API endpoints for comprehensive CRUD operations across product catalogs, integrating multer for secure server-side file upload management and image handling. Established clean code practices and modular repository architecture using Git/GitHub, delivering comprehensive technical documentation to facilitate future deployments.",
    },
  },
  {
    status: "placeholder",
    tag: "blue team",
    title: { es: "Mini-SOC: detección y correlación de eventos", en: "Mini-SOC: Event Detection & Correlation" },
    desc: {
      es: "Espacio reservado — despliega Wazuh/Splunk en Docker, genera logs simulados y documenta un caso de detección de incidente de principio a fin.",
      en: "Reserved slot — deploy Wazuh/Splunk in Docker, generate simulated logs, and document an incident detection case from start to finish.",
    },
    stack: ["Wazuh", "Docker", "SIEM"],
    github: "",
    detail: {
      es: "Este proyecto está pendiente de documentar. Aquí puedes describir el objetivo del laboratorio, las reglas de correlación creadas, capturas de los dashboards y el caso de detección de incidente paso a paso.",
      en: "This project is still pending documentation. Here you can describe the lab's objective, the correlation rules created, dashboard screenshots, and the incident detection case step by step.",
    },
  },
  {
    status: "placeholder",
    tag: "red team",
    title: { es: "Write-up: CTF / laboratorio ofensivo", en: "Write-up: CTF / Offensive Lab" },
    desc: {
      es: "Espacio reservado — documenta un reto de TryHackMe, HackTheBox o VulnHub: reconocimiento, explotación y remediación, con capturas de Burp Suite y Nmap.",
      en: "Reserved slot — document a TryHackMe, HackTheBox, or VulnHub challenge: recon, exploitation, and remediation, with Burp Suite and Nmap screenshots.",
    },
    stack: ["Burp Suite", "Nmap", "Metasploit"],
    github: "",
    detail: {
      es: "Este write-up está pendiente. Aquí puedes documentar reconocimiento, vector de explotación, capturas de Burp Suite/Nmap y la remediación propuesta, con la misma estructura que un informe de pentest real.",
      en: "This write-up is still pending. Here you can document recon, the exploitation vector, Burp Suite/Nmap screenshots, and the proposed remediation, following the same structure as a real pentest report.",
    },
  },
];

const EXPERIENCE = [
  {
    role: { es: "Analista de Sistemas y Datos (Prácticas)", en: "Systems and Data Analyst (Internship)" },
    org: { es: "FIDESOL — Centro de Investigación Tecnológica", en: "FIDESOL (Technological Research Center)" },
    date: { es: "Oct 2024 – Ene 2025", en: "Oct 2024 – Jan 2025" },
    points: {
      es: [
        "Mantenimiento y desarrollo de infraestructuras de software en entorno de I+D bajo metodología Ágil (Scrum).",
        "Diseño y despliegue de paneles analíticos avanzados con Power BI para inteligencia empresarial.",
        "Experiencia en ecosistemas de investigación, entidad participante en la Red Cervera CICERO.",
      ],
      en: [
        "Actively participated in the maintenance and development lifecycle of software infrastructures operating under a high-level technological R&D environment, integrated into Agile development methodologies (Scrum).",
        "Engineered and deployed advanced analytical dashboards using Power BI, extracting, modeling, and correlating complex data flows to ensure information integrity and provide business intelligence for strategic decision-making processes.",
        "Gained operational exposure to advanced technological architectures and innovative research ecosystems (entity participating in national security projects such as the Cervera CICERO Network).",
      ],
    },
  },
];

const EDUCATION = [
  {
    title: { es: "Especialización en Ciberseguridad en Entornos de las TI", en: "Specialisation Course in Cybersecurity in I.T." },
    org: "FP Mercedarias",
    date: "2025 – 2026",
  },
  {
    title: { es: "Técnico Superior en Desarrollo de Aplicaciones Web", en: "Advanced Technician Degree in Web Application Development" },
    org: "IES Zaidín Vergeles",
    date: "2021 – 2024",
  },
];

export default function Portfolio() {
  const [mode, setMode] = useState("blue"); // "blue" | "red"
  const [lang, setLang] = useState("es"); // "es" | "en"
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const boot = useTypewriter(BOOT_LINE);
  const accent = mode === "blue" ? TOKENS.blue : TOKENS.amber;
  const t = UI[lang];

  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ backgroundColor: TOKENS.ink, color: TOKENS.text }}
    >
      {/* NAV */}
      <header
        className="sticky top-0 z-20 backdrop-blur border-b"
        style={{ borderColor: TOKENS.line, backgroundColor: `${TOKENS.ink}CC` }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
            <Terminal size={16} style={{ color: accent }} />
            VCR
          </div>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest" style={{ color: TOKENS.muted }}>
            <a href="#about" className="hover:text-current transition">{t.nav.about}</a>
            <a href="#skills" className="hover:text-current transition">{t.nav.skills}</a>
            <a href="#certifications" className="hover:text-current transition">{t.nav.certifications}</a>
            <a href="#projects" className="hover:text-current transition">{t.nav.projects}</a>
            <a href="#experience" className="hover:text-current transition">{t.nav.experience}</a>
            <a href="#contact" className="hover:text-current transition">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <ModeToggle mode={mode} setMode={setMode} />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div
          className="font-mono text-xs md:text-sm mb-6 px-4 py-3 rounded"
          style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}`, color: TOKENS.muted }}
        >
          <span style={{ color: accent }}>victor@localhost</span>:~$ {boot}
          <span className="animate-pulse">▍</span>
        </div>

        <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
          Víctor Capdevila
          <br />
          Rodríguez
        </h1>

        <p className="text-lg md:text-xl mb-8" style={{ color: TOKENS.muted }}>
          {t.heroRole}
        </p>

        <p className="max-w-2xl text-base leading-relaxed mb-10">
          {t.heroText}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/vilacprd"
            className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition"
            style={{ backgroundColor: accent, color: TOKENS.ink }}
          >
            <Github size={16} /> {t.viewGithub}
          </a>
          <a
            href={t.cvFile}
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm border transition"
            style={{ borderColor: TOKENS.line, color: TOKENS.text }}
          >
            <Download size={16} /> {t.downloadCV}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm border transition"
            style={{ borderColor: TOKENS.line, color: TOKENS.text }}
          >
            <Mail size={16} /> {t.contactBtn}
          </a>
          <div className="flex items-center font-mono text-xs" style={{ color: TOKENS.muted }}>
            <StatusDot active accent={accent} />
            {mode === "blue" ? t.statusBlue : t.statusRed}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>{t.skillsEyebrow}</Eyebrow>
        <div className="grid md:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((g) => {
            const Icon = g.icon;
            const groupAccent = g.mode === "blue" ? TOKENS.blue : g.mode === "red" ? TOKENS.amber : TOKENS.muted;
            return (
              <div
                key={g.title.es}
                className="p-5 rounded"
                style={{ backgroundColor: TOKENS.panel, borderLeft: `3px solid ${groupAccent}` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} style={{ color: groupAccent }} />
                  <h3 className="font-semibold text-sm">{g.title[lang]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: TOKENS.panelAlt, color: TOKENS.muted }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>{t.certificationsEyebrow}</Eyebrow>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.title}
              onClick={() => setSelectedCert(c)}
              className="p-4 rounded flex items-start gap-3 cursor-pointer transition hover:opacity-90"
              style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}` }}
            >
              <Award size={20} className="shrink-0 mt-0.5" style={{ color: c.type === "certification" ? accent : TOKENS.muted }} />
              <div>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: TOKENS.panelAlt,
                    color: c.type === "certification" ? accent : TOKENS.muted,
                  }}
                >
                  {c.type === "certification" ? t.certTag : t.courseTag}
                </span>
                <p className="text-sm font-medium mt-1.5">{c.title}</p>
                <p className="font-mono text-xs" style={{ color: TOKENS.muted }}>{c.issuer} · {c.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>{t.projectsEyebrow}</Eyebrow>
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.title.es}
              onClick={() => setSelectedProject(p)}
              className="p-5 rounded flex flex-col cursor-pointer transition hover:opacity-90"
              style={{
                backgroundColor: TOKENS.panel,
                border: p.status === "placeholder" ? `1px dashed ${TOKENS.line}` : `1px solid ${TOKENS.line}`,
                opacity: p.status === "placeholder" ? 0.75 : 1,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded" style={{ backgroundColor: TOKENS.panelAlt, color: accent }}>
                  {p.tag}
                </span>
                {p.status === "placeholder" && (
                  <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: TOKENS.muted }}>
                    {t.toComplete}
                  </span>
                )}
              </div>
              <h3 className="font-semibold mb-2">{p.title[lang]}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: TOKENS.muted }}>
                {p.desc[lang]}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px]" style={{ color: TOKENS.muted }}>
                    #{s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>{t.experienceEyebrow}</Eyebrow>
        {EXPERIENCE.map((e) => (
          <div key={e.role.es} className="mb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-semibold">{e.role[lang]}</h3>
              <span className="font-mono text-xs" style={{ color: TOKENS.muted }}>{e.date[lang]}</span>
            </div>
            <p className="text-sm mb-3" style={{ color: accent }}>{e.org[lang]}</p>
            <ul className="space-y-2">
              {e.points[lang].map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed" style={{ color: TOKENS.muted }}>
                  <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: accent }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {EDUCATION.map((ed) => (
            <div key={ed.title.es} className="p-4 rounded flex gap-3" style={{ backgroundColor: TOKENS.panel }}>
              <GraduationCap size={18} className="shrink-0 mt-0.5" style={{ color: accent }} />
              <div>
                <p className="text-sm font-medium">{ed.title[lang]}</p>
                <p className="font-mono text-xs" style={{ color: TOKENS.muted }}>{ed.org} · {ed.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>{t.contactEyebrow}</Eyebrow>
        <p className="max-w-xl mb-8" style={{ color: TOKENS.muted }}>
          {t.contactBlurb}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:capdevilaavictorr@gmail.com" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Mail size={16} /> {t.emailLabel}
          </a>
          <a href="https://github.com/vilacprd" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Github size={16} /> {t.githubLabel}
          </a>
          <a href="https://www.linkedin.com/in/v%C3%ADctor-capdevila-rodr%C3%ADguez-8a873b257/" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Linkedin size={16} /> {t.linkedinLabel}
          </a>
        </div>
        <div className="mt-12 flex items-center gap-2 font-mono text-[10px]" style={{ color: TOKENS.muted }}>
          <Fingerprint size={12} /> {t.buildLabel(mode)}
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-lg w-full rounded p-6 relative"
            style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 cursor-pointer"
              style={{ color: TOKENS.muted }}
              aria-label={t.closeLabel}
            >
              <X size={18} />
            </button>

            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded"
              style={{ backgroundColor: TOKENS.panelAlt, color: accent }}
            >
              {selectedProject.tag}
            </span>

            <h3 className="text-lg font-semibold mt-3 mb-3">{selectedProject.title[lang]}</h3>

            <p className="text-sm leading-relaxed mb-5" style={{ color: TOKENS.muted }}>
              {selectedProject.detail[lang]}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: TOKENS.panelAlt, color: TOKENS.muted }}
                >
                  {s}
                </span>
              ))}
            </div>

            {selectedProject.github ? (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-sm"
                style={{ backgroundColor: accent, color: TOKENS.ink }}
              >
                <ExternalLink size={14} /> {t.viewOnGithub}
              </a>
            ) : (
              <p className="font-mono text-xs" style={{ color: TOKENS.muted }}>
                {t.githubPending}
              </p>
            )}
          </div>
        </div>
      )}

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-lg w-full rounded p-6 relative"
            style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 cursor-pointer"
              style={{ color: TOKENS.muted }}
              aria-label={t.closeLabel}
            >
              <X size={18} />
            </button>

            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded"
              style={{
                backgroundColor: TOKENS.panelAlt,
                color: selectedCert.type === "certification" ? accent : TOKENS.muted,
              }}
            >
              {selectedCert.type === "certification" ? t.certTag : t.courseTag}
            </span>

            <h3 className="text-lg font-semibold mt-3 mb-1">{selectedCert.title}</h3>
            <p className="font-mono text-xs mb-4" style={{ color: TOKENS.muted }}>
              {selectedCert.issuer} · {selectedCert.date}
            </p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: TOKENS.muted }}>
              {selectedCert.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-3">
              {selectedCert.pdf && (
                <a
                  href={selectedCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-sm"
                  style={{ backgroundColor: accent, color: TOKENS.ink }}
                >
                  <FileText size={14} /> {t.viewCertificate}
                </a>
              )}
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-sm border"
                  style={{ borderColor: TOKENS.line, color: TOKENS.text }}
                >
                  <ExternalLink size={14} /> {lang === "es" ? "Verificar" : "Verify"}
                </a>
              )}
            </div>
            {!selectedCert.pdf && (
              <p className="font-mono text-xs" style={{ color: TOKENS.muted }}>
                {t.certificatePending}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ModeToggle({ mode, setMode }) {
  return (
    <div
      className="flex items-center rounded-full p-1 font-mono text-[10px] uppercase tracking-widest"
      style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}` }}
      role="group"
      aria-label="Cambiar modo de color entre blue team y red team"
    >
      <button
        onClick={() => setMode("blue")}
        className="flex items-center gap-1 px-3 py-1.5 rounded-full transition cursor-pointer"
        style={{
          backgroundColor: mode === "blue" ? TOKENS.blue : "transparent",
          color: mode === "blue" ? TOKENS.ink : TOKENS.muted,
        }}
      >
        <Radio size={11} /> blue
      </button>
      <button
        onClick={() => setMode("red")}
        className="flex items-center gap-1 px-3 py-1.5 rounded-full transition cursor-pointer"
        style={{
          backgroundColor: mode === "red" ? TOKENS.amber : "transparent",
          color: mode === "red" ? TOKENS.ink : TOKENS.muted,
        }}
      >
        <ShieldAlert size={11} /> red
      </button>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div
      className="flex items-center rounded-full p-1 font-mono text-[10px] uppercase tracking-widest"
      style={{ backgroundColor: TOKENS.panel, border: `1px solid ${TOKENS.line}` }}
      role="group"
      aria-label="Switch language / Cambiar idioma"
    >
      <button
        onClick={() => setLang("es")}
        className="px-3 py-1.5 rounded-full transition cursor-pointer"
        style={{
          backgroundColor: lang === "es" ? TOKENS.text : "transparent",
          color: lang === "es" ? TOKENS.ink : TOKENS.muted,
        }}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className="px-3 py-1.5 rounded-full transition cursor-pointer"
        style={{
          backgroundColor: lang === "en" ? TOKENS.text : "transparent",
          color: lang === "en" ? TOKENS.ink : TOKENS.muted,
        }}
      >
        EN
      </button>
    </div>
  );
}
