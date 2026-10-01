import { Button } from "@/components/animate-ui/components/buttons/button"
import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"

export default function Heading() {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
      <div className="space-y-2">
        <h1 className="heading-xs sm:heading-s text-neutral-50">
          {DETAILS.hero.title}
        </h1>
        <p className="body-m sm:heading-xs text-neutral-50 font-normal sm:font-semibold">
          {DETAILS.hero.subtitle}
        </p>
      </div>

      <Button variant="secondary" className="shrink-0">
        <Icon src="/icons/share.svg" />
        <span>Share</span>
      </Button>
    </div>
  )
}
