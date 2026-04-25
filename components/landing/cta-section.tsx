"use client"

import { ArrowRight, Code2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CtaSection() {
  const ref = useScrollReveal<HTMLDivElement>({ animation: "fade-scale" })

  return (
    <section className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex size-16 items-center justify-center border border-primary bg-primary/10">
            <Code2 className="size-7 text-primary" />
          </div>

          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to ship quality code.<br />
            <span className="text-primary">Let&apos;s work together.</span>
          </h2>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I bring passion for building scalable systems, solving complex problems, and shipping features that matter.
            Let&apos;s connect and explore how I can contribute to your team&apos;s success.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ahmedibad0012@gmail.com"
              className="group flex items-center gap-2 border border-primary bg-primary px-8 py-4 font-mono text-sm font-bold tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              SEND ME AN EMAIL
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/ibadrajput7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border px-8 py-4 font-mono text-sm tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              VIEW MY REPOS
            </a>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            Available for full-time roles, contract work, and collaborations. Let&apos;s build something great.
          </p>
        </div>
      </div>
    </section>
  )
}
