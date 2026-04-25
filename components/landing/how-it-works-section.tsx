"use client"

import { Briefcase, Code2, Zap, Trophy } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    icon: Code2,
    label: "CURRENT",
    number: "01",
    title: "Full-Stack Python Developer",
    company: "GMG Solutions",
    period: "Sep 2025 – Feb 2026",
    description:
      "Engineered 12+ RESTful API endpoints using FastAPI and Flask. Implemented Redis caching strategies increasing system throughput by 40%. Containerized microservices with Docker, cutting setup time by 50%.",
    terminal: [
      "> role: Full-Stack Python Developer",
      "> company: GMG Solutions (Onsite)",
      "> stack: FastAPI · ReactJS · PostgreSQL · Redis · Docker",
      "> achievement: +40% throughput with caching",
    ],
  },
  {
    icon: Zap,
    label: "PREVIOUS",
    number: "02",
    title: "Full-Stack Engineer",
    company: "Hedge Hawk Capital Ltd",
    period: "Jan 2025 – Jul 2025",
    description:
      "Launched 4 core fintech modules using FastAPI and ReactJS. Integrated OpenAI and Anthropic APIs, accelerating report generation by 30%. Optimized PostgreSQL queries reducing latency by 200ms.",
    terminal: [
      "> role: Full-Stack Engineer",
      "> company: Hedge Hawk Capital Ltd (Remote)",
      "> stack: FastAPI · ReactJS · PostgreSQL · AI APIs",
      "> impact: +15% user engagement in pilot phase",
    ],
  },
  {
    icon: Trophy,
    label: "EDUCATION",
    number: "03",
    title: "B.Sc. Software Engineering",
    company: "SZABIST",
    period: "Graduated: May 2025",
    description:
      "Specialized in full-stack development with foundation in data structures, algorithms, and system design. Strong CS fundamentals combined with practical experience in building production systems.",
    terminal: [
      "> degree: B.Sc. Software Engineering",
      "> institution: SZABIST",
      "> completed: May 2025",
      "> focus: Full-Stack Development & System Design",
    ],
  },
  {
    icon: Briefcase,
    label: "SKILLS",
    number: "04",
    title: "Core Competencies",
    company: "Expertise",
    period: "1+ Years Professional",
    description:
      "Full-stack development across backend (Python, FastAPI, Flask) and frontend (ReactJS, NextJS). Databases (PostgreSQL, MongoDB), caching (Redis), DevOps (Docker, CI/CD), and system design patterns.",
    terminal: [
      "> languages: Python, JavaScript, SQL, TypeScript",
      "> frameworks: FastAPI, Flask, ReactJS, NextJS",
      "> databases: PostgreSQL, MongoDB, Redis",
      "> tools: Docker, Git, Linux, CI/CD Pipelines",
    ],
  },
]

function StepCard({ step, index, total }: { step: (typeof steps)[0]; index: number; total: number }) {
  const ref = useScrollReveal<HTMLDivElement>({
    animation: index % 2 === 0 ? "fade-left" : "fade-right",
    delay: 100,
  })

  return (
    <div
      ref={ref}
      className={`group grid items-start gap-8 border-t border-border py-12 lg:grid-cols-2 lg:gap-16 ${
        index === total - 1 ? "border-b" : ""
      }`}
    >
      {/* Left: Info */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center border border-primary bg-primary/10">
            <step.icon className="size-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-primary">
              {step.label}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {step.company}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-2xl font-bold text-foreground">
            {step.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {step.period}
          </p>
        </div>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>

      {/* Right: Terminal */}
      <div className="border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-destructive/60" />
            <span className="size-2 rounded-full bg-chart-4/60" />
            <span className="size-2 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            step_{step.number}.sh
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {step.terminal.map((line, j) => (
            <div key={j} className="flex items-start gap-2 font-mono text-xs">
              <span className="text-primary shrink-0">{">"}</span>
              <span className="text-muted-foreground">{line.replace("> ", "")}</span>
            </div>
          ))}
          <div className="mt-1 flex items-center gap-2 font-mono text-xs">
            <span className="text-primary">{">"}</span>
            <span className="animate-blink text-primary">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })

  return (
    <section id="experience" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: PROFESSIONAL_JOURNEY</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>005</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience crafted through<br />
            <span className="text-primary">production-level work.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
