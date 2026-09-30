import Ornaments from "./ornaments"
import SearchForm from "./search-form"

export default function Hero() {
  return (
    <section className="hero-scale relative isolate overflow-hidden bg-primary-700 grid-background">
      <div className="relative z-20 container px-[clamp(1.25rem,6vw,7.625rem)] pt-20 pb-[calc(var(--u,1px)*var(--k,1)*220)] md:px-[revert] md:pt-30 md:pb-[calc(var(--u,1px)*var(--k,1)*520)]">
        <div className="mx-auto mt-4 max-w-233.75 space-y-4 md:mt-12.25 md:space-y-8">
          <h1
            className="text-center heading-l text-white"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 72px)",
              lineHeight: "120%",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
            }}
          >
            Get Access to Hundreds Courses Available
          </h1>

          <p
            className="text-center body-l text-white/80"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          >
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
