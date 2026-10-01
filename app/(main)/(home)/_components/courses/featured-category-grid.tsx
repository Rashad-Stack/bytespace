"use client"

import { motion } from "motion/react"
import Icon from "@/components/shared/icon"

interface Category {
  value: string
  name: string
  icon?: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export default function FeaturedCategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <motion.div
      className="mt-8 flex items-center justify-center gap-4 max-lg:flex-wrap sm:mt-12 sm:gap-6 md:mt-16 md:gap-8 lg:gap-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px 0px" }}
    >
      {categories.map((category) => (
        <motion.div
          key={category.value}
          variants={item}
          whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.18, ease: "easeOut" } }}
          className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-[20px] border sm:h-41.75 sm:w-41.75 sm:gap-4 sm:rounded-[24px]"
        >
          <span className="rounded-full bg-secondary p-2.5 sm:p-3">
            <Icon src={category.icon!} wrapper="span" />
          </span>
          <h3 className="sm:label-xl px-2 text-center label-m">{category.name}</h3>
        </motion.div>
      ))}
    </motion.div>
  )
}
