"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "What's your current employment status?",
    answer:
      "I recently completed my internship at GMG Solutions (Sep 2025 - Feb 2026) and Hedge Hawk Capital Ltd (Jan 2025 - Jul 2025). I'm currently open to full-time opportunities and actively looking for roles in backend development, full-stack engineering, or system architecture.",
  },
  {
    question: "What's your tech stack of choice?",
    answer:
      "For backend, I prefer Python with FastAPI or Flask for its simplicity and performance. On the frontend, I work with ReactJS or NextJS with TypeScript. For databases, PostgreSQL is my go-to for relational data, with MongoDB for flexible schemas. I use Docker for containerization and Redis for caching.",
  },
  {
    question: "Tell me about your most impactful project.",
    answer:
      "SmartHub and DevInsightAI were my most ambitious projects. SmartHub generates AI-powered notes and quizzes from multimedia (YouTube, audio, text) using OpenAI APIs. DevInsightAI analyzes codebases for architecture, security, and production readiness. Both projects involved full-stack development, complex data processing, and integrating modern AI models.",
  },
  {
    question: "What are you looking for in your next role?",
    answer:
      "I'm seeking a position where I can contribute to building scalable, production-grade systems. I want to work on challenging problems in backend architecture, system design, or full-stack development. A team that values clean code, continuous learning, and tackling complex technical challenges would be ideal.",
  },
  {
    question: "Do you have experience with system design?",
    answer:
      "Yes. In my roles at GMG Solutions and Hedge Hawk Capital, I architected systems handling high-frequency data processing, implemented Redis caching strategies that increased throughput by 40%, and optimized PostgreSQL queries reducing latency by 200ms. I understand trade-offs in scalability, consistency, and performance.",
  },
  {
    question: "Are you open to remote work or relocation?",
    answer:
      "I'm flexible with work arrangements. My recent internship at GMG Solutions was onsite, and I also completed a remote internship at Hedge Hawk Capital. I'm comfortable with both environments and can adapt to your team's needs. Relocation is possible depending on the opportunity.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up" })
  const listRef = useScrollReveal<HTMLDivElement>({ animation: "fade-up", staggerChildren: true, threshold: 0.05, staggerDelay: 60 })

  return (
    <section id="faq" className="noise-bg relative border-b border-border py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">// SECTION: FAQ</span>
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <span>009</span>
          </div>
          <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked<br />
            <span className="text-primary">questions.</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div ref={listRef} className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-border last:border-b">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground sm:text-base">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: openIndex === i ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="pb-5 pl-10">
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
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
