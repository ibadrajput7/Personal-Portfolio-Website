
import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const skillsData = {
  proficiency_level: "Advanced",
  languages: "Python, JavaScript, TypeScript, SQL",
  backend: {
    frameworks: "FastAPI, Flask, NodeJS",
    databases: "PostgreSQL, MongoDB",
    caching: "Redis",
    apis: "REST APIs, GraphQL fundamentals"
  },
  frontend: {
    frameworks: "ReactJS, NextJS",
    styling: "Tailwind CSS",
    state_management: "Redux, Context API",
    tools: "TypeScript, Webpack, Vite"
  },
  devops: {
    containerization: "Docker",
    versioning: "Git, GitHub",
    deployment: "CI/CD Pipelines",
    platforms: "Linux, AWS basics"
  },
  concepts: "OOP, Data Structures, Algorithms, System Design, Async Programming"
}

export function ReviewOutputSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const cardRef = useScrollReveal<HTMLDivElement>({ animation: "fade-scale", threshold: 0.05 })

  const skillCategories = [
    {
      label: "LANGUAGES",
      items: skillsData.languages.split(", ")
    },
    {
      label: "BACKEND",
      items: [skillsData.backend.frameworks, skillsData.backend.databases, skillsData.backend.caching].filter(Boolean)
    },
    {
      label: "FRONTEND",
      items: [skillsData.frontend.frameworks, skillsData.frontend.styling].filter(Boolean)
    },
    {
      label: "DEVOPS",
      items: [skillsData.devops.containerization, skillsData.devops.versioning, skillsData.devops.deployment].filter(Boolean)
    },
    {
      label: "CONCEPTS",
      items: skillsData.concepts.split(", ")
    },
  ]

  return (
    <section id="skills" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: TECHNICAL_SKILLS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>006</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full-stack expertise<br />
            <span className="text-primary">across the entire stack.</span>
          </h2>
          <p className="max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            Production-ready proficiency in backend systems, frontend frameworks, cloud infrastructure, and core computer science concepts.
            Hands-on experience with modern development tools and best practices.
          </p>
        </div>

        {/* Skills card */}
        <div ref={cardRef} className="border border-border bg-card">
          {/* Header bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-chart-4/60" />
                <span className="size-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">skills.manifest</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary">PROFICIENCY_LEVEL: {skillsData.proficiency_level.toUpperCase()}</span>
            </div>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-2">
            {/* Left: Skills categories */}
            <div className="flex flex-col gap-0 bg-background">
              {skillCategories.map((category, idx) => (
                <div key={category.label} className={`border-b border-border p-6 ${idx === 0 ? "" : ""}`}>
                  <span className="font-mono text-[10px] tracking-widest text-primary">
                    {category.label}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span key={i} className="inline-flex border border-border px-2.5 py-1.5 font-mono text-xs text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Professional summary */}
            <div className="flex flex-col gap-0 bg-background p-6">
              <span className="font-mono text-[10px] tracking-widest text-primary">
                PROFESSIONAL_SUMMARY
              </span>
              <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-foreground">
                <div>
                  <h4 className="font-mono font-bold text-primary mb-1">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Architecting scalable APIs with FastAPI and Flask. Experience with async programming, database optimization (PostgreSQL, MongoDB), and Redis caching for high-performance systems.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-mono font-bold text-primary mb-1">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive UIs with ReactJS and NextJS using TypeScript. Proficient with Tailwind CSS, state management patterns, and modern JavaScript ecosystem.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-mono font-bold text-primary mb-1">DevOps & Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Containerizing applications with Docker, implementing CI/CD pipelines, and deploying to cloud platforms. Comfortable with Linux, Git workflows, and deployment automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
