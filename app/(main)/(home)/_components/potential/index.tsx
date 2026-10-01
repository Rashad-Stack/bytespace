"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import { motion } from "motion/react"
import Ornaments from "./ornaments"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export default function Potential() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-700 grid-background">
      <motion.div
        className="relative z-10 container flex max-w-6xl flex-col items-center space-y-6 px-[clamp(1.25rem,6vw,7.625rem)] py-12 md:space-y-8 md:md:px-[revert] md:py-16 lg:space-y-10 lg:py-21.25"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px 0px" }}
      >
        <motion.div className="mx-auto max-w-2xl" variants={item}>
          <h1
            className="text-center heading-m text-neutral-50"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 44px)",
              lineHeight: "120%",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h1>
        </motion.div>

        <motion.p
          className="text-center body-l text-neutral-50"
          style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          variants={item}
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        <motion.div variants={item}>
          <Button variant="secondary">Join as Creator</Button>
        </motion.div>
      </motion.div>

      <Ornaments />
    </section>
  )
}
