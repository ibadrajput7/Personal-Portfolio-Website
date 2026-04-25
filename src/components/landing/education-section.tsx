import { GraduationCap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const education = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology (SZABIST)",
    location: "Pakistan",
    graduated: "May 2025",
    focus: [
      "Full-Stack Web Development",
      "Data Structures & Algorithms",
      "System Design",
      "Object-Oriented Programming",
      "Database Design",
      "Software Engineering Principles",
    ],
  },
]

export function EducationSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const contentRef = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    delay: 100,
  })

  return (
    <section className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: EDUCATION</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>007</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Academic foundation<br />
            <span className="text-primary">in software engineering.</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              ref={contentRef}
              className="group border border-border p-6 transition-all hover:border-primary/50 hover:bg-card lg:p-8"
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center border border-primary bg-primary/10 shrink-0">
                    <GraduationCap className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-sm text-primary mt-1">
                      {edu.institution}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {edu.location} • Graduated {edu.graduated}
                    </p>
                  </div>
                </div>

                {/* Focus areas */}
                <div>
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                    Areas of Focus
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {edu.focus.map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <span className="text-primary">▸</span>
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal view */}
                <div className="border-t border-border/50 pt-6">
                  <div className="border border-border bg-background">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-card/50">
                      <div className="flex gap-1.5">
                        <span className="size-2 rounded-full bg-destructive/60" />
                        <span className="size-2 rounded-full bg-chart-4/60" />
                        <span className="size-2 rounded-full bg-primary/60" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        education.sh
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 p-3">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-primary">$</span>
                        <span className="text-muted-foreground">degree</span>
                        <span className="text-primary">=</span>
                        <span className="text-chart-5">"B.Sc. Software Engineering"</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-primary">$</span>
                        <span className="text-muted-foreground">graduated</span>
                        <span className="text-primary">=</span>
                        <span className="text-chart-5">May 2025</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-primary">$</span>
                        <span className="text-muted-foreground">status</span>
                        <span className="text-primary">=</span>
                        <span className="text-chart-1">"COMPLETED"</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs mt-1">
                        <span className="text-primary">$</span>
                        <span className="animate-blink text-primary">_</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
