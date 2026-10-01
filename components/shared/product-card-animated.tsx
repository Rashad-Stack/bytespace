"use client"

import { TProductCardProps } from "@/types/product"
import { motion } from "motion/react"
import ProductCard from "./product-card"

interface Props {
  payload: TProductCardProps
  index?: number
}

export default function ProductCardAnimated({ payload, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      <ProductCard payload={payload} loading={index < 2 ? "eager" : "lazy"} />
    </motion.div>
  )
}
