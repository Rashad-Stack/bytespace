import Management from "./management"
import ProfessionalGrowth from "./professional-growth"

export default function About() {
  return (
    <section
      style={{ backgroundImage: "url('/images/home/about-bg.png')" }}
      className="bg-cover bg-no-repeat py-30"
    >
      <div className="container space-y-18">
        <ProfessionalGrowth />
        <Management />
      </div>
    </section>
  )
}
