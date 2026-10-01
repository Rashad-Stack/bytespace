import SectionHeading from "@/components/shared/section-heading"
import CATEGORIES from "@/data/categories.json"
import FeaturedCategoryGrid from "./featured-category-grid"

const featuredCategories = CATEGORIES.filter((c) => c.icon)

export default function FeaturedCategory() {
  return (
    <div className="my-10 sm:my-14 md:my-18">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <FeaturedCategoryGrid categories={featuredCategories} />
    </div>
  )
}
