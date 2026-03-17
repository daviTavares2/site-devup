"use client"

import { memo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Building2, ShoppingCart, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Landing Page",
    price: "R$ 500",
    description: "Página única de alta conversão, perfeita para campanhas e lançamentos.",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "Integração com WhatsApp",
      "Formulário de contato",
      "Hospedagem inclusa (1 ano)",
    ],
    popular: false,
    whatsappMessage: "Olá! Tenho interesse na Landing Page por R$500. Gostaria de mais informações.",
  },
  {
    icon: Building2,
    title: "Site Institucional",
    price: "R$ 920",
    description: "Site completo para apresentar sua empresa com profissionalismo.",
    features: [
      "Até 5 páginas",
      "Design personalizado",
      "SEO otimizado",
      "Painel administrativo",
      "Hospedagem inclusa (1 ano)",
      "Suporte por 30 dias",
    ],
    popular: true,
    whatsappMessage: "Olá! Tenho interesse no Site Institucional por R$920. Gostaria de mais informações.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    price: "R$ 3.200",
    description: "Loja virtual completa para vender seus produtos online.",
    features: [
      "Catálogo ilimitado",
      "Pagamentos integrados",
      "Gestão de estoque",
      "Painel completo",
      "Hospedagem inclusa (1 ano)",
      "Suporte por 60 dias",
      "Treinamento incluso",
    ],
    popular: false,
    whatsappMessage: "Olá! Tenho interesse no E-commerce por R$3.200. Gostaria de mais informações.",
  },
]

function ServicesComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluções digitais para <span className="text-gradient">cada necessidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje mesmo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group rounded-3xl p-8 transition-all duration-500 ${
                service.popular
                  ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl shadow-primary/25 scale-105"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  Mais Popular
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.popular
                    ? "bg-white/20"
                    : "bg-primary/10 group-hover:bg-primary group-hover:scale-110"
                } transition-all duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.popular
                      ? "text-white"
                      : "text-primary group-hover:text-primary-foreground"
                  } transition-colors`}
                />
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${
                  service.popular ? "text-white" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <div className="mb-4">
                <span
                  className={`text-4xl font-bold ${
                    service.popular ? "text-white" : "text-primary"
                  }`}
                >
                  {service.price}
                </span>
              </div>

              <p
                className={`mb-6 ${
                  service.popular ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        service.popular ? "bg-white/20" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          service.popular ? "text-white" : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        service.popular ? "text-white/90" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full py-6 text-base font-medium group/btn ${
                  service.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <a
                  href={`https://wa.me/+5581998953122?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Services = memo(ServicesComponent)
