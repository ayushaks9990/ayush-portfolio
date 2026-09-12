import { useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Server,
  Trophy,
  X,
} from "lucide-react";
import ArgoImg from "./assets/projects/Argo.png";
import MalariaImg from "./assets/projects/Malaria.png";
import RagImg from "./assets/projects/rag.png";
import ReportImg from "./assets/projects/Report.png";
import LifeOSImg from "./assets/projects/Lifeos.png";
import VoyageOSImg from "./assets/projects/Voyageos.png";
import HeroBackdrop from "./assets/portfolio-command-center.png";
import "./App.css";

function GitHubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.27 8h4.46v14H.27V8Zm7.28 0h4.27v1.91h.06c.59-1.12 2.04-2.31 4.2-2.31 4.49 0 5.32 2.95 5.32 6.79V22h-4.46v-6.76c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.59 1.76-2.59 3.57V22H7.55V8Z" />
    </svg>
  );
}

function LeetCodeIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 4 7 13l9 7" />
      <path d="M8 13h10" />
    </svg>
  );
}

function CodeforcesIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3" y="10" width="4" height="10" rx="1" />
      <rect x="10" y="5" width="4" height="15" rx="1" />
      <rect x="17" y="8" width="4" height="12" rx="1" />
    </svg>
  );
}

const profile = {
  name: "Ayush Kumar Shaw",
  role: "Software Engineer · AI/ML · Agentic RAG",
  subtitle:
    "Computer Science undergraduate at NIT Durgapur building production-grade backend systems, GenAI applications, RAG pipelines, and applied ML solutions.",
  email: "ayushaks099@gmail.com",
  github: "https://github.com/ayushaks9990",
  linkedin: "https://linkedin.com/in/ayush-shaw-231b86325",
  leetcode: "https://leetcode.com/u/ayushaks9999/",
  codeforces: "https://codeforces.com/profile/ayushaks999",
};

const navItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const stats = [
  { value: "1851+", label: "LeetCode Max Rating" },
  { value: "Knight", label: "LeetCode Level" },
  { value: "1400+", label: "Codeforces Rating" },
  { value: "1200+", label: "DSA Problems Solved" },
];

const skillGroups = [
  { title: "Languages", icon: Code2, items: ["Python", "C++", "SQL", "Bash"] },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["LLMs", "RAG", "LangChain", "LangGraph", "AutoGen", "Transformers", "Hugging Face", "Scikit-learn", "TensorFlow", "XGBoost", "LightGBM"],
  },
  { title: "Backend & APIs", icon: Server, items: ["Flask", "FastAPI", "REST APIs", "SQLAlchemy", "Authentication", "Streaming"] },
  { title: "Databases", icon: Database, items: ["SQLite", "PostgreSQL", "MongoDB", "ChromaDB", "Vector Databases"] },
  { title: "Cloud / DevOps", icon: Cloud, items: ["Docker", "Azure", "GitHub Actions", "Git", "Linux", "CI/CD"] },
  {
    title: "CS Core",
    icon: Trophy,
    items: ["Data Structures", "Algorithms", "System Design", "Database Management System", "OOP", "Competitive Programming", "Software Engineering", "Computer Organization and Architecture", "Computer Networks"],
  },
];

