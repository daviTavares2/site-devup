import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import("@/components/about").then(mod => ({ default: mod.About })), {
  loading: () => <SectionSkeleton />
})
const Services = dynamic(() => import("@/components/services").then(mod => ({ default: mod.Services })), {
  loading: () => <SectionSkeleton />
})
const Differentials = dynamic(() => import("@/components/differentials").then(mod => ({ default: mod.Differentials })))
const Portfolio = dynamic(() => import("@/components/portfolio").then(mod => ({ default: mod.Portfolio })), {
  loading: () => <SectionSkeleton />
})
const ProblemSolution = dynamic(() => import("@/components/problem-solution").then(mod => ({ default: mod.ProblemSolution })))
const CTA = dynamic(() => import("@/components/cta").then(mod => ({ default: mod.CTA })))
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <SectionSkeleton />
})
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })))

function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Portfolio />
      <ProblemSolution />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
