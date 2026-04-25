import { Code2, Database, Zap, Wrench } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const skillCategories = [
  {
    icon: Code2,
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "TypeScript"],
  },
  {
    icon: Zap,
    category: "Frameworks & APIs",
    skills: ["FastAPI", "Flask", "ReactJS", "NextJS", "REST APIs"],
  },
  {
    icon: Database,
    category: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Wrench,
    category: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD Pipelines"],
  },
]

const coreCompetencies = [
  "Full-Stack Web Development",
  "RESTful API Design & Optimization",
  "Database Architecture & Optimization",
  "Microservices with Docker",
  "Asynchronous Programming",
  "System Design & Scalability",
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
]

function SkillCard({
  category,
  icon: Icon,
  skills,
  index,
}: {
  category: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
  index: number
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    delay: index * 50,
  })

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-4 border border-border p-6 transition-all hover:border-primary/50 hover:bg-card lg:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center border border-primary bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <h3 className="font-sans font-semibold text-foreground">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const competenciesRef = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    delay: 200,
  })

  return (
    <section className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: TECHNICAL_SKILLS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>006</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical expertise<br />
            <span className="text-primary">across the stack.</span>
          </h2>
          <p className="max-w-2xl text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
            Comprehensive skill set spanning backend architecture, frontend development, database design, and DevOps infrastructure.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-px bg-border mb-16 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((item, i) => (
            <SkillCard
              key={item.category}
              category={item.category}
              icon={item.icon}
              skills={item.skills}
              index={i}
            />
          ))}
        </div>

        {/* Core competencies */}
        <div
          ref={competenciesRef}
          className="border border-border bg-card p-6 lg:p-8"
        >
          <h3 className="font-sans text-lg font-semibold text-foreground mb-6">
            Core Competencies
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreCompetencies.map((competency) => (
              <div key={competency} className="flex items-center gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
