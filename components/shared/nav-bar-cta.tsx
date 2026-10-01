"use client"

import { cn } from "cn"
import Icon from "./icon"
import NavLink from "./nav-link"
import Link from "next/link"

export default function NavbarCta({ className }: { className?: string }) {
  return (
    <div className={cn("items-center gap-4 lg:gap-5 xl:gap-6", className)}>
      {ctaLinks.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.name}
        </NavLink>
      ))}

      <Link href="/cart" aria-label="Cart" className="transition-opacity hover:opacity-80">
        <Icon src="/icons/cart.svg" className="h-auto w-5 lg:w-6 text-neutral-50" />
      </Link>
    </div>
  )
}

export const ctaLinks = [
  { id: 1, name: "Sign In", href: "/sign-in" },
  { id: 2, name: "Join Us", href: "/sign-up" },
]
