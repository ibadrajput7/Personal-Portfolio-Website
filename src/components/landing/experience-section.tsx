import { Briefcase } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const experiences = [
  {
    role: "Full-Stack Python Developer",
    company: "GMG Solutions",
    location: "Onsite",
    period: "Sep 2025 – Feb 2026",
    achievements: [
      "Engineered 12+ RESTful API endpoints using FastAPI and Flask, reducing front-end data loading times by 25%",
      "Restructured SQL schemas and implemented Redis caching strategies that increased system throughput by 40%",
      "Streamlined deployment cycles by containerizing microservices with Docker, cutting setup time by 50%",
    ],
    tech: ["FastAPI", "ReactJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Hedge Hawk Capital Ltd",
    location: "Remote",
    period: "Jan 2025 – Jul 2025",
    achievements: [
      "Launched 4 core fintech modules using FastAPI and ReactJS, contributing to 15% increase in user engagement",
      "Integrated OpenAI and Anthropic APIs to automate data-driven pipelines, accelerating report generation by 30%",
      "Optimized PostgreSQL query performance for high-frequency workloads, reducing response latency by 200ms",
    ],
    tech: ["FastAPI", "ReactJS", "PostgreSQL", "OpenAI", "Anthropic"],
  },
]

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({
    animation: index % 2 === 0 ? "fade-left" : "fade-right",
    delay: 100,
  })

  return (
    <div
      ref={ref}
      className="group grid items-start gap-8 border-t border-border py-12 lg:grid-cols-2 lg:gap-16"
    >
      {/* Left: Content */}
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center border border-primary bg-primary/10 shrink-0">
            <Briefcase className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-xl font-bold text-foreground">
              {exp.role}
            </h3>
            <p className="font-mono text-sm text-primary">
              {exp.company}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {exp.location} • {exp.period}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">▸</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {achievement}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="inline-flex border border-border px-3 py-1 font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Terminal */}
      <div className="border border-border bg-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-background/50">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-destructive/60" />
            <span className="size-2 rounded-full bg-chart-4/60" />
            <span className="size-2 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            experience.sh
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">role</span>
            <span className="text-primary">=</span>
            <span className="text-chart-5">{exp.role}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">company</span>
            <span className="text-primary">=</span>
            <span className="text-chart-5">{exp.company}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">duration</span>
            <span className="text-primary">=</span>
            <span className="text-chart-5">{exp.period}</span>
          </div>
          <div className="border-t border-border/30 my-2" />
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">technologies</span>
            <span className="text-primary">=</span>
            <span className="text-chart-5">[{exp.tech.join(", ")}]</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs mt-1">
            <span className="text-primary">$</span>
            <span className="animate-blink text-primary">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })

  return (
    <section className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: PROFESSIONAL_EXPERIENCE</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>005</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional experience<br />
            <span className="text-primary">built in production.</span>
          </h2>
          <p className="max-w-2xl text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
            Full-stack development roles at growth-stage companies, delivering high-impact features and optimizations.
          </p>
        </div>

        {/* Experiences */}
        <div className="flex flex-col gap-0 border-b border-border">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
