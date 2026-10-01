import FadeUp from "@/components/motion/fade-up"
import Image from "next/image"

interface AuthPageLayoutProps {
  heading: string
  description: string
  children: React.ReactNode
}

export default function AuthPageLayout({
  heading,
  description,
  children,
}: AuthPageLayoutProps) {
  return (
    <main>
      <section className="isolate min-h-dvh bg-primary-700 grid-background pt-20 sm:pt-24 md:pt-28 lg:pt-30">
        <div className="container">
          <div className="flex items-stretch justify-between">
            <FadeUp className="hidden max-w-123 flex-1 flex-col lg:flex">
              <h6 className="heading-xs text-neutral-50">{heading}</h6>
              <p className="mt-4 body-l text-neutral-50">{description}</p>

              <div className="relative mt-13.5 aspect-548/585 w-full">
                <Image
                  src="/images/auth/auth.png"
                  alt="Auth illustration"
                  fill
                  sizes="(min-width: 1024px) 492px, 0px"
                  className="object-fill object-center"
                />
              </div>
            </FadeUp>

            <FadeUp
              className="mx-auto w-full max-w-full lg:mx-0 lg:max-w-144.75 lg:flex-1"
              delay={0.12}
            >
              {children}
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  )
}
