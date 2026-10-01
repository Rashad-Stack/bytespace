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
    <div className={`mx-auto ${maxWidth} space-y-3 sm:space-y-4 text-center`}>
      <h2 className="heading-xs sm:heading-s">{title}</h2>
      <p className="body-m sm:body-l text-neutral-400">{description}</p>
    </div>
  )
}
