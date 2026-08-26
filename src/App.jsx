import { useState, useEffect } from "react";
import {
  Terminal, ShieldCheck, ShieldAlert, Mail,
  Radio, Fingerprint, Network, Code2, GraduationCap, ChevronRight,
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

const SKILL_GROUPS = [
  {
    mode: "blue",
    icon: ShieldCheck,
    title: "Seguridad Defensiva (Blue Team) y SOC",
    items: ["Wazuh", "Splunk", "Wireshark", "Autopsy", "Volatility"],
  },
  {
    mode: "red",
    icon: ShieldAlert,
    title: "Seguridad Ofensiva (Red Team) e Ing. Inversa",
    items: ["Metasploit", "Burp Suite", "Nmap", "Ghidra", "x64dbg", "Detect It Easy"],
  },
  {
    mode: "dev",
    icon: Code2,
    title: "Desarrollo de Software y Automatización",
    items: ["Python", "Java", "Node.js", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    mode: "dev",
    icon: Network,
    title: "Sistemas, Arquitectura y Herramientas",
    items: ["Kali Linux", "Parrot OS", "Arch / CachyOS", "Docker", "Git/GitHub", "Power BI"],
  },
];

const PROJECTS = [
  {
    status: "listo",
    tag: "full-stack",
    title: "Gestión de pedidos para restaurantes",
    desc: "Arquitectura full-stack con Node.js + Express (API REST) y Sequelize sobre MySQL/PostgreSQL. Frontend en React + Tailwind con personalización dinámica de pedidos y seguimiento de stock. Endpoints CRUD con multer para carga de imágenes.",
    stack: ["Node.js", "Express", "Sequelize", "React", "Tailwind"],
  },
  {
    status: "placeholder",
    tag: "blue team",
    title: "Mini-SOC: detección y correlación de eventos",
    desc: "Espacio reservado — despliega Wazuh/Splunk en Docker, genera logs simulados y documenta un caso de detección de incidente de principio a fin.",
    stack: ["Wazuh", "Docker", "SIEM"],
  },
  {
    status: "placeholder",
    tag: "red team",
    title: "Write-up: CTF / laboratorio ofensivo",
    desc: "Espacio reservado — documenta un reto de TryHackMe, HackTheBox o VulnHub: reconocimiento, explotación y remediación, con capturas de Burp Suite y Nmap.",
    stack: ["Burp Suite", "Nmap", "Metasploit"],
  },
];

const EXPERIENCE = [
  {
    role: "Analista de Sistemas y Datos (Prácticas)",
    org: "FIDESOL — Centro de Investigación Tecnológica",
    date: "Oct 2024 – Ene 2025",
    points: [
      "Mantenimiento y desarrollo de infraestructuras de software en entorno de I+D bajo metodología Ágil (Scrum).",
      "Diseño y despliegue de paneles analíticos avanzados con Power BI para inteligencia empresarial.",
      "Experiencia en ecosistemas de investigación, entidad participante en la Red Cervera CICERO.",
    ],
  },
];

const EDUCATION = [
  { title: "Especialización en Ciberseguridad en Entornos de las TI", org: "FP Mercedarias", date: "2025 – 2026" },
  { title: "Técnico Superior en Desarrollo de Aplicaciones Web", org: "IES Zaidín Vergeles", date: "2021 – 2024" },
];

export default function Portfolio() {
  const [mode, setMode] = useState("blue"); // "blue" | "red"
  const boot = useTypewriter(BOOT_LINE);
  const accent = mode === "blue" ? TOKENS.blue : TOKENS.amber;

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
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
            <Terminal size={16} style={{ color: accent }} />
            VCR
          </div>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest" style={{ color: TOKENS.muted }}>
            <a href="#about" className="hover:text-current transition">Sobre mí</a>
            <a href="#skills" className="hover:text-current transition">Skills</a>
            <a href="#projects" className="hover:text-current transition">Proyectos</a>
            <a href="#experience" className="hover:text-current transition">Experiencia</a>
            <a href="#contact" className="hover:text-current transition">Contacto</a>
          </nav>
          <ModeToggle mode={mode} setMode={setMode} />
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
          Analista SOC Junior · Especialista en Ciberseguridad · Desarrollador Full-Stack
        </p>

        <p className="max-w-2xl text-base leading-relaxed mb-10">
          Combino una mentalidad ofensiva y defensiva para la mitigación proactiva de riesgos.
          Mi formación en desarrollo de software me da una ventaja analítica diferencial: entender
          las vulnerabilidades lógicas de una topología desde su propio código fuente.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/vilacprd"
            className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition"
            style={{ backgroundColor: accent, color: TOKENS.ink }}
          >
            <Github size={16} /> Ver GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm border transition"
            style={{ borderColor: TOKENS.line, color: TOKENS.text }}
          >
            <Mail size={16} /> Contactar
          </a>
          <div className="flex items-center font-mono text-xs" style={{ color: TOKENS.muted }}>
            <StatusDot active accent={accent} />
            {mode === "blue" ? "STATUS: monitorizando" : "STATUS: explotando"}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>Habilidades técnicas</Eyebrow>
        <div className="grid md:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((g) => {
            const Icon = g.icon;
            const groupAccent = g.mode === "blue" ? TOKENS.blue : g.mode === "red" ? TOKENS.amber : TOKENS.muted;
            return (
              <div
                key={g.title}
                className="p-5 rounded"
                style={{ backgroundColor: TOKENS.panel, borderLeft: `3px solid ${groupAccent}` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} style={{ color: groupAccent }} />
                  <h3 className="font-semibold text-sm">{g.title}</h3>
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

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>Proyectos destacados</Eyebrow>
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="p-5 rounded flex flex-col"
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
                    por completar
                  </span>
                )}
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: TOKENS.muted }}>
                {p.desc}
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
        <Eyebrow accent={accent}>Experiencia</Eyebrow>
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="mb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-semibold">{e.role}</h3>
              <span className="font-mono text-xs" style={{ color: TOKENS.muted }}>{e.date}</span>
            </div>
            <p className="text-sm mb-3" style={{ color: accent }}>{e.org}</p>
            <ul className="space-y-2">
              {e.points.map((pt) => (
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
            <div key={ed.title} className="p-4 rounded flex gap-3" style={{ backgroundColor: TOKENS.panel }}>
              <GraduationCap size={18} className="shrink-0 mt-0.5" style={{ color: accent }} />
              <div>
                <p className="text-sm font-medium">{ed.title}</p>
                <p className="font-mono text-xs" style={{ color: TOKENS.muted }}>{ed.org} · {ed.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: TOKENS.line }}>
        <Eyebrow accent={accent}>Contacto</Eyebrow>
        <p className="max-w-xl mb-8" style={{ color: TOKENS.muted }}>
          Abierto a oportunidades como analista SOC, pentester junior o desarrollador full-stack.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:capdevilaavictorr@gmail.com" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/vilacprd" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/v%C3%ADctor-capdevila-rodr%C3%ADguez-8a873b257/" className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border" style={{ borderColor: TOKENS.line }}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <div className="mt-12 flex items-center gap-2 font-mono text-[10px]" style={{ color: TOKENS.muted }}>
          <Fingerprint size={12} /> build: portfolio-v1 · modo actual: {mode === "blue" ? "blue-team" : "red-team"}
        </div>
      </footer>
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
