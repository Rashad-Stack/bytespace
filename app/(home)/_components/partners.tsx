import Icon from "@/components/shared/icon"

export default function Partners() {
  return (
    <section className="grid h-50.5 place-content-center bg-neutral-50">
      <div className="container flex items-center justify-between gap-18 px-38.75">
        {partners.map((partner) => (
          <Icon
            key={partner.id}
            src={partner.image}
            className="h-10.25 w-41.75"
          />
        ))}
      </div>
    </section>
  )
}

const partners = [
  { id: 1, name: "Partner 1", image: "/images/home/partner-1.svg" },
  { id: 2, name: "Partner 2", image: "/images/home/partner-2.svg" },
  { id: 3, name: "Partner 3", image: "/images/home/partner-3.svg" },
  { id: 4, name: "Partner 4", image: "/images/home/partner-4.svg" },
]
