"use client"

import { memo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Zap, Headphones, Wallet } from "lucide-react"

const differentials = [
  {
    icon: Palette,
    title: "Design Moderno",
    description:
      "Criamos designs únicos e contemporâneos que destacam sua marca no mercado digital.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description:
      "Processos otimizados que garantem a entrega do seu projeto no menor tempo possível.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Headphones,
    title: "Suporte Completo",
    description:
      "Acompanhamento técnico durante e após a entrega para garantir o sucesso do seu site.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wallet,
    title: "Preço Acessível",
    description:
      "Soluções de alta qualidade com preços justos e condições de pagamento flexíveis.",
    color: "from-blue-500 to-cyan-600",
  },
]

function DifferentialsComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Por que escolher a <span className="text-secondary">Digital DevUp</span>?
          </h2>
          <p className="text-white/70 text-lg">
            Combinamos tecnologia de ponta com atendimento personalizado para entregar resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-3xl glass hover:bg-white/15 transition-all duration-500 h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Differentials = memo(DifferentialsComponent)
