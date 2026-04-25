import { Award, Trophy } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const certifications = [
  {
    type: "Certification",
    title: "Python Essential Training",
    issuer: "LinkedIn Learning",
    date: "2025",
    description: "Comprehensive training covering core Python concepts, object-oriented programming, and practical application development.",
    icon: Award,
  },
  {
    type: "Certification",
    title: "The Complete Python Mastery",
    issuer: "ZTM Academy",
    date: "2026",
    description: "Advanced Python training focusing on web scraping, automation, data analysis, and production-level code patterns.",
    icon: Award,
  },
]

const achievements = [
  {
    title: "High-Performance System Optimization",
    description: "Achieved 40% increase in system throughput through Redis caching strategies and query optimization",
  },
  {
    title: "API Development Excellence",
    description: "Engineered 12+ production-grade RESTful API endpoints with optimized performance and security",
  },
  {
    title: "Full-Stack Fintech Platform",
    description: "Launched 4 core fintech modules contributing to 15% increase in user engagement during pilot phase",
  },
  {
    title: "Infrastructure & DevOps",
    description: "Containerized microservices with Docker, reducing development environment setup time by 50%",
  },
]

function CertificationCard({
  type,
  title,
  issuer,
  date,
  description,
  icon: Icon,
  index,
}: {
  type: string
  title: string
  issuer: string
  date: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  index: number
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    delay: index * 50,
  })

  return (
    <div
      ref={ref}
      className="group flex gap-4 border border-border p-6 transition-all hover:border-primary/50 hover:bg-card lg:p-8"
    >
      <div className="flex size-12 items-center justify-center border border-primary bg-primary/10 shrink-0">
        <Icon className="size-5 text-primary" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div>
          <p className="font-mono text-xs text-primary uppercase tracking-widest">
            {type}
          </p>
          <h3 className="font-sans font-semibold text-foreground mt-1">{title}</h3>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {issuer} • {date}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

function AchievementCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    animation: "fade-up",
    delay: index * 50,
  })

  return (
    <div
      ref={ref}
      className="group flex gap-4 border border-border p-6 transition-all hover:border-primary/50 hover:bg-card lg:p-8"
    >
      <div className="flex size-10 items-center justify-center border border-primary/30 bg-primary/5 shrink-0">
        <Trophy className="size-5 text-primary" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="font-sans font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export function CertificationsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const certRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", delay: 100 })
  const achieveRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", delay: 200 })

  return (
    <section className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: CERTIFICATIONS_&_ACHIEVEMENTS</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>008</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Certifications & achievements<br />
            <span className="text-primary">validating expertise.</span>
          </h2>
        </div>

        {/* Certifications */}
        <div ref={certRef} className="mb-16">
          <h3 className="font-sans text-lg font-semibold text-foreground mb-6">
            Professional Certifications
          </h3>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <CertificationCard
                key={i}
                type={cert.type}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
                icon={cert.icon}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achieveRef}>
          <h3 className="font-sans text-lg font-semibold text-foreground mb-6">
            Key Achievements
          </h3>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {achievements.map((achievement, i) => (
              <AchievementCard
                key={i}
                title={achievement.title}
                description={achievement.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
