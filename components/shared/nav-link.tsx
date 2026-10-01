"use client"

import { cn } from "cn"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <motion.div
      animate={{ marginTop: isActive ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Link
        href={href}
        className={cn(
          "text-sm xl:text-base leading-[19.2px] text-white transition-colors hover:text-white/80",
          isActive ? "font-medium" : "font-normal",
        )}
      >
        {children}
      </Link>
    </motion.div>
  )
}
