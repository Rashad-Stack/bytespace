import Image from "next/image"
import Form from "./_components/form"

export default function SignUp() {
  return (
    <main>
      <section className="isolate min-h-dvh bg-primary-700 grid-background pt-20 sm:pt-24 md:pt-28 lg:pt-30">
        <div className="container">
          <div className="flex items-stretch justify-between">
            <div className="hidden lg:flex max-w-123 flex-1 flex-col">
              <h6 className="heading-xs text-neutral-50">
                Sign up and come in
              </h6>
              <p className="mt-4 body-l text-neutral-50">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </p>

              <div className="relative mt-13.5 aspect-548/585 w-full">
                <Image
                  src="/images/auth/auth.png"
                  alt="Sign up image"
                  fill
                  className="object-fill object-center"
                />
              </div>
            </div>

            <div className="w-full max-w-full lg:max-w-144.75 lg:flex-1 mx-auto lg:mx-0">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
