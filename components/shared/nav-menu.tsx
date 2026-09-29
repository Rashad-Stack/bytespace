"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("text-base leading-[19.2px] font-normal text-white", {
            "-mt-1.5 font-medium": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Courses", href: "/courses" },
  { id: 3, name: "Creators", href: "/creators" },
]
