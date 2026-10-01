import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import Icon from "@/components/shared/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DETAILS from "@/data/course-details.json"
import Image from "next/image"
import RatingSummary from "./rating-summery"

export default function Details() {
  return (
    <section>
      <div className="container py-8 sm:py-12 md:py-15.5">
        <div className="w-full max-w-180">
          <Tabs defaultValue={DETAILS.tabs[0].value}>
            <div className="overflow-x-auto pb-1">
              <TabsList>
                {DETAILS.tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContents className="mt-6 sm:mt-10">
              <TabsContent value="about">
                <h4 className="heading-xs text-neutral-950">Description</h4>
                <p className="mt-4 sm:mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.about.description}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">Sneak Peak</h4>
                <div className="flex flex-wrap md:flex-nowrap items-center gap-4 pt-6">
                  {DETAILS.about.sneakPeak.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[125px] w-[167px] shrink-0 overflow-hidden rounded-xl"
                    >
                      <Image
                        src={image}
                        alt={`Sneak Peak ${index + 1}`}
                        width={167}
                        height={125}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h4 className="mt-6 heading-xs text-neutral-950">Key Points</h4>
                <ul className="mt-6 list-inside space-y-2 text-neutral-700">
                  {DETAILS.about.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start sm:items-center gap-2 body-m">
                      <Icon src="/icons/checked-fill.svg" className="shrink-0 mt-0.5 sm:mt-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="lessons">
                <h4 className="heading-xs text-neutral-950">
                  Explore the Modules
                </h4>
                <p className="mt-4 sm:mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.description}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson List
                </h4>
                <div className="mt-6 space-y-4">
                  {DETAILS.lesson.lesson_list.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-3.25">
                      <div className="w-fit rounded-[24px] bg-secondary p-3 sm:p-4 shrink-0">
                        <Icon src="/icons/video-cam.svg" wrapper="span" />
                      </div>
                      <div>
                        <h2 className="label-m text-neutral-950">
                          {lesson.title}
                        </h2>
                        <p className="body-m text-neutral-700">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson Content
                </h4>
                <p className="mt-4 sm:mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.content}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson Progress Tracking
                </h4>
                <p className="mt-4 sm:mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.tracking}
                </p>

                <div className="mt-6 w-full space-y-2 rounded-[16px] border p-4">
                  <p className="label-s text-neutral-950">Learning Progress</p>
                  <h6 className="heading-s text-neutral-950">
                    {DETAILS.lesson.progress}%
                  </h6>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-secondary-400"
                      style={{ width: `${DETAILS.lesson.progress}%` }}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h4 className="heading-xs text-neutral-950">
                  {DETAILS.review.sectionTitle}
                </h4>
                <p className="mt-4 sm:mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.review.sectionDescription}
                </p>

                <RatingSummary ratingData={DETAILS.review.ratingSummary} />

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Individual Reviews:
                </h4>

                <Tabs
                  defaultValue={DETAILS.review.rating_tabs[0].value}
                  className="mt-6"
                >
                  <div className="overflow-x-auto pb-1">
                    <TabsList>
                      {DETAILS.review.rating_tabs.map((rating, index) => (
                        <TabsTrigger key={rating.value} value={rating.value}>
                          {index !== 0 && <Icon src="/icons/rating-star.svg" />}
                          <span>{rating.label}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <TabsContents
                    className="mt-6 sm:mt-10"
                    defaultValue={DETAILS.review.rating_tabs[0].value}
                  >
                    {DETAILS.review.rating_tabs.map((rating) => (
                      <TabsContent key={rating.value} value={rating.value}>
                        {DETAILS.review.individualReviews.map(
                          (review, index) => (
                            <div
                              key={index}
                              className="mt-4 sm:mt-6 w-full rounded-[20px] sm:rounded-[24px] border p-5 sm:p-8 md:p-10"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="size-11 sm:size-13">
                                    <AvatarImage src="/images/course-details/profile.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>

                                  <div>
                                    <p className="label-m sm:label-l text-neutral-950">
                                      {review.name}
                                    </p>
                                    <p className="body-s sm:body-m text-neutral-700">
                                      {review.role}
                                    </p>
                                  </div>
                                </div>

                                <p className="body-s text-neutral-500 sm:text-neutral-950">{review.timeAgo}</p>
                              </div>

                              <div className="mt-4 sm:mt-6 flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Icon src="/icons/rating-star.svg" key={i} />
                                ))}
                              </div>

                              <p className="mt-4 sm:mt-6 body-m text-neutral-700">
                                {review.review}
                              </p>
                            </div>
                          )
                        )}
                      </TabsContent>
                    ))}
                  </TabsContents>
                </Tabs>
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
