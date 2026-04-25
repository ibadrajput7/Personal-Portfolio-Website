
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const highlights = [
  {
    icon: "📈",
    label: "1+ YEARS",
    title: "Professional Experience",
    description: "Full-stack development across multiple production environments and teams."
  },
  {
    icon: "🚀",
    label: "10+ PROJECTS",
    title: "Shipped Applications",
    description: "AI-powered tools, fintech platforms, and enterprise APIs in production."
  },
  {
    icon: "🛠️",
    label: "ADVANCED",
    title: "Technical Proficiency",
    description: "Backend, frontend, DevOps, and system design across modern tech stacks."
  },
  {
    icon: "🤝",
    label: "COLLABORATIVE",
    title: "Team Player",
    description: "Experience working in startups and established tech teams on critical systems."
  },
]

export function PricingSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const gridRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", staggerChildren: true, threshold: 0.05, staggerDelay: 150 })

  return (
    <section id="highlights" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: KEY_HIGHLIGHTS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>007</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I bring <span className="text-primary">to the table.</span>
          </h2>
          <p className="max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            Proven track record of building scalable systems, shipping features to production, and solving complex technical challenges.
            Ready to contribute immediately to your team.
          </p>
        </div>

        {/* Highlights grid */}
        <div ref={gridRef} className="grid gap-px bg-border lg:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="relative flex flex-col gap-4 bg-background p-6 lg:p-8"
            >
              {/* Icon and label */}
              <div className="flex items-center justify-between">
                <span className="text-3xl">{highlight.icon}</span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {highlight.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
