"use client"

import { memo, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" },
]

function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])
  
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
       isScrolled
      ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg border-b border-white/10"
      : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
          <Image
         src="/logo-devup.png"
         alt="Digital DevUp"
         /* 1. Aumentamos o width para 250 (ou o valor que preferires) */
          width={250} 
          height={80}
          /* 2. Removemos h-10 e usamos w-40 até w-64 para controlar o tamanho visual */
           className="w-48 h-auto object-contain" 
           priority
        />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
               className="text-white/90 hover:text-secondary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
            className="lg:hidden p-2 text-white"
            >
              <a
                href="https://wa.me/+5581998953122"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
              >
                <a
                  href="https://wa.me/+5581998953122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export const Header = memo(HeaderComponent)
