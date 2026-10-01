"use client"

import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export default function LessonsTab() {
  const { lesson } = DETAILS
  const progressRef = useRef<HTMLDivElement>(null)
  const progressInView = useInView(progressRef, { once: true })

  return (
    <>
      <motion.h4
        className="heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Explore the Modules
      </motion.h4>
      <motion.p
        className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08, ease }}
      >
        {lesson.description}
      </motion.p>

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Lesson List
      </motion.h4>
      <div className="mt-6 space-y-4">
        {lesson.lesson_list.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3.25"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px 0px" }}
            transition={{ duration: 0.4, delay: index * 0.07, ease }}
          >
            <div className="w-fit shrink-0 rounded-[24px] bg-secondary p-3 sm:p-4">
              <Icon src="/icons/video-cam.svg" wrapper="span" />
            </div>
            <div>
              <h2 className="label-m text-neutral-950">{item.title}</h2>
              <p className="body-m text-neutral-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Lesson Content
      </motion.h4>
      <motion.p
        className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08, ease }}
      >
        {lesson.content}
      </motion.p>

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Lesson Progress Tracking
      </motion.h4>
      <motion.p
        className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08, ease }}
      >
        {lesson.tracking}
      </motion.p>

      <motion.div
        ref={progressRef}
        className="mt-6 w-full space-y-2 rounded-[16px] border p-4"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        <p className="label-s text-neutral-950">Learning Progress</p>
        <h6 className="heading-s text-neutral-950">{lesson.progress}%</h6>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
          <motion.div
            className="h-full rounded-full bg-secondary-400"
            initial={{ width: 0 }}
            animate={progressInView ? { width: `${lesson.progress}%` } : { width: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          />
        </div>
      </motion.div>
    </>
  )
}
