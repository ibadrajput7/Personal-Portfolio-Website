import {
  Brain,
  Code2,
  GitBranch,
  Zap,
} from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    icon: Brain,
    label: "SMARTHUB",
    title: "SmartHub - AI Note Generator",
    description:
      "AI-powered system that converts YouTube videos, audio files, and raw text into structured notes, quizzes, summaries, and interactive learning content.",
    tech: ["FastAPI", "NextJS", "PostgreSQL", "OpenAI"],
    github: "https://github.com/ibadrajput7/SmartHub",
  },
  {
    icon: Code2,
    label: "DEVINSIGHT",
    title: "DevInsightAI - AI Code Review Platform",
    description:
      "AI system that analyzes GitHub repositories and ZIP uploads to generate architecture, security, scalability, and production-readiness reports.",
    tech: ["FastAPI", "NextJS", "PostgreSQL", "AI APIs"],
    github: "https://github.com/ibadrajput7/DevInsightAI",
  },
  {
    icon: GitBranch,
    label: "TRADING JOURNAL",
    title: "Personal Trade Tracker",
    description:
      "Advanced forex trading journal with performance analytics, psychology tracking, discipline scoring, trade review system, and AI insights.",
    tech: ["FastAPI", "NextJS", "PostgreSQL", "Redis"],
    github: "https://github.com/ibadrajput7/PERSONAL-TRADE-TRACKER",
  },
  {
    icon: Zap,
    label: "JARVIS",
    title: "Jarvis - AI Personal Assistant",
    description:
      "AI assistant for automation, task management, intelligent responses, and workflow optimization using modern LLM integration.",
    tech: ["Python", "FastAPI", "LLMs", "Automation"],
    github: "https://github.com/ibadrajput7/Jarvis",
  },
]

export function FeaturesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
  })

  const gridRef = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    staggerChildren: true,
    threshold: 0.05,
    staggerDelay: 70,
  })

  return (
    <section
      id="projects"
      className="noise-bg relative border-b border-border py-20 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">

        {/* HEADER */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// FEATURED PROJECTS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>004</span>
          </div>

          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects,<br />
            <span className="text-primary">
              built for real-world impact.
            </span>
          </h2>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            A selection of AI systems and production-grade applications focused on automation,
            intelligence, and scalable engineering.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={gridRef}
          className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-2"
        >
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="group relative flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-card lg:p-8"
            >

              {/* TOP */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex size-10 items-center justify-center border border-border bg-card transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                  <feature.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-primary">
                  {feature.label}
                </span>

                <h3 className="font-sans text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {feature.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GITHUB LINK */}
                <a
                  href={feature.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  View on GitHub →
                </a>
              </div>

              {/* ACCENT */}
              <div className="absolute top-0 right-0 size-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-transparent opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-t-primary/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}