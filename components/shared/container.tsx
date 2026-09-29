export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto h-30 pt-8.75 pr-30 pb-11.75 pl-30.5 max-lg:max-w-360">
      {children}
    </div>
  )
}
