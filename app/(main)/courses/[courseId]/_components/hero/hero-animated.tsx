"use client"

import { motion } from "motion/react"

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease },
})

export function AnimatedHeading({ children }: { children: React.ReactNode }) {
  return <motion.div {...fadeUp(0.05)}>{children}</motion.div>
}

export function AnimatedRatings({ children }: { children: React.ReactNode }) {
  return <motion.div {...fadeUp(0.18)}>{children}</motion.div>
}

export function AnimatedVideoPlayer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.3, ease }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedDetailsCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.42, ease }}
    >
      {children}
    </motion.div>
  )
}
