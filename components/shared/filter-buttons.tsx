import { Button } from "../animate-ui/components/buttons/button"
import Icon from "./icon"

export default function FilterButtons() {
  return (
    <div className="flex w-full flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <Button variant="outline" size="sm">
          <Icon src="/icons/filter.svg" className="size-6 text-neutral-700" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Icon src="/icons/level.svg" className="size-6 text-neutral-700" />
          Level
        </Button>
        <Button variant="outline" size="sm">
          <Icon src="/icons/category.svg" className="size-6 text-neutral-700" />
          Category
        </Button>
      </div>
      <div>
        <Button variant="outline" size="sm" className="w-full sm:w-auto justify-center">
          <Icon src="/icons/relevant.svg" className="size-6 text-neutral-700" />
          Most relevant
        </Button>
      </div>
    </div>
  )
}
