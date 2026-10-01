"use client"

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import ProductCard from "@/components/shared/product-card"
import CATEGORIES from "@/data/categories.json"
import COURSES from "@/data/courses.json"
import { useState } from "react"

const INITIAL_VISIBLE = 18

export default function CategoryTab() {
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, INITIAL_VISIBLE)

  return (
    <div className="my-6 sm:my-8 md:my-10.5 w-full">
      <Tabs defaultValue={CATEGORIES[0].value}>
        <TabsList className="mx-auto mb-8 sm:mb-12 md:mb-16 xl:mb-19.25 flex max-w-271.5 flex-wrap justify-center gap-2 sm:gap-3">
          {visibleCategories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.name}
            </TabsTrigger>
          ))}
          <button
            type="button"
            className="px-4 py-3 label-m whitespace-nowrap text-blue-700 transition-colors hover:text-blue-900 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-expanded={showAll}
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "- Less" : "+ More"}
          </button>
        </TabsList>

        <TabsContents>
          {CATEGORIES.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {COURSES.map((course) => (
                  <ProductCard key={course.href} payload={course} />
                ))}
              </div>
            </TabsContent>
          ))}
        </TabsContents>
      </Tabs>
    </div>
  )
}
