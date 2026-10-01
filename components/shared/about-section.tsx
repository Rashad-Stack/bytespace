"use client"

import { cn } from "cn"
import { motion } from "motion/react"
import Image from "next/image"

interface AboutSectionProps {
  heading: string
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
}

export default function AboutSection({
  heading,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: AboutSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-8 sm:gap-12 lg:flex-row lg:gap-15.75",
        { "lg:flex-row-reverse": reverse }
      )}
    >
      <motion.div
        className="w-full max-w-143.5 space-y-6 sm:space-y-8 lg:space-y-10"
        initial={{ opacity: 0, x: reverse ? 48 : -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="heading-s sm:heading-m">{heading}</h2>
        <div className="body-m text-neutral-700 sm:body-l">{description}</div>
        {children}
      </motion.div>

      <motion.div
        className="w-full max-w-144.25"
        initial={{ opacity: 0, x: reverse ? -48 : 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={577}
          height={540}
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </div>
  )
}
