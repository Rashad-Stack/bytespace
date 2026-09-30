import About from "./_components/about"
import Courses from "./_components/courses"
import Hero from "./_components/hero"
import Partners from "./_components/partners"
import Potential from "./_components/potential"

export default function Page() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <About />
      <Potential />
    </main>
  )
}
