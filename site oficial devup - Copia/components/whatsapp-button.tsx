"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

function WhatsAppButtonComponent() {
  return (
    <motion.a
      href="https://wa.me/+5581998953122?text=Ola! Gostaria de mais informacoes sobre os servicos da Digital DevUp."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      
      <span className="absolute -top-10 right-0 px-3 py-1.5 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg hidden md:block">
        Fale conosco!
      </span>

      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
    </motion.a>
  )
}

export const WhatsAppButton = memo(WhatsAppButtonComponent)
