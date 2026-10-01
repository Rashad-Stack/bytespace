import AboutSection from "@/components/shared/about-section"
import Icon from "@/components/shared/icon"

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
]

export default function Management() {
  return (
    <AboutSection
      heading="Create & Manage Courses Easily."
      description={
        <>
          <span className="font-bold">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of
          educational courses.
        </>
      }
      imageSrc="/images/home/management.png"
      imageAlt="About Image"
      reverse
    >
      <ul className="space-y-3 sm:space-y-4 label-m sm:label-l">
        {features.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Icon src="/icons/checked-fill.svg" /> {item}
          </li>
        ))}
      </ul>
    </AboutSection>
  )
}
