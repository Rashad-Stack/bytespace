import Logo from "@/svgs/logo.svg"
import Link from "next/link"
import Container from "./container"
import NavbarCta from "./nav-bar-cta"
import NavMenu from "./nav-menu"

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="bg-[#003BE2]">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-baseline gap-[8.12px]">
              <Logo className="h-[31.5px] w-[28.875px]" />
              <span className="font-clash-display text-2xl font-bold text-neutral-50">
                ByteSpace
              </span>
            </Link>

            <NavMenu />
            <NavbarCta />
          </div>
        </Container>
      </nav>
    </header>
  )
}
