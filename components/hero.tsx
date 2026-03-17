"use client"

import { memo, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Code, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const FloatingElements = lazy(() => import("@/components/floating-elements").then(mod => ({ default: mod.FloatingElements })))

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "100%", label: "Satisfação" },
  { value: "24h", label: "Suporte" },
  { value: "5", label: "Avaliacao", suffix: "estrelas" },
]

const techBadges = [
  { icon: Code, label: "Next.js 16" },
  { icon: Zap, label: "Performance A+" },
  { icon: Shield, label: "SSL Gratis" },
]

function HeroComponent() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-6">
              Agencia Digital de Alta Performance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          >
            Transforme seu negocio com um{" "}
            <span className="text-secondary">site profissional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Criamos sites modernos, rapidos e otimizados para conversao.
            Tecnologia de ponta para o seu negocio crescer no digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
              >
                <badge.icon className="w-4 h-4 text-secondary" />
                {badge.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full group shadow-lg shadow-secondary/25"
            >
              <a href="#servicos">
                Ver Servicos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6 rounded-full"
            >
              <a
                href="https://wa.me/+5581998953122?text=Ola! Gostaria de saber mais sobre os servicos da Digital DevUp."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                  {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}

export const Hero = memo(HeroComponent)
