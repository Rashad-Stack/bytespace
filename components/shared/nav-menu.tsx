"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavMenu({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-4 lg:gap-5 xl:gap-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("text-sm xl:text-base leading-[19.2px] font-normal text-white transition-colors hover:text-white/80", {
            "-mt-1.5 font-medium": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Courses", href: "/courses" },
  { id: 3, name: "Creators", href: "/creators" },
]
