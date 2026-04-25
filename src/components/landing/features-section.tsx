
import {
  Code2,
  Database,
  Brain,
  GitBranch,
  Zap,
  Users,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    icon: Brain,
    label: "SMARTBUB",
    title: "SmartHub - AI Note Generator",
    description:
      "AI-powered application that generates structured notes, quizzes, and summaries from YouTube URLs, audio files, and unstructured text with interactive Q&A.",
    tech: ["FastAPI", "NextJS", "PostgreSQL", "OpenAI"]
  },
  {
    icon: Code2,
    label: "DEVINSIGHT",
    title: "DevInsightAI - Code Reviewer",
    description:
      "Advanced AI platform analyzing GitHub repositories or ZIP uploads, generating comprehensive reports on architecture, security, and production readiness.",
    tech: ["FastAPI", "NextJS", "PostgreSQL", "AI APIs"]
  },
  {
    icon: GitBranch,
    label: "FULLSTACK",
    title: "Full-Stack Fintech Modules",
    description:
      "Developed 4 core fintech modules using FastAPI and ReactJS with OpenAI/Anthropic API integration for automated data-driven pipelines.",
    tech: ["FastAPI", "ReactJS", "PostgreSQL", "Anthropic"]
  },
  {
    icon: Database,
    label: "API_DEV",
    title: "RESTful API Engineering",
    description:
      "Engineered 12+ production-grade RESTful API endpoints with Redis caching, reducing data loading times by 25% during peak traffic.",
    tech: ["FastAPI", "Flask", "PostgreSQL", "Redis"]
  },
  {
    icon: Zap,
    label: "INFRA",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Containerized microservices with Docker and optimized CI/CD pipelines, cutting environment setup time by 50% for development teams.",
    tech: ["Docker", "Git", "CI/CD", "Linux"]
  },
  {
    icon: Users,
    label: "SYSTEM_DESIGN",
    title: "System Design & Optimization",
    description:
      "Architected scalable systems handling concurrent sessions and optimized PostgreSQL queries, reducing response latency by 200ms.",
    tech: ["PostgreSQL", "Redis", "Async", "Optimization"]
  },
]

export function FeaturesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const gridRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", staggerChildren: true, threshold: 0.05, staggerDelay: 70 })

  return (
    <section id="projects" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: FEATURED_PROJECTS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>004</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects built with passion,<br />
            <span className="text-primary">shipped to production.</span>
          </h2>
          <p className="max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            Full-stack applications spanning AI-powered tools, fintech platforms, and enterprise APIs. 
            Real problems solved with modern tech stacks and scalable architecture.
          </p>
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="group relative flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-card lg:p-8"
            >
              {/* Top row: index + icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex size-10 items-center justify-center border border-border bg-card transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                  <feature.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </div>

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
                    <span key={t} className="inline-flex border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 size-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-transparent opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-t-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
