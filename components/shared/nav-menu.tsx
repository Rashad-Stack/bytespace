"use client"

import { cn } from "cn"
import NavLink from "./nav-link"

export default function NavMenu({ className }: { className?: string }) {
  return (
    <nav className={cn("items-center gap-4 lg:gap-5 xl:gap-6", className)}>
      {navLinks.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Courses", href: "/courses" },
  { id: 3, name: "Creators", href: "/creators" },
]
