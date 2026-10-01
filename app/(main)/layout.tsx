import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import React from "react"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
