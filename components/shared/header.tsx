import Link from "next/link"
import Icon from "./icon"
import NavbarCta from "./nav-bar-cta"
import NavMenu from "./nav-menu"

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container flex items-center justify-between pt-8.75 pb-11.75">
        <Link href="/" className="flex items-baseline gap-[8.12px]">
          <Icon src="/icons/logo.svg" className="h-[31.5px] w-[28.875px]" />
          <span className="font-clash-display text-2xl font-bold text-neutral-50">
            ByteSpace
          </span>
        </Link>

        <NavMenu />
        <NavbarCta />
      </div>
    </header>
  )
}
