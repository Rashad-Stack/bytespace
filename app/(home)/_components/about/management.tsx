import Icon from "@/components/shared/icon"
import Image from "next/image"

export default function Management() {
  return (
    <div
      className="flex flex-col items-center justify-between gap-8 sm:gap-12 lg:gap-15.75 lg:flex-row-reverse"
    >
      <div className="w-full max-w-143.5 space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="heading-s sm:heading-m">Create & Manage Courses Easily.</h2>
        <p className="body-m sm:body-l text-neutral-700">
          <span className="font-bold">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of
          educational courses.
        </p>
        <ul className="space-y-3 sm:space-y-4 label-m sm:label-l">
          {[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Icon src="/icons/checked-fill.svg" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-144.25">
        <Image
          src="/images/home/management.png"
          alt="About Image"
          width={577}
          height={540}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}
