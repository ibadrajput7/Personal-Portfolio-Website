
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const contactMethods = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "ahmedibad0012@gmail.com",
    href: "mailto:ahmedibad0012@gmail.com",
    description: "For project inquiries and collaboration opportunities."
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+92-332-2805062",
    href: "tel:+92-332-2805062",
    description: "Available for calls to discuss opportunities."
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/ibadrajput7",
    href: "https://github.com/ibadrajput7",
    description: "View my open source contributions and project repositories."
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "linkedin.com/in/ibad-ur-rehman-rajput",
    href: "https://linkedin.com/in/ibad-ur-rehman-rajput",
    description: "Connect with me for professional networking."
  },
]

export function ChatbotSection() {
  const leftRef = useScrollReveal<HTMLDivElement>({ animation: "fade-left" })
  const rightRef = useScrollReveal<HTMLDivElement>({ animation: "fade-right", delay: 150 })

  return (
    <section id="contact" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div ref={leftRef} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">// SECTION: GET_IN_TOUCH</span>
              <span className="hidden h-px flex-1 bg-border sm:block" />
              <span>008</span>
            </div>

            <div className="inline-flex w-fit items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
              <Mail className="size-3" />
              CONTACT_INFO
            </div>

            <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something<br />
              <span className="text-primary">amazing together.</span>
            </h2>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m actively looking for opportunities to join a talented team building scalable systems. Whether it&apos;s a full-time role, contract work, or collaboration on exciting projects, I&apos;m eager to contribute and grow.
            </p>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              {[
                "Full-stack development across backend and frontend",
                "System design and architecture optimization",
                "Team collaboration and code mentoring",
                "Quick turnaround on deliverables",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-1.5 shrink-0 bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact methods */}
          <div ref={rightRef} className="border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <span className="font-mono text-xs text-foreground">REACH OUT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] text-primary">AVAILABLE</span>
              </div>
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-0 p-4">
              {contactMethods.map((method, i) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex gap-4 border-b border-border py-4 transition-colors hover:bg-primary/5 group first:pt-0 ${
                    i === contactMethods.length - 1 ? "border-b-0 pb-0" : ""
                  }`}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center border border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    <method.icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-widest text-primary">
                      {method.label}
                    </span>
                    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {method.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
