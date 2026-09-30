import Icon from "@/components/shared/icon"

export default function FeaturedCategory() {
  return (
    <div className="mt-18">
      <div className="mx-auto max-w-242.75 space-y-4 text-center">
        <h2 className="heading-s">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="body-l text-neutral-400">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <div className="mt-16 flex items-center justify-center gap-10">
        {featuredCategories.map((category) => (
          <div
            key={category.title}
            className="flex h-41.75 w-41.75 flex-col items-center justify-center gap-4 rounded-[24px] border"
          >
            <Icon src={category.icon} />
            <h3 className="label-xl">{category.title}</h3>
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
