"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code2, Github, Linkedin, Mail } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function TerminalLine({ delay, children }: { delay: number; children: string }) {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setText(children.slice(0, i + 1))
        i++
        if (i >= children.length) {
          clearInterval(interval)
          setShowCursor(false)
        }
      }, 30)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [children, delay])

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span className="text-primary">{">"}</span>
      <span className="text-muted-foreground">{text}</span>
      {showCursor && <span className="animate-blink text-primary">_</span>}
    </div>
  )
}

export function HeroSection() {
  const [tick, setTick] = useState(0)
  const leftRef = useScrollReveal<HTMLDivElement>({ animation: "fade-left", threshold: 0.05 })
  const rightRef = useScrollReveal<HTMLDivElement>({ animation: "fade-right", threshold: 0.05, delay: 200 })
  const statsRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", staggerChildren: true, delay: 300 })

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="noise-bg relative overflow-hidden border-b border-border pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* System status bar */}
        <div className="mb-8 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            SYS.ONLINE
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">TICK:{String(tick).padStart(6, "0")}</span>
          <span>|</span>
          <span>v1.0.0</span>
          <span>|</span>
          <span>STATUS: ACTIVE</span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div ref={leftRef} className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
                <Code2 className="size-3" />
                // SOFTWARE_ENGINEER
              </div>

              <h1 className="text-balance font-sans text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                BUILD.<br />
                <span className="text-primary">SCALE.</span><br />
                INNOVATE.
              </h1>

              <p className="max-w-lg text-pretty font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
                Full-stack software engineer crafting high-performance applications with Python, FastAPI, ReactJS, and modern cloud infrastructure. 1+ years building scalable systems that solve real problems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-sm font-bold tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
              >
                VIEW PROJECTS
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                EXPERIENCE
              </a>
            </div>

            {/* Quick stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "2", label: "Active Roles" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-primary lg:text-2xl">{stat.value}</span>
                  <span className="font-mono text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 border-t border-border pt-8">
              <a
                href="https://github.com/ibadrajput7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="size-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ibad-ur-rehman-rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
              <a
                href="mailto:ahmedibad0012@gmail.com"
                className="flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" />
                Contact
              </a>
            </div>
          </div>

          {/* Right: Terminal preview */}
          <div ref={rightRef} className="relative">
            <div className="border border-border bg-card">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-destructive/60" />
                    <span className="size-2.5 rounded-full bg-chart-4/60" />
                    <span className="size-2.5 rounded-full bg-primary/60" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">ibad.dev</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">LIVE</span>
              </div>

              {/* Terminal body */}
              <div className="flex flex-col gap-3 p-4">
                <TerminalLine delay={300}>$ whoami</TerminalLine>
                <TerminalLine delay={800}>Ibad Ur Rehman Rajput - Full Stack Engineer</TerminalLine>
                <TerminalLine delay={1300}>$ cat skills</TerminalLine>
                <TerminalLine delay={1800}>Languages: Python, JavaScript, SQL</TerminalLine>
                <TerminalLine delay={2300}>Backend: FastAPI, Flask, NodeJS</TerminalLine>
                <TerminalLine delay={2800}>Frontend: ReactJS, NextJS, TypeScript</TerminalLine>
                <TerminalLine delay={3300}>Database: PostgreSQL, MongoDB, Redis</TerminalLine>
                <TerminalLine delay={3800}>DevOps: Docker, Git, CI/CD, Linux</TerminalLine>

                {/* Stats output */}
                <div className="mt-2 border border-border bg-background p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">experience_level</span>
                      <span className="font-mono text-sm font-bold text-primary">ADVANCED</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary">
                      <div className="h-full bg-primary" style={{ width: "85%" }} />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">availability</span>
                      <span className="font-mono text-xs font-bold text-primary">OPEN_TO_OPPORTUNITIES</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-t border-border pt-3">
                      {[
                        { label: "projects", count: "10+", color: "text-primary" },
                        { label: "contributions", count: "100+", color: "text-primary" },
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-1">
                          <span className={`font-mono text-lg font-bold ${item.color}`}>{item.count}</span>
                          <span className="font-mono text-[10px] uppercase text-muted-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-2 -right-2 hidden size-4 border-t border-r border-primary lg:block" />
            <div className="absolute -bottom-2 -left-2 hidden size-4 border-b border-l border-primary lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
