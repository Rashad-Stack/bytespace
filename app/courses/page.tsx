import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"

import FilterButtons from "@/components/shared/filter-buttons"
import ProductCard from "@/components/shared/product-card"
import Search from "@/components/shared/search"
import CATEGORIES from "@/data/categories.json"
import COURSES from "@/data/courses.json"
import Pagination from "./_components/pagination"

export default function Courses() {
  const visibleCategories = CATEGORIES.filter((category) => category.isFeatured)

  return (
    <main>
      <section className="flex min-h-72 sm:min-h-80 md:h-90 items-center justify-center bg-primary-800 grid-background px-4 sm:px-6 md:p-12">
        <div className="mx-auto mt-16 sm:mt-20 md:mt-25 w-full max-w-156 text-center text-white">
          <h2 className="heading-xs sm:heading-s">Find Your Next Course</h2>
          <div className="mt-6 sm:mt-8 w-full max-w-156 mx-auto">
            <Search inputType="courses" />
          </div>
        </div>
      </section>

      <section className="container pt-10 sm:pt-14 md:pt-18 pb-10 sm:pb-14 md:pb-18.25">
        <FilterButtons />

        <div className="mt-6 sm:mt-8">
          <div className="w-full">
            <Tabs defaultValue={CATEGORIES[0].value}>
              <TabsList className="mx-auto mb-8 sm:mb-12 md:mb-16 xl:mb-19.25 flex w-full flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {visibleCategories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContents>
                {CATEGORIES.map((category) => (
                  <TabsContent key={category.value} value={category.value}>
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                      {COURSES.slice(0, 18).map((course, index) => (
                        <ProductCard
                          key={`${course.href}-${index}`}
                          payload={course}
                        />
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </TabsContents>
            </Tabs>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-18">
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  )
}
