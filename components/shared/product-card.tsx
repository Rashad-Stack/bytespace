import Icon from "@/components/shared/icon"
import { TProductCardProps } from "@/types/product"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({
  payload,
  loading = "lazy",
}: {
  payload: TProductCardProps
  loading?: "eager" | "lazy"
}) {
  return (
    <article className="mx-auto w-full max-w-105 rounded-[24px] border border-neutral-200 bg-white p-3.5 sm:p-4">
      <Link href={payload.href} className="block">
        <div className="relative h-50 overflow-hidden rounded-[12px] sm:h-55">
          <Image
            src={payload.image}
            alt={payload.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
            loading={loading}
          />

          <div className="absolute inset-x-1.5 bottom-3 flex items-baseline justify-center sm:inset-x-2 sm:bottom-4">
            <div className="flex w-fit items-center justify-between gap-1 px-0.5 text-nowrap sm:gap-2">
              <span className="rounded-full bg-white/35 px-2.5 py-1.5 text-[10px] backdrop-blur-sm sm:px-4 sm:py-2 sm:label-xs">
                {payload.lessons} Lessons
              </span>

              <span className="rounded-full bg-white/35 px-2.5 py-1.5 text-[10px] backdrop-blur-sm sm:px-4 sm:py-2 sm:label-xs">
                {payload.duration}
              </span>

              <span className="rounded-full bg-white/35 px-2.5 py-1.5 text-[10px] backdrop-blur-sm sm:px-4 sm:py-2 sm:label-xs">
                {payload.comments} Comments
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[20.86px] flex items-start justify-between gap-4">
          <div>
            <h2 className="line-clamp-1 heading-xs">{payload.title}</h2>

            <p className="mt-1 body-xs text-neutral-500">
              by <span className="text-primary-500">{payload.instructor}</span>
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1 body-l text-neutral-600">
            {payload.rating.toFixed(1)}
            <Icon
              src="/icons/star.svg"
              className="size-6 fill-neutral-300 text-neutral-300"
            />
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-3 label-xs text-neutral-600">
            <Icon
              src="/icons/bar-chart-icon.svg"
              className="size-5 text-neutral-700"
            />
            {payload.level}
          </span>

          <div className="flex items-center">
            {payload.instructors.slice(0, 4).map((person, index) => (
              <Image
                key={person.name}
                src={person.image}
                alt={person.name}
                width={36}
                height={36}
                className="-ml-2 rounded-full border-2 border-white object-cover first:ml-0"
                style={{ zIndex: payload.instructors.length - index }}
              />
            ))}

            <span className="ml-1 flex size-9 items-center justify-center rounded-full bg-secondary-400 body-s text-neutral-900">
              26+
            </span>
          </div>
        </div>

        <p className="mt-5">
          <span className="heading-xs text-primary-500">${payload.price}</span>
          <span className="body-xs text-neutral-500">/lifetime</span>
        </p>
      </Link>
    </article>
  )
}
