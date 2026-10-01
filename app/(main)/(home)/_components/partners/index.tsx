import Icon from "@/components/shared/icon"

export default function Partners() {
  return (
    <section className="bg-neutral-50 py-4 sm:py-6">
      <div className="container flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 py-8 sm:py-12 md:py-16 xl:py-20">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center">
            <Icon
              src={partner.logo}
              className="h-auto w-24 sm:w-28 md:w-36 lg:w-40 xl:w-auto max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/images/home/partner-1.svg",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "/images/home/partner-2.svg",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "/images/home/partner-3.svg",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "/images/home/partner-4.svg",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "/images/home/partner-5.svg",
  },
]
