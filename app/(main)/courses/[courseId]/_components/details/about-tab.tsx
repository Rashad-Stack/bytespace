"use client"

import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"
import { motion } from "motion/react"
import Image from "next/image"

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export default function AboutTab() {
  const { about } = DETAILS

  return (
    <>
      <motion.h4
        className="heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Description
      </motion.h4>
      <motion.p
        className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08, ease }}
      >
        {about.description}
      </motion.p>

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Sneak Peak
      </motion.h4>
      <div className="flex flex-wrap items-center gap-4 pt-6 md:flex-nowrap">
        {about.sneakPeak.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-31.25 w-41.75 shrink-0 overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px 0px" }}
            transition={{ duration: 0.45, delay: index * 0.1, ease }}
            whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
          >
            <Image
              src={image}
              alt={`Sneak Peak ${index + 1}`}
              width={167}
              height={125}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Key Points
      </motion.h4>
      <ul className="mt-6 list-inside space-y-2 text-neutral-700">
        {about.keyPoints.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2 body-m sm:items-center"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10px 0px" }}
            transition={{ duration: 0.38, delay: index * 0.06, ease }}
          >
            <Icon src="/icons/checked-fill.svg" className="mt-0.5 shrink-0 sm:mt-0" />
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </>
  )
}