const projects = [
  {
    title: "LifeOS — Personal AI Operating System",
    shortTitle: "LifeOS",
    category: "Full Stack AI Systems",
    description:
      "A full-stack personal AI operating system that unifies assistant chat, memory, tasks, goals, planning, reminders, finance, Gmail, Calendar, integrations, music, and voice interaction in one intelligent workspace.",
    tech: ["FastAPI", "React", "PostgreSQL", "Redis", "JWT", "OAuth 2.0", "Groq", "Docker"],
    repo: "https://github.com/ayushaks9990/LifeOSs",
    image: LifeOSImg,
    accent: "yellow",
  },
  {
    title: "VoyageOS AI — Autonomous Travel Copilot",
    shortTitle: "VoyageOS AI",
    category: "Agentic AI Systems",
    description:
      "An end-to-end AI vacation planner that builds personalized trips from source to destination using multi-agent planning, flight and hotel discovery, budget optimization, destination recommendations, and complete day-wise itineraries.",
    tech: ["FastAPI", "React", "Multi-Agent AI", "Groq", "Google Places", "Amadeus", "PostgreSQL", "Docker"],
    repo: "https://github.com/ayushaks9990/Voyageos",
    image: VoyageOSImg,
    accent: "blue",
  },
  {
    title: "Agentic Multi-PDF RAG System",
    shortTitle: "Agentic RAG",
    category: "Production AI Systems",
    description:
      "Production-ready multi-user RAG chatbot with authentication, semantic retrieval, hybrid reranking, streaming answers, feedback-driven learning, Docker support, and Azure deployment readiness.",
    tech: ["Python", "Streamlit", "LangChain", "Gemini", "ChromaDB", "SQLite", "Docker", "Azure"],
    repo: "https://github.com/ayushaks9990/RaG_Chatbot",
    image: RagImg,
    accent: "yellow",
  },
  {
    title: "AI Sales & Marketing Report Generator",
    shortTitle: "SignalForge AI",
    category: "Production AI Systems",
    description:
      "Authenticated business-intelligence platform that transforms sales and marketing data into live analytics, polished visualizations, and executive-ready AI reports with agentic analysis and production deployment support.",
    tech: ["FastAPI", "React", "PostgreSQL", "Groq", "RAG", "Docker"],
    repo: "https://github.com/ayushaks9990/ReporT",
    image: ReportImg,
    accent: "blue",
  },
  {
    title: "ARGO RAG Explorer",
    shortTitle: "ARGO Explorer",
    category: "Applied ML",
    description:
      "Oceanographic ML + RAG platform for ARGO NetCDF ingestion, retrieval, visualization, and ML workflows.",
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "SQLAlchemy", "XGBoost", "LightGBM"],
    repo: "https://github.com/ayushaks9990/OceanForge_AI",
    image: ArgoImg,
    accent: "yellow",
  },
  {
    title: "Malaria Detection Pipeline",
    shortTitle: "Malaria Detection",
    category: "Deep Learning",
    description:
      "CNN-based malaria detection system with preprocessing, training, and evaluation pipeline.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    repo: "https://github.com/ayushaks9990/Malaria_Prediction",
    image: MalariaImg,
    accent: "blue",
  },
];

const filters = ["All", "Full Stack AI Systems", "Agentic AI Systems", "Production AI Systems", "Applied ML", "Deep Learning"];

const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};

