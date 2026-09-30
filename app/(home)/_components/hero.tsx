import Ornaments from "./ornaments"
import SearchForm from "./search-form"

export default function Hero() {
  return (
    <section className="relative isolate min-h-256 overflow-hidden bg-primary-700 grid-background">
      <div className="relative z-20 container py-20 pt-30">
        <div className="mx-auto mt-12.25 max-w-233.75 space-y-8">
          <h1 className="text-center heading-l text-white">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="text-center body-l text-neutral-100">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <SearchForm />
        </div>
      </div>

      <Ornaments />
    </section>
  )
}
