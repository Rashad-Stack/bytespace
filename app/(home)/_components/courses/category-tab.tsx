"use client"

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import { useState } from "react"

import ProductCard from "@/components/shared/product-card"
import CATEGORIES from "@/data/categories.json"
import COURSES from "@/data/courses.json"

export default function CategoryTab() {
  const [showAllCategories, setShowAllCategories] = useState(false)

  const visibleCategories = showAllCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 18)

  return (
    <div className="my-6 sm:my-8 md:my-10.5 w-full">
      <Tabs defaultValue={CATEGORIES[0].value}>
        <TabsList className="mx-auto mb-8 sm:mb-12 md:mb-16 xl:mb-19.25 flex w-full max-w-271.5 flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {visibleCategories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.name}
            </TabsTrigger>
          ))}
          <button
            type="button"
            className="px-1 py-3 label-m whitespace-nowrap text-blue-700 transition-colors hover:text-blue-900 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-expanded={showAllCategories}
            onClick={() => setShowAllCategories((isExpanded) => !isExpanded)}
          >
            {showAllCategories ? "- Less" : "+ More"}
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
