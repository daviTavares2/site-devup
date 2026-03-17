"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"

const floatingOrbs = [
  { left: "10%", top: "20%", color: "rgba(197, 157, 255, 0.12)", delay: 0 },
  { left: "80%", top: "15%", color: "rgba(56, 23, 128, 0.15)", delay: 1 },
  { left: "25%", top: "70%", color: "rgba(197, 157, 255, 0.1)", delay: 2 },
  { left: "70%", top: "60%", color: "rgba(56, 23, 128, 0.12)", delay: 0.5 },
]

const particles = [
  { left: "25%", top: "25%", size: "w-2 h-2", duration: 3 },
  { left: "75%", top: "30%", size: "w-3 h-3", duration: 4 },
  { left: "60%", top: "70%", size: "w-1.5 h-1.5", duration: 3.5 },
]

function FloatingElementsComponent() {
  const orbAnimation = useMemo(() => ({
    x: [0, 20, -15, 0],
    y: [0, -20, 15, 0],
  }), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full will-change-transform"
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.left,
            top: orb.top,
          }}
          animate={orbAnimation}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: orb.delay,
          }}
        />
      ))}

      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute ${particle.size} bg-secondary/60 rounded-full will-change-transform`}
          style={{ left: particle.left, top: particle.top }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(197, 157, 255, 0.5)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export const FloatingElements = memo(FloatingElementsComponent)
