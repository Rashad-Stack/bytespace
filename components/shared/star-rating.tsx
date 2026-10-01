import Icon from "./icon"

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }, (_, i) => (
        <Icon src="/icons/rating-star.svg" key={i} />
      ))}
    </div>
  )
}
