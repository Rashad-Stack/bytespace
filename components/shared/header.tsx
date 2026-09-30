import Link from "next/link"
import Icon from "./icon"
import MobileMenu from "./mobile-menu"
import NavbarCta from "./nav-bar-cta"
import NavMenu from "./nav-menu"

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="p container flex items-center justify-between py-5 md:py-6 lg:pt-8.75 lg:pb-11.75">
        <Link href="/" className="flex items-baseline gap-[8.12px]">
          <Icon
            src="/icons/logo.svg"
            className="h-6 w-5.5 md:h-[31.5px] md:w-[28.875px]"
          />
          <span className="font-clash-display text-xl font-bold text-neutral-50 md:text-2xl">
            ByteSpace
          </span>
        </Link>

        <NavMenu className="hidden lg:flex" />
        <NavbarCta className="hidden lg:flex" />
        <MobileMenu />
      </div>
    </header>
  )
}
