"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

interface SlideInProps {
  children: React.ReactNode
  direction?: "left" | "right"
  delay?: number
  className?: string
}

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" })

  const x = direction === "left" ? -48 : 48

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
