"use client"

import { motion } from "motion/react"
import Image from "next/image"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

export default function Testimonial() {
  return (
    <section
      style={{ backgroundImage: "url('/images/home/testimonial-bg.png')" }}
      className="bg-cover bg-no-repeat pt-10 pb-8 md:pt-18.5 md:pb-14.25"
    >
      <div className="container">
        <motion.div
          className="flex w-full flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-10.75"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          <motion.h2
            className="mx-auto max-w-144.25 text-center heading-m md:mx-0 md:text-left"
            style={{ fontSize: "clamp(1.5rem, 4vw, 44px)" }}
            variants={item}
          >
            Discover What Our Community Is Saying
          </motion.h2>

          <motion.p
            className="mx-auto max-w-145 text-center body-l text-neutral-700 md:mx-0 md:text-left"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
            variants={item}
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-18"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          <div className="grid grid-cols-1 gap-10.25 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="space-y-6 rounded-[24px] bg-white p-6"
                variants={item}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-full"
                />
                <div className="">
                  <h3 className="heading-xs">{testimonial.name}</h3>
                  <p className="body-l text-primary">{testimonial.title}</p>
                </div>
                <p className="body-l text-neutral-700">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah M.",
    title: "Enthusiastic Learner",
    image: "/images/home/author-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    title: "Lifelong Learner",
    image: "/images/home/author-3.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    title: "Inspired Creator",
    image: "/images/home/author-2.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]
