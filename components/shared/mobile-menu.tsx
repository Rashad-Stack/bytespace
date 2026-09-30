"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Icon from "./icon"
import { ctaLinks } from "./nav-bar-cta"
import { navLinks } from "./nav-menu"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(false)

  // Close with Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-4">
        <Link href="/cart" aria-label="Cart" onClick={close}>
          <Icon src="/icons/cart.svg" className="h-auto w-6 text-neutral-50" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-primary-700 shadow-xl"
        >
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={close}
                className={cn(
                  "rounded-xl px-3 py-3 text-lg text-white",
                  pathname === link.href
                    ? "bg-white/10 font-medium"
                    : "font-normal"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-4">
              <Link
                href={ctaLinks[0].href}
                onClick={close}
                className="flex-1 rounded-full border border-white/40 py-3 text-center text-base text-white"
              >
                {ctaLinks[0].name}
              </Link>
              <Link
                href={ctaLinks[1].href}
                onClick={close}
                className="flex-1 rounded-full bg-secondary py-3 text-center text-base font-medium text-neutral-950"
              >
                {ctaLinks[1].name}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
