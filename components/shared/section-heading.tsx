import { cn } from "cn"

interface SectionHeadingProps {
  title: string
  description: string
  maxWidth?: string
}

export default function SectionHeading({
  title,
  description,
  maxWidth = "max-w-242.75",
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto space-y-3 text-center sm:space-y-4", maxWidth)}>
      <h2 className="heading-xs sm:heading-s">{title}</h2>
      <p className="body-m text-neutral-400 sm:body-l">{description}</p>
    </div>
  )
}
