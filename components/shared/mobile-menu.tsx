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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/cart"
          aria-label="Cart"
          onClick={close}
          className="p-1 transition-opacity hover:opacity-80"
        >
          <Icon
            src="/icons/cart.svg"
            className="h-auto w-5.5 text-neutral-50 sm:w-6"
          />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 active:scale-95 sm:size-10"
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
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-16.25 z-40 bg-black/40 backdrop-blur-xs"
            onClick={close}
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-primary-700/98 shadow-2xl backdrop-blur-md transition-all"
          >
            <nav className="container flex flex-col gap-1 py-4 sm:py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-normal text-white transition-colors hover:bg-white/10 active:bg-white/15 sm:text-lg",
                    {
                      "bg-white/10 font-medium": pathname === link.href,
                    }
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 flex flex-col items-stretch gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:pt-5">
                <Link
                  href={ctaLinks[0].href}
                  onClick={close}
                  className="flex-1 rounded-full border border-white/40 py-2.5 text-center text-sm text-white transition-colors hover:bg-white/10 sm:py-3 sm:text-base"
                >
                  {ctaLinks[0].name}
                </Link>
                <Link
                  href={ctaLinks[1].href}
                  onClick={close}
                  className="flex-1 rounded-full bg-secondary py-2.5 text-center text-sm font-medium text-neutral-950 transition-colors hover:bg-secondary-400 sm:py-3 sm:text-base"
                >
                  {ctaLinks[1].name}
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
