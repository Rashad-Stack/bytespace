"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import FilterButtons from "@/components/shared/filter-buttons"
import ProductCardAnimated from "@/components/shared/product-card-animated"
import { TProductCardProps } from "@/types/product"
import { motion } from "motion/react"
import Image from "next/image"

interface Creator {
  id: string
  name: string
  designation: string
  bio: string[]
  image: string
  products: number
  followers: number
}

interface Props {
  creator: Creator
  courses: TProductCardProps[]
}

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export default function CreatorsClient({ creator, courses }: Props) {
  return (
    <main>
      {/* ── Creator hero ── */}
      <section className="h-auto pb-10 lg:h-148 lg:pb-0 bg-primary-800 grid-background">
        <motion.div
          className="container w-full pt-24 sm:pt-28 md:pt-32 lg:pt-43 text-white"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {/* Avatar + name row */}
          <motion.div className="flex items-center gap-4 sm:gap-6" variants={heroItem}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease }}
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={96}
                height={96}
                className="size-16 sm:size-20 lg:size-24 shrink-0"
              />
            </motion.div>

            <div>
              <div className="flex flex-wrap items-start gap-2">
                <h3 className="heading-s">{creator.name}</h3>
                <p className="w-fit rounded-full bg-secondary-400 px-4 sm:px-6 py-2 label-m text-black">
                  Creator
                </p>
              </div>
              <p className="mt-2 body-l">{creator.designation}</p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div className="mt-6 lg:mt-10" variants={heroItem}>
            {creator.bio.map((paragraph, index) => (
              <p key={index} className="body-l text-neutral-50">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats + follow */}
          <motion.div
            className="mt-6 lg:mt-10 flex flex-wrap items-center gap-3 sm:gap-6"
            variants={heroItem}
          >
            <div className="flex items-center gap-3 sm:gap-6">
              <Button
                type="button"
                size="lg"
                className="bg-white text-neutral-800 hover:bg-neutral-50"
              >
                <span className="text-primary-600">{creator.products}</span>
                Products
              </Button>
              <Button
                type="button"
                size="lg"
                className="bg-white text-neutral-800 hover:bg-neutral-50"
              >
                <span className="text-primary-600">{creator.followers}</span>
                Followers
              </Button>
            </div>

            <Button
              type="button"
              size="lg"
              className="ml-auto bg-secondary-400 text-neutral-950 hover:bg-secondary-300"
            >
              Follow
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Course grid ── */}
      <section className="container pt-15.5 pb-15.25">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ duration: 0.4, ease }}
        >
          <FilterButtons />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <ProductCardAnimated
              key={`${course.href}-${index}`}
              payload={course}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
