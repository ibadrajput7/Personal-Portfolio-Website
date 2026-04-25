
import { Terminal, Github, Linkedin, Mail } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const footerLinks = [
  {
    title: "NAVIGATION",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "GitHub", href: "https://github.com/ibadrajput7" },
      { label: "LinkedIn", href: "https://linkedin.com/in/ibad-ur-rehman-rajput" },
      { label: "Email", href: "mailto:ahmedibad0012@gmail.com" },
      { label: "Phone", href: "tel:+92-332-2805062" },
    ],
  },
  {
    title: "SKILLS",
    links: [
      { label: "Backend", href: "#" },
      { label: "Frontend", href: "#" },
      { label: "DevOps", href: "#" },
      { label: "System Design", href: "#" },
    ],
  },
]

export function Footer() {
  const ref = useScrollReveal<HTMLDivElement>({ animation: "fade-up", threshold: 0.05 })

  return (
    <footer className="border-t border-border bg-background py-16">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center border border-primary bg-primary/10">
                <Terminal className="size-4 text-primary" />
              </div>
              <span className="font-mono text-sm font-bold tracking-wider text-foreground">
                IBAD<span className="text-primary">DEV</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer building scalable systems. Open to opportunities and collaborations.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              AVAILABLE FOR WORK
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                {group.title}
              </span>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <span className="font-mono text-xs text-muted-foreground">
            {"\u00A9"} 2026 Ibad Ur Rehman. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ibadrajput7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/ibad-ur-rehman-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:ahmedibad0012@gmail.com"
              className="flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
