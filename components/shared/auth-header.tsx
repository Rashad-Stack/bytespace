import Link from "next/link"
import Icon from "./icon"

export default function AuthHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-8.75 pb-12">
      <nav className="container">
        <Link href="/">
          <Icon src="/logo.svg" />
        </Link>
      </nav>
    </header>
  )
}
