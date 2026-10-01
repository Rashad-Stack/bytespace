import AboutSection from "@/components/shared/about-section"

export default function ProfessionalGrowth() {
  return (
    <AboutSection
      heading="Your Path to Professional Growth Starts Here!"
      description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
      imageSrc="/images/home/professional-growth.png"
      imageAlt="Professional Growth"
    >
      <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-14">
        <div>
          <h3 className="display-xs text-primary">12K</h3>
          <p className="body-m sm:body-l text-neutral-700">Students</p>
        </div>
        <div>
          <h3 className="display-xs text-primary">70+</h3>
          <p className="body-m sm:body-l text-neutral-700">Courses</p>
        </div>
        <div>
          <h3 className="display-xs text-primary">16</h3>
          <p className="body-m sm:body-l text-neutral-700">Creators</p>
        </div>
      </div>
    </AboutSection>
  )
}
