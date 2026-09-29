"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Icon from "./icon"

export default function NavbarCta() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-6">
      {ctaLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("text-base leading-[19.2px] font-normal text-white", {
            "font-medium": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}

      <Link href="/cart">
        <Icon src="/icons/cart.svg" className="h-auto w-6 text-neutral-50" />
      </Link>
    </div>
  )
}

const ctaLinks = [
  { id: 1, name: "Sign In", href: "/sign-in" },
  { id: 2, name: "Join Us", href: "/sign-up" },
]
