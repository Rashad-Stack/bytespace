import Image from "next/image"
import Form from "./_components/form"

export default function SignUp() {
  return (
    <main>
      <section className="isolate min-h-dvh bg-primary-700 grid-background pt-30">
        <div className="container">
          <div className="flex items-stretch justify-between">
            <div className="max-w-123 flex-1">
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

            <div className="max-w-144.75 flex-1">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
