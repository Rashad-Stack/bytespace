import CategoryTab from "./category-tab"
import CourseCategory from "./course-category"
import FeaturedCategory from "./featured-category"
import Heading from "./heading"

export default function Courses() {
  return (
    <section>
      <div className="container pt-18">
        <Heading />
        <CategoryTab />
        <CourseCategory />
        <FeaturedCategory />
      </div>
    </section>
  )
}
