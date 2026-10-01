import SectionHeading from "@/components/shared/section-heading"
import Icon from "@/components/shared/icon"

export default function FeaturedCategory() {
  return (
    <div className="my-10 sm:my-14 md:my-18">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {featuredCategories.map((category) => (
          <div
            key={category.title}
            className="flex h-36 w-36 sm:h-41.75 sm:w-41.75 flex-col items-center justify-center gap-3 sm:gap-4 rounded-[20px] sm:rounded-[24px] border"
          >
            <span className="rounded-full bg-secondary p-2.5 sm:p-3">
              <Icon src={category.icon} wrapper="span" />
            </span>
            <h3 className="label-m sm:label-xl text-center px-2">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

const featuredCategories = [
  {
    icon: "/icons/design.svg",
    title: "Design",
  },
  {
    icon: "/icons/development.svg",
    title: "Development",
  },
  {
    icon: "/icons/it-software.svg",
    title: "IT & Software",
  },
  {
    icon: "/icons/business.svg",
    title: "Business",
  },
  {
    icon: "/icons/marketing.svg",
    title: "Marketing",
  },
  {
    icon: "/icons/photography.svg",
    title: "Photography",
  },
]
