"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-60px 0px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
