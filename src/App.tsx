import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/landing/navbar'
import { HeroSection } from '@/components/landing/hero-section'
import { TechTicker } from '@/components/landing/tech-ticker'
import { FeaturesSection } from '@/components/landing/features-section'
import { ExperienceSection } from '@/components/landing/experience-section'
import { SkillsSection } from '@/components/landing/skills-section'
import { EducationSection } from '@/components/landing/education-section'
import { CertificationsSection } from '@/components/landing/certifications-section'
import { ReviewOutputSection } from '@/components/landing/review-output-section'
import { ChatbotSection } from '@/components/landing/chatbot-section'
import { PricingSection } from '@/components/landing/pricing-section'
import { FaqSection } from '@/components/landing/faq-section'
import { CtaSection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <TechTicker />
        <FeaturesSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ReviewOutputSection />
        <ChatbotSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
