import Link from "next/link"
import Icon from "./icon"

interface LogoProps {
  variant?: "light" | "dark"
}

export default function Logo({ variant = "light" }: LogoProps) {
  return (
    <Link href="/" className="flex items-baseline gap-[8.12px]">
      <Icon
        src="/icons/logo.svg"
        className="h-6 w-5.5 sm:h-7 sm:w-6.5 md:h-[31.5px] md:w-[28.875px]"
      />
      <span
        className={`font-clash-display text-lg sm:text-xl font-bold md:text-2xl ${
          variant === "dark" ? "text-neutral-950" : "text-neutral-50"
        }`}
      >
        ByteSpace
      </span>
    </Link>
  )
}
