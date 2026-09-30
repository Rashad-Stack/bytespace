import COURSES from "./courses.json"
import ProductCard from "./product-card"

export default function CourseCategory() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {COURSES.map((course) => (
        <ProductCard key={course.href} payload={course} />
      ))}
    </div>
  )
}
