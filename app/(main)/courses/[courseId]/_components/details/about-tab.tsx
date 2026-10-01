import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"
import Image from "next/image"

export default function AboutTab() {
  const { about } = DETAILS

  return (
    <>
      <h4 className="heading-xs text-neutral-950">Description</h4>
      <p className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6">
        {about.description}
      </p>

      <h4 className="mt-6 heading-xs text-neutral-950">Sneak Peak</h4>
      <div className="flex flex-wrap items-center gap-4 pt-6 md:flex-nowrap">
        {about.sneakPeak.map((image, index) => (
          <div
            key={index}
            className="relative h-31.25 w-41.75 shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={image}
              alt={`Sneak Peak ${index + 1}`}
              width={167}
              height={125}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <h4 className="mt-6 heading-xs text-neutral-950">Key Points</h4>
      <ul className="mt-6 list-inside space-y-2 text-neutral-700">
        {about.keyPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2 body-m sm:items-center">
            <Icon src="/icons/checked-fill.svg" className="mt-0.5 shrink-0 sm:mt-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
