"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" },
]

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/digitaldevup",
    label: "Instagram",
  },
  {
    icon: Phone,
    href: "https://wa.me/+5581998953122",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:devup@gmail.com",
    label: "Email",
  },
]

const currentYear = new Date().getFullYear()

function FooterComponent() {

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-PkiOzHsh9lySzVN4KQAIr7v0TAOvxZ.png"
                alt="Digital DevUp Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="font-bold text-xl text-white">
                DevUp Digital
              </span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transformamos negócios através de sites profissionais de alta
              performance e design moderno.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/70">Landing Page</span>
                <span className="text-secondary ml-2 text-sm">R$ 500</span>
              </li>
              <li>
                <span className="text-white/70">Site Institucional</span>
                <span className="text-secondary ml-2 text-sm">R$ 920</span>
              </li>
              <li>
                <span className="text-white/70">E-commerce</span>
                <span className="text-secondary ml-2 text-sm">R$ 3.200</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="https://wa.me/+5581998953122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  +55 81 99895-3122
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="https://instagram.com/digitaldevup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  @digitaldevup
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:devup@gmail.com"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  devup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} Digital DevUp — Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
