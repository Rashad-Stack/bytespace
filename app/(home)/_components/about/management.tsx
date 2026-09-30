import Icon from "@/components/shared/icon"
import Image from "next/image"

export default function Management() {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-15.75 lg:flex-row-reverse`}
    >
      <div className="max-w-143.5 space-y-10">
        <h2 className="heading-m">Create & Manage Courses Easily.</h2>
        <p className="body-l text-neutral-700">
          <span className="font-bold">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of
          educational courses.
        </p>
        <ul className="space-y-4 label-l">
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

      <div className="w-144.25">
        <Image
          src="/images/home/management.png"
          alt="About Image"
          width={577}
          height={540}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}
