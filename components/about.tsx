"use client"

import { memo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Rocket, Target, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Inovação",
    description: "Utilizamos as tecnologias mais avançadas do mercado",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Sites otimizados para conversão e performance",
  },
  {
    icon: Lightbulb,
    title: "Criatividade",
    description: "Design exclusivo e personalizado para cada cliente",
  },
  {
    icon: Users,
    title: "Suporte",
    description: "Acompanhamento completo em todas as etapas",
  },
]

function AboutComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="sobre" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Somos a <span className="text-gradient">Digital DevUp</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Digital DevUp é uma agência digital fundada em 2026, especializada em
              criar experiências digitais excepcionais. Ajudamos empresas a
              construir uma presença digital forte através de sites profissionais
              e soluções digitais modernas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nosso foco é em inovação, qualidade de design e transformação
              digital, entregando projetos que realmente fazem a diferença no
              mercado.
            </p>

            <div className="flex items-center gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1rCpyUCn7x1dzwfSJEOWdvKvr5I711.png"
                alt="DevUp Digital"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const About = memo(AboutComponent)
