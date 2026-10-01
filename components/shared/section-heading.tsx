"use client"

import { cn } from "cn"
import { motion } from "motion/react"

interface SectionHeadingProps {
  title: string
  description: string
  maxWidth?: string
}

export default function SectionHeading({
  title,
  description,
  maxWidth = "max-w-242.75",
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto space-y-3 text-center sm:space-y-4", maxWidth)}>
      <motion.h2
        className="heading-xs sm:heading-s"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px 0px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="body-m text-neutral-400 sm:body-l"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px 0px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {description}
      </motion.p>
    </div>
  )
}
