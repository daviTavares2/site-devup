"use client"

import { memo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react"

const problems = [
  "Seu negócio não aparece no Google",
  "Clientes não confiam em empresas sem site",
  "Perde vendas para concorrentes digitais",
  "Imagem amadora prejudica sua marca",
]

const solutions = [
  "Site otimizado para aparecer nas buscas",
  "Presença profissional que gera credibilidade",
  "Canal de vendas aberto 24 horas",
  "Design premium que valoriza sua marca",
]

function ProblemSolutionComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Problema & Solução
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sua empresa ainda está <span className="text-gradient">invisível online</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Muitas empresas perdem oportunidades todos os dias por não terem uma presença digital profissional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-lg" />
            <div className="relative bg-card rounded-3xl p-8 border border-red-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Sem Site Profissional</h3>
              </div>

              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-lg" />
            <div className="relative bg-card rounded-3xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Com Digital DevUp</h3>
              </div>

              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/+5581998953122?text=Olá! Quero transformar a presença digital do meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
          >
            Quero meu site profissional
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export const ProblemSolution = memo(ProblemSolutionComponent)
