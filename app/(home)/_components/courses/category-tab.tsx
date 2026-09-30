"use client"

import { useState } from "react"

import { Button } from "@/components/animate-ui/components/buttons/button"
import useUrlSearchParams from "@/components/Modal/use-url-search-params"
import { cn } from "cn"
import CATEGORIES from "./categories.json"

export default function CategoryTab() {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const { setParams, getParams } = useUrlSearchParams()

  const selectedCategory = getParams("category") || "all"

  const visibleCategories = showAllCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 18)

  return (
    <div className="my-10.5 w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {visibleCategories.map((category) => (
          <Button
            key={category.value}
            onClick={() =>
              setParams([
                {
                  key: "category",
                  value: category.value,
                },
              ])
            }
            value={category.value}
            className={cn(
              "cursor-pointer bg-neutral-50 text-neutral-700 hover:bg-secondary hover:text-neutral-950",
              {
                "bg-secondary text-neutral-950":
                  selectedCategory === category.value,
              }
            )}
          >
            {category.name}
          </Button>
        ))}

        <button
          type="button"
          className="px-1 py-3 label-m whitespace-nowrap text-blue-700 transition-colors hover:text-blue-900 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          aria-expanded={showAllCategories}
          onClick={() => setShowAllCategories((isExpanded) => !isExpanded)}
        >
          {showAllCategories ? "- Less" : "+ More"}
        </button>
      </div>
    </div>
  )
}
