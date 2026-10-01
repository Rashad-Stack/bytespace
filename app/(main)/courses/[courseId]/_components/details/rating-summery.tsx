"use client"

import StarRating from "@/components/shared/star-rating"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

type RatingData = {
  averageRating: number
  breakdown: { stars: number; count: number }[]
}

export default function RatingSummary({ ratingData }: { ratingData: RatingData }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px 0px" })

  const totalReviews = ratingData.breakdown.reduce((acc, curr) => acc + curr.count, 0)

  return (
    <motion.div
      ref={ref}
      className="mt-6 w-full rounded-[20px] sm:rounded-[24px] border p-5 sm:p-8 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.45, ease }}
    >
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <motion.div
          className="flex flex-col items-center rounded-[8px] bg-secondary-400 p-6 sm:p-10 w-full sm:w-auto"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          <span className="label-s text-neutral-950">Ratings</span>
          <span className="heading-s font-heading text-neutral-950">
            {ratingData.averageRating.toFixed(1)}
          </span>
        </motion.div>

        <div className="flex w-full flex-1 flex-col gap-1">
          {ratingData.breakdown.map((item, i) => {
            const percentage = (item.count / totalReviews) * 100
            return (
              <div key={item.stars} className="flex items-center gap-4 text-sm">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full rounded-full bg-secondary-400"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease }}
                  />
                </div>
                <StarRating />
                <span className="w-5 text-right body-m text-neutral-700">{item.count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
