"use client"

import { memo, useRef, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const particles = [
  { left: "10%", top: "20%", delay: 0 },
  { left: "25%", top: "60%", delay: 0.5 },
  { left: "40%", top: "30%", delay: 1 },
  { left: "55%", top: "70%", delay: 1.5 },
  { left: "70%", top: "25%", delay: 0.3 },
  { left: "85%", top: "55%", delay: 0.8 },
  { left: "15%", top: "80%", delay: 1.2 },
  { left: "90%", top: "15%", delay: 0.7 },
]

function CTAComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const particleAnimation = useMemo(() => ({
    opacity: [0.3, 0.8, 0.3],
    scale: [1, 1.3, 1],
  }), [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-secondary/50 rounded-full will-change-transform"
            style={{ left: particle.left, top: particle.top }}
            animate={particleAnimation}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Transformação Digital
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Pronto para levar seu negócio para o{" "}
            <span className="text-secondary">mundo digital</span>?
          </h2>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Não deixe seu negócio ficar para trás. Entre em contato agora e
            descubra como podemos transformar sua presença online.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-7 rounded-full group shadow-xl shadow-secondary/25"
            >
              <a href="#servicos">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-7 rounded-full"
            >
              <a
                href="https://wa.me/+5581998953122"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Orçamento gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Sem compromisso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export const CTA = memo(CTAComponent)
