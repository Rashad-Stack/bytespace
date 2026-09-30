import Icon from "@/components/shared/icon"
import Image from "next/image"

export default function Ornaments() {
  return (
    <div className="absolute inset-x-0 bottom-0 -z-1 h-200.75 bg-cover bg-no-repeat">
      <div className="relative flex h-[386.791px] w-full items-baseline justify-between">
        <div className="relative h-full w-[386.791px] shrink-0">
          <Image
            src="/images/home/ornaments-1.png"
            alt="Hero ornament"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="absolute inset-x-0 -bottom-15 mx-auto flex h-[175.814px] w-full max-w-[80%] items-center justify-between">
          <div className="relative h-full w-[175.814px] shrink-0">
            <Image
              src="/images/home/ornaments-3.png"
              alt="Hero ornament"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="relative -mt-10 h-full w-[175.814px] shrink-0">
            <Image
              src="/images/home/ornaments-4.png"
              alt="Hero ornament"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        <div className="relative h-full w-[386.791px] shrink-0">
          <Image
            src="/images/home/ornaments-2.png"
            alt="Hero ornament"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="relative top-15 z-20 mx-auto flex h-[343.689px] w-full max-w-[75%] items-baseline justify-between">
        <div className="relative h-full w-85.5 shrink-0">
          <Image
            src="/images/home/ornaments-5.png"
            alt="Hero ornament"
            fill
            className="mt-5 object-contain object-left"
          />
        </div>

        <div className="relative h-full w-82.5 shrink-0">
          <Image
            src="/images/home/ornaments-6.png"
            alt="Hero ornament"
            fill
            className="ml-3 object-contain object-right"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-150 w-287.25 -translate-x-1/2">
        <div className="absolute inset-0 bg-[url('/images/home/hero-person-bg.png')] bg-contain bg-bottom bg-no-repeat" />
        <Image
          alt="Person in the hero section"
          src="/images/home/hero-person.png"
          width={578}
          height={541}
          className="absolute -bottom-3 left-1/2 h-135.25 w-144.5 translate-x-[-42%] scale-128 object-contain object-center"
          priority
        />

        <div className="absolute bottom-77.75 left-60 w-54 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
          <p className="body-m font-medium text-neutral-950">UI/UX Design</p>
          <p className="body-xs text-neutral-400">
            200 Courses <span className="mx-2">•</span> 1000+ Students
          </p>
        </div>

        <div className="absolute bottom-60.5 left-173 w-57.75 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
          <p className="body-m font-medium text-neutral-950">
            Learning Progress
          </p>
          <p className="font-heading text-[48px] leading-none font-semibold text-neutral-950">
            55%
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-200">
            <div className="h-full w-[55%] rounded-full bg-secondary" />
          </div>
        </div>

        <div className="absolute bottom-17 left-40 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
          <p className="body-m font-medium text-neutral-950">Happy Students</p>
          <p className="flex items-center gap-1 body-xs text-neutral-950">
            <span> 4.5 </span>
            <span className="text-neutral-400"> (240)</span>
            <Icon src="/icons/star.svg" className="size-4" />
          </p>

          <div className="mt-2 flex items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <Image
                key={n}
                src={`/images/home/profile-${n}.png`}
                alt=""
                width={28}
                height={28}
                className="-ml-3.5 size-10.75 rounded-full object-cover first:ml-0"
              />
            ))}
            <span className="-ml-3.5 flex size-10.75 items-center justify-center rounded-full bg-secondary text-xs font-bold text-neutral-950">
              2K+
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