function scrollToSection(id) {
  const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, className = "" }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionIntro({ index, label, title, description }) {
  return (
    <Reveal className="mb-14 grid gap-7 lg:mb-20 lg:grid-cols-[0.34fr_1fr]">
      <div className="flex items-start gap-4 pt-2">
        <span className="text-[11px] font-black tracking-[0.2em] text-yellow-300">{index}</span>
        <span className="mt-1.5 h-px w-10 bg-blue-400/60" />
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">{label}</span>
      </div>
      <div>
        <h2 className="display-font max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[0.92] tracking-[-0.065em] text-white">{title}</h2>
        {description ? <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p> : null}
      </div>
    </Reveal>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 190, damping: 28, mass: 0.3 });

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-gradient-to-r from-yellow-400 to-blue-500" />
      <nav className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[#080a0f]/85 text-white backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => scrollToSection("Home")} className="group flex items-center gap-3 text-left" aria-label="Go to home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-500/10 text-sm font-black text-white shadow-[0_0_22px_rgba(59,130,246,0.15)] transition group-hover:border-yellow-300 group-hover:text-yellow-300">AK</span>
            <span>
              <span className="block text-sm font-black tracking-[-0.02em]">Ayush Kumar Shaw</span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.19em] text-slate-500">Software · AI/ML</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="rounded-full px-4 py-2 text-xs font-bold text-slate-400 transition hover:bg-white/10 hover:text-white">{item}</button>
            ))}
          </div>

          <a href={`mailto:${profile.email}`} className="group hidden items-center gap-3 rounded-full border border-blue-300/25 bg-blue-500/5 py-2 pl-4 pr-2 text-xs font-black transition hover:border-yellow-300 sm:flex">
            Available to work
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black"><ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </a>

          <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 sm:hidden" aria-label="Toggle navigation menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-[#080a0f] px-5 sm:hidden">
              <div className="grid py-4">
                {navItems.map((item) => (
                  <button key={item} onClick={() => { scrollToSection(item); setOpen(false); }} className="flex items-center justify-between border-b border-white/10 px-2 py-4 text-left text-sm font-bold text-slate-300">
                    {item}<ArrowRight size={15} />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#03070d] px-5 pb-10 pt-32 text-white sm:px-8 sm:pt-40 lg:px-12">
      <img src={HeroBackdrop} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,4,9,0.99)_0%,rgba(1,4,9,0.94)_30%,rgba(1,4,9,0.68)_50%,rgba(1,4,9,0.10)_78%,rgba(1,4,9,0.28)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-transparent to-[#03070d]/50" />
      <div className="absolute left-0 top-[18%] h-44 w-1 bg-yellow-400 shadow-[0_0_34px_rgba(250,204,21,0.95)]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-yellow-400 via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.9)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.11 } } }} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-yellow-300" />
            </span>
            Open to engineering opportunities
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.18em] text-yellow-300">HELLO, I&apos;M</motion.p>
          <motion.h1 variants={fadeUp} className="display-font mt-4 text-[clamp(3.8rem,8vw,7.8rem)] font-black leading-[0.85] tracking-[-0.07em]">
            Ayush Kumar
            <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-yellow-300 bg-clip-text text-transparent">Shaw.</span>
          </motion.h1>
          <motion.h2 variants={fadeUp} className="mt-7 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">Software engineer building intelligent products.</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Backend systems, AI/ML, Agentic RAG and production-ready applications.</motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollToSection("Projects")} className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-black text-[#05080e] shadow-[0_0_28px_rgba(250,204,21,0.22)] transition hover:-translate-y-1 hover:bg-yellow-300">
              View projects <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-blue-400/35 bg-blue-500/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-500/20"><GitHubIcon size={18} /> GitHub</a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-yellow-300/60"><Mail size={17} /> Contact</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.75, ease }} className="mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-[1.4rem] border border-blue-300/20 bg-[#07101d]/60 shadow-[0_0_60px_rgba(0,112,255,0.12)] backdrop-blur-2xl sm:grid-cols-4">
          {stats.map((item, index) => (
            <div key={item.label} className={`relative p-4 sm:p-5 ${index < 3 ? "sm:border-r sm:border-blue-200/10" : ""} ${index < 2 ? "border-b border-blue-200/10 sm:border-b-0" : ""}`}>
              <div className={`absolute left-0 top-0 h-[2px] w-full ${index % 2 === 0 ? "bg-gradient-to-r from-yellow-400 to-transparent" : "bg-gradient-to-r from-blue-500 to-transparent"}`} />
              <p className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">{item.value}</p>
              <p className="mt-1.5 text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Backend Engineering", "Agentic AI", "RAG Systems", "Applied ML", "Competitive Programming", "Production Thinking"];
  return (
    <div className="overflow-hidden border-y border-yellow-200/20 bg-yellow-400 py-4 text-[#04070c] shadow-[0_0_34px_rgba(250,204,21,0.14)]">
      <div className="marquee-track flex min-w-max items-center gap-8">
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="text-xs font-black uppercase tracking-[0.18em]">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-white" />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  const focusCards = [
    { icon: Server, title: "Backend & Systems", text: "I build backend-heavy applications with APIs, storage, auth, modular project structure, and deployment-focused thinking." },
    { icon: BrainCircuit, title: "GenAI & RAG", text: "I work on RAG, LLM orchestration, vector search, retrieval quality, streaming answers, structured outputs, and agentic workflows." },
    { icon: Trophy, title: "Problem Solving", text: "My competitive programming background improves my ability to debug, optimize, and reason about edge cases and system behavior." },
  ];

  return (
    <section id="about" className="relative bg-[#05080e] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-blue-600/10 blur-[120px]" />
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro index="01" label="About" title="I build useful systems." description="Clean backends, practical AI, reliable data flows and products designed to work in the real world." />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="glass-panel relative flex min-h-[430px] h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-blue-300/20 bg-[#08111d]/80 p-8 text-white sm:p-12">
              <div className="absolute right-0 top-0 h-[3px] w-2/3 bg-gradient-to-r from-yellow-400 to-blue-500 shadow-[0_0_22px_rgba(59,130,246,0.7)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-yellow-300">What I bring</p>
              <p className="display-font max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Software that is clear, reliable and ready to ship.</p>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Clean architecture", "Strong fundamentals", "Applied intelligence", "End-to-end ownership"].map((item) => <span key={item} className="rounded-full border border-blue-200/15 bg-blue-500/5 px-4 py-2 text-xs font-bold text-slate-300">{item}</span>)}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            {focusCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title}>
                  <motion.article whileHover={{ x: 6 }} className={`glass-panel group grid min-h-[132px] grid-cols-[52px_1fr] gap-5 rounded-[1.5rem] border p-5 transition sm:p-6 ${index === 1 ? "border-blue-400/40 bg-blue-600/25 shadow-[0_0_35px_rgba(37,99,235,0.12)]" : "border-white/10 bg-white/[0.035] hover:border-yellow-300/50"}`}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 1 ? "bg-blue-500 text-white" : "bg-yellow-400 text-black"}`}><Icon size={20} /></div>
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-black tracking-[-0.035em]">{card.title}</h3>
                        <span className={`text-[10px] font-black ${index === 1 ? "text-blue-200" : "text-slate-600"}`}>0{index + 1}</span>
                      </div>
                      <p className={`mt-2 text-sm leading-6 ${index === 1 ? "text-blue-100" : "text-slate-400"}`}>{card.text}</p>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-5 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-3">
          {[
            ["Current focus", "Production AI systems, RAG pipelines, backend engineering, and ML applications"],
            ["Education", "NIT Durgapur · B.Tech CSE"],
            ["Open to", "SDE internships, AI/ML roles, GenAI projects, backend systems"],
          ].map(([label, value], index) => (
            <div key={label} className="bg-[#08111d] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-blue-500" : "bg-yellow-400"}`} />
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">{value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-[#07101a] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 bg-yellow-400/5 blur-[120px]" />
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro index="02" label="Skills" title="Tools I work with." description="A practical stack for building complete software and intelligent applications." />

        <div className="border-t border-blue-200/15">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title}>
                <motion.article whileHover={{ x: 5 }} className="group grid gap-5 border-b border-blue-200/15 py-7 transition hover:bg-blue-500/[0.035] md:grid-cols-[80px_0.55fr_1fr] md:items-center md:px-4 md:py-9">
                  <div className="flex items-center justify-between md:block">
                    <span className="text-xs font-black tracking-[0.16em] text-slate-400">0{index + 1}</span>
                    <div className={`mt-0 flex h-11 w-11 items-center justify-center rounded-xl md:mt-4 ${index % 2 === 0 ? "bg-yellow-400 text-black" : "bg-blue-600 text-white"}`}><Icon size={19} /></div>
                  </div>
                  <h3 className="display-font text-3xl font-black tracking-[-0.045em] sm:text-4xl">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="rounded-full border border-blue-200/15 bg-[#0b1624] px-3.5 py-2 text-xs font-bold text-slate-300 transition group-hover:border-blue-400/35 group-hover:text-white">{item}</span>)}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);

  return (
    <section id="projects" className="relative bg-[#03070d] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[34rem] w-[34rem] bg-blue-600/10 blur-[150px]" />
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro index="03" label="Work" title="Selected projects." description="Full-stack AI, agentic systems, RAG products and applied machine learning." />

        <Reveal className="mb-10 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`shrink-0 rounded-full border px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] transition ${activeFilter === filter ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_22px_rgba(250,204,21,0.16)]" : "border-blue-200/15 bg-blue-500/[0.04] text-slate-400 hover:border-blue-400/50 hover:text-white"}`}>{filter}</button>
          ))}
        </Reveal>

        <motion.div layout className="space-y-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const flip = index % 2 === 1;
              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease }}
                  className="glass-panel group grid overflow-hidden rounded-[2rem] border border-blue-200/15 bg-[#07101b]/90 shadow-[0_22px_70px_rgba(0,0,0,0.32)] transition hover:border-blue-400/35 lg:grid-cols-[1.08fr_0.92fr]"
                >
                  <div className={`relative min-h-[300px] overflow-hidden sm:min-h-[410px] ${flip ? "lg:order-2" : ""}`}>
                    <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.055]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                    <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[9px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-xl">
                      <span className={`h-2 w-2 rounded-full ${project.accent === "yellow" ? "bg-yellow-400" : "bg-blue-500"}`} />{project.category}
                    </div>
                    <span className="stroke-number absolute bottom-1 right-5 text-[7rem] font-black leading-none sm:text-[10rem]">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className={`flex flex-col justify-between p-7 sm:p-10 lg:p-12 ${flip ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${project.accent === "yellow" ? "text-yellow-300" : "text-blue-400"}`}>Project / {String(index + 1).padStart(2, "0")}</p>
                        <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white hover:text-black"><ArrowUpRight size={18} /></a>
                      </div>
                      <h3 className="display-font mt-7 max-w-xl text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-5xl">{project.title}</h3>
                      <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{project.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold text-slate-300">{item}</span>)}
                      </div>
                    </div>

                    <a href={project.repo} target="_blank" rel="noreferrer" className="group/link mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm font-black">
                      <span className="inline-flex items-center gap-2"><GitHubIcon size={18} /> Explore repository</span>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full transition ${project.accent === "yellow" ? "bg-yellow-400 text-black" : "bg-blue-600 text-white"}`}><ExternalLink size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" /></span>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  const cards = [
    { value: "1851+", title: "LeetCode Knight", text: "Max rating · Top 4% globally", color: "yellow" },
    { value: "1400+", title: "Codeforces Specialist", text: "Strong contest experience", color: "blue" },
    { value: "1200+", title: "Problems Solved", text: "Arrays, graphs, DP, trees, greedy, binary search, and advanced structures", color: "dark" },
    { value: "10/10 grades", title: "Core Academics", text: "OOP, DSA, Mathematics, AI/ML, Software Engineering & Embedded Systems", color: "light" },
  ];

  return (
    <section id="achievements" className="relative bg-[#07101a] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 bg-yellow-400/5 blur-[120px]" />
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro index="04" label="Achievements" title="Practice. Progress. Proof." description="Competitive programming and academics backed by consistent work." />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title}>
              <motion.article whileHover={{ y: -8 }} className={`glass-panel flex min-h-[330px] h-full flex-col justify-between rounded-[1.7rem] border p-7 transition ${card.color === "yellow" ? "border-yellow-300 bg-yellow-400 text-black shadow-[0_0_38px_rgba(250,204,21,0.10)]" : card.color === "blue" ? "border-blue-400/40 bg-blue-600 text-white shadow-[0_0_38px_rgba(37,99,235,0.12)]" : card.color === "dark" ? "border-blue-200/15 bg-[#050a12] text-white" : "border-blue-300/20 bg-blue-500/10 text-white"}`}>
                <div className="flex items-center justify-between">
                  <Trophy size={20} className={card.color === "yellow" ? "text-black/70" : "text-yellow-300"} />
                  <span className={`text-[10px] font-black tracking-[0.16em] ${card.color === "yellow" ? "text-black/45" : "text-white/45"}`}>0{index + 1}</span>
                </div>
                <div>
                  <p className="display-font text-5xl font-black tracking-[-0.06em] sm:text-6xl">{card.value}</p>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.035em]">{card.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${card.color === "yellow" ? "text-black/65" : "text-white/65"}`}>{card.text}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass-panel mt-6 overflow-hidden rounded-[2rem] border border-blue-200/15 bg-[#050a12] text-white">
          <div className="grid lg:grid-cols-[0.64fr_1.36fr]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <GraduationCap size={28} className="text-yellow-300" />
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">Education</p>
              <h3 className="display-font mt-3 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">Academic background</h3>
            </div>
            <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-yellow-300">Aug 2023 – Jun 2027</p>
                <h4 className="mt-5 text-2xl font-black leading-tight">National Institute of Technology, Durgapur</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">B.Tech in Computer Science and Engineering</p>
                <div className="mt-8 h-1 w-16 bg-yellow-400 shadow-[0_0_14px_rgba(250,204,21,0.8)]" />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-400">Graduated: May 2022</p>
                <h4 className="mt-5 text-2xl font-black leading-tight">Delhi Public School, Durgapur</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">School Education</p>
                <div className="mt-8 h-1 w-16 bg-blue-600" />
              </div>
            </div>
          </div>
          <div className="grid border-t border-white/10 p-8 sm:p-10 lg:grid-cols-[0.34fr_1fr] lg:p-12">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Current direction</p>
            <p className="mt-4 max-w-4xl text-xl font-bold leading-8 text-slate-200 lg:mt-0">Actively building a profile that combines strong SDE fundamentals with applied AI/ML, especially in RAG systems, backend architecture, and intelligent product development.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
    { label: "GitHub", href: profile.github, icon: GitHubIcon },
    { label: "LeetCode", href: profile.leetcode, icon: LeetCodeIcon },
    { label: "Codeforces", href: profile.codeforces, icon: CodeforcesIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#03070d] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(250,204,21,0.12),transparent_28%)]" />
      <div className="absolute right-0 top-0 h-px w-3/4 bg-gradient-to-l from-blue-400 via-yellow-300 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
      <Reveal className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-300">05 · Contact</p>
            <h2 className="display-font mt-7 max-w-5xl text-[clamp(3.8rem,8vw,7.7rem)] font-black leading-[0.84] tracking-[-0.07em]">Let&apos;s build something <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">great.</span></h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">Open to SDE internships, AI/ML roles, GenAI projects and backend engineering.</p>
          </div>

          <div className="glass-panel rounded-[1.8rem] border border-blue-300/25 bg-[#07101d]/75 p-7 shadow-[0_0_65px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:p-9">
            <div className="flex items-center gap-3 text-yellow-300">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">Available for serious engineering opportunities</p>
            </div>
            <p className="mt-7 text-3xl font-black leading-tight tracking-[-0.045em]">Build fast, ship clean, iterate with intention.</p>
            <a href={`mailto:${profile.email}`} className="group mt-8 flex items-center justify-between rounded-xl bg-yellow-400 py-3 pl-5 pr-3 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300">
              <span className="inline-flex items-center gap-2"><Mail size={17} /> Email me</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white"><ArrowUpRight size={16} /></span>
            </a>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {links.map((item) => {
                const Icon = item.icon;
                return <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-xs font-bold text-slate-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"><span className="inline-flex items-center gap-2"><Icon size={15} />{item.label}</span><ArrowUpRight size={13} /></a>;
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a0f] px-5 py-9 text-slate-500 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ayush Kumar Shaw</p>
        <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Built with React, Tailwind CSS & intent.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-[#03070d] selection:bg-yellow-300 selection:text-black">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
      <Analytics />
    </>
  );
}
