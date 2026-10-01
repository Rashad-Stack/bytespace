import Icon from "@/components/shared/icon"
import SectionHeading from "@/components/shared/section-heading"
import CATEGORIES from "@/data/categories.json"

const featuredCategories = CATEGORIES.filter((c) => c.isFeatured && c.icon)

export default function FeaturedCategory() {
  return (
    <div className="my-10 sm:my-14 md:my-18">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mt-8 flex items-center justify-center gap-4 max-lg:flex-wrap sm:mt-12 sm:gap-6 md:mt-16 md:gap-8 lg:gap-10">
        {featuredCategories.map((category) => (
          <div
            key={category.value}
            className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-[20px] border sm:h-41.75 sm:w-41.75 sm:gap-4 sm:rounded-[24px]"
          >
            <span className="rounded-full bg-secondary p-2.5 sm:p-3">
              <Icon src={category.icon!} wrapper="span" />
            </span>
            <h3 className="sm:label-xl px-2 text-center label-m">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
