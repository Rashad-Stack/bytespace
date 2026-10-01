import { Button } from "@/components/animate-ui/components/buttons/button"
import FilterButtons from "@/components/shared/filter-buttons"
import ProductCard from "@/components/shared/product-card"
import COURSES from "@/data/courses.json"
import CREATORS from "@/data/creators.json"
import Image from "next/image"

const creator = CREATORS[0]

export default function CreatorsPage() {
  return (
    <main>
      <section className="h-auto pb-10 lg:h-148 lg:pb-0 bg-primary-800 grid-background">
        <div className="container w-full pt-24 sm:pt-28 md:pt-32 lg:pt-43 text-white">
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              src={creator.image}
              alt={creator.name}
              width={96}
              height={96}
              className="size-16 sm:size-20 lg:size-24 shrink-0"
            />

            <div>
              <div className="flex flex-wrap items-start gap-2">
                <h3 className="heading-s">{creator.name}</h3>
                <p className="w-fit rounded-full bg-secondary-400 px-4 sm:px-6 py-2 label-m text-black">
                  Creator
                </p>
              </div>
              <p className="mt-2 body-l">{creator.designation}</p>
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            {creator.bio.map((paragraph, index) => (
              <p key={index} className="body-l text-neutral-50">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex flex-wrap items-center gap-3 sm:gap-6">
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
          </div>
        </div>
      </section>

      <section className="container pt-15.5 pb-15.25">
        <FilterButtons />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((course, index) => (
            <ProductCard key={`${course.href}-${index}`} payload={course} />
          ))}
        </div>
      </section>
    </main>
  )
}
