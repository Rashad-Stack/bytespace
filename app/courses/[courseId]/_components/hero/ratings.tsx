import Icon from "@/components/shared/icon"

export default function Ratings() {
  return (
    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
      <p className="label-m sm:label-l text-neutral-50">
        by <span className="text-secondary">purepearl studio</span>
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/bar-chart-blue.svg" />
          <span className="text-neutral-950">Intermediate</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/star-blue.svg" />
          <span className="text-neutral-950">4.8 (172 reviews)</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/user-blue.svg" />
          <span className="text-neutral-950">199 Students</span>
        </div>
      </div>
    </div>
  )
}
