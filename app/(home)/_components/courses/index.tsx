import CategoryTab from "./category-tab"
import FeaturedCategory from "./featured-category"
import Heading from "./heading"

export default function Courses() {
  return (
    <section>
      <div className="container pt-18">
        <Heading />
        <CategoryTab />
        <FeaturedCategory />
      </div>
    </section>
  )
}
