import Image from "next/image"

export default function ProfessionalGrowth() {
  return (
    <div
      className="flex flex-col items-center justify-between gap-8 sm:gap-12 lg:gap-15.75 lg:flex-row"
    >
      <div className="w-full max-w-143.5 space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="heading-s sm:heading-m">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="body-m sm:body-l text-neutral-700">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
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
      </div>

      <div className="w-full max-w-144.25">
        <Image
          src="/images/home/professional-growth.png"
          alt="Professional Growth"
          width={577}
          height={540}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}
