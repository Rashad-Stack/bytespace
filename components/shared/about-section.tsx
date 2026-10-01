import { cn } from "cn"
import Image from "next/image"

interface AboutSectionProps {
  heading: string
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
}

export default function AboutSection({
  heading,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: AboutSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-8 sm:gap-12 lg:flex-row lg:gap-15.75",
        {
          "lg:flex-row-reverse": reverse,
        }
      )}
    >
      <div className="w-full max-w-143.5 space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="heading-s sm:heading-m">{heading}</h2>
        <div className="body-m text-neutral-700 sm:body-l">{description}</div>
        {children}
      </div>

      <div className="w-full max-w-144.25">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={577}
          height={540}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}
