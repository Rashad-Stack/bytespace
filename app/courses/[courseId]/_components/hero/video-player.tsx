import Icon from "@/components/shared/icon"

export default function VideoPlayer() {
  return (
    <div className="mt-8 sm:mt-12 xl:mt-14.75 min-h-60 sm:min-h-80 md:min-h-119.75 w-full xl:max-w-180">
      <div className="relative aspect-video h-full w-full overflow-hidden rounded-[16px] sm:rounded-[24px] bg-neutral-950">
        <video
          poster="/images/course-details/video-thumbnail.png"
          className="h-full w-full rounded-[16px] sm:rounded-[24px] object-cover"
        >
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-[20px] sm:rounded-[24px] bg-black/10 p-3 sm:p-4 outline-0 backdrop-blur-xl hover:bg-black/20 transition-colors">
          <Icon src="/icons/play.svg" className="size-6 sm:size-8" />
        </button>
      </div>
    </div>
  )
}
