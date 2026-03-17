"use client"

import { memo, useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import { MessageCircle, Instagram, Mail, MapPin, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 81 99895-3122",
    href: "https://wa.me/+5581998953122",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@digitaldevup",
    href: "https://instagram.com/digitaldevup",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "devup@gmail.com",
    href: "mailto:devup@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Brasil",
    href: "#",
  },
]

function ContactComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const message = `Ola! Meu nome e ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/+5581998953122?text=${message}`, "_blank")
  }, [formData])

  return (
    <section id="contato" className="py-24 bg-muted/30 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Vamos <span className="text-gradient">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e transforme sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informações de Contato
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-primary rounded-2xl"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                Atendimento rápido pelo WhatsApp
              </h4>
              <p className="text-white/80 mb-4">
                Prefere uma conversa mais direta? Clique no botão abaixo e fale
                conosco agora mesmo!
              </p>
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 rounded-full"
              >
                <a
                  href="https://wa.me/+5581998953122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Abrir WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-xl py-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="rounded-xl py-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="rounded-xl py-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base font-medium group"
                >
                  Enviar via WhatsApp
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const Contact = memo(ContactComponent)
