import { Button } from "@/components/animate-ui/components/buttons/button"
import Icon from "@/components/shared/icon"

export default function Heading() {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
      <div className="space-y-2">
        <h1 className="heading-xs sm:heading-s text-neutral-50">
          Build Digital Asset: A Comprehensive Guide
        </h1>
        <p className="body-m sm:heading-xs text-neutral-50 font-normal sm:font-semibold">
          Unlock the Power of Digital Creation with Expert Guidance
        </p>
      </div>

      <Button variant="secondary" className="shrink-0">
        <Icon src="/icons/share.svg" />
        <span>Share</span>
      </Button>
    </div>
  )
}
