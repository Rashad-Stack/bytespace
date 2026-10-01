import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"

export default function Ratings() {
  const { instructor, level, rating, reviewCount, studentCount } = DETAILS.hero

  return (
    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
      <p className="label-m sm:label-l text-neutral-50">
        by <span className="text-secondary">{instructor.name.toLowerCase()}</span>
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/bar-chart-blue.svg" />
          <span className="text-neutral-950">{level}</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/star-blue.svg" />
          <span className="text-neutral-950">{rating} ({reviewCount} reviews)</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium">
          <Icon src="/icons/user-blue.svg" />
          <span className="text-neutral-950">{studentCount} Students</span>
        </div>
      </div>
    </div>
  )
}
