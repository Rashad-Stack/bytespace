"use client"

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import Icon from "@/components/shared/icon"
import StarRating from "@/components/shared/star-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DETAILS from "@/data/course-details.json"
import { motion } from "motion/react"
import RatingSummary from "./rating-summery"

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export default function ReviewsTab() {
  const { review } = DETAILS

  return (
    <>
      <motion.h4
        className="heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        {review.sectionTitle}
      </motion.h4>
      <motion.p
        className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08, ease }}
      >
        {review.sectionDescription}
      </motion.p>

      <RatingSummary ratingData={review.ratingSummary} />

      <motion.h4
        className="mt-6 heading-xs text-neutral-950"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, ease }}
      >
        Individual Reviews:
      </motion.h4>

      <Tabs defaultValue={review.rating_tabs[0].value} className="mt-6">
        <div className="overflow-x-auto pb-1">
          <TabsList>
            {review.rating_tabs.map((tab, index) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {index !== 0 && <Icon src="/icons/rating-star.svg" />}
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContents
          className="mt-6 sm:mt-10"
          defaultValue={review.rating_tabs[0].value}
        >
          {review.rating_tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {review.individualReviews.map((item, index) => (
                <motion.div
                  key={index}
                  className="mt-4 w-full rounded-[20px] border p-5 sm:mt-6 sm:rounded-[24px] sm:p-8 md:p-10"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px 0px" }}
                  transition={{ duration: 0.45, delay: index * 0.09, ease }}
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-11 sm:size-13">
                        <AvatarImage src="/images/course-details/profile.svg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="label-m text-neutral-950 sm:label-l">{item.name}</p>
                        <p className="body-s text-neutral-700 sm:body-m">{item.role}</p>
                      </div>
                    </div>
                    <p className="body-s text-neutral-500 sm:text-neutral-950">{item.timeAgo}</p>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <StarRating />
                  </div>

                  <p className="mt-4 body-m text-neutral-700 sm:mt-6">{item.review}</p>
                </motion.div>
              ))}
            </TabsContent>
          ))}
        </TabsContents>
      </Tabs>
    </>
  )
}
