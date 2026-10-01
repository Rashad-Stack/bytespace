"use client"

import { motion } from "motion/react"
import Search from "@/components/shared/search"

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

export default function HeroContent() {
  return (
    <motion.div
      className="mx-auto mt-4 max-w-233.75 space-y-4 md:mt-12.25 md:space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-center heading-l text-white"
        style={{
          fontSize: "clamp(1.75rem, 5.5vw, 72px)",
          lineHeight: "120%",
          fontWeight: 600,
          fontFamily: "var(--font-heading)",
        }}
        variants={item}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Get Access to Hundreds Courses Available
      </motion.h1>

      <motion.p
        className="text-center body-l text-white/80"
        style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
        variants={item}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </motion.p>

      <motion.div
        variants={item}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Search variant="hero" />
      </motion.div>
    </motion.div>
  )
}
