import AuthHeader from "@/components/shared/auth-header"
import React from "react"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  )
}
