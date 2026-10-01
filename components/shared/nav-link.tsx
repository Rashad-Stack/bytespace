"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  activeClassName?: string
}

export default function NavLink({ href, children, activeClassName = "font-medium" }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "text-sm xl:text-base leading-[19.2px] font-normal text-white transition-colors hover:text-white/80",
        pathname === href && activeClassName,
      )}
    >
      {children}
    </Link>
  )
}
