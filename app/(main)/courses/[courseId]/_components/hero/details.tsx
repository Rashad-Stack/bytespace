import { Button } from "@/components/animate-ui/components/buttons/button"
import Icon from "@/components/shared/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DETAILS from "@/data/course-details.json"

export default function Details() {
  const { hero } = DETAILS

  return (
    <div className="relative mt-8 xl:absolute xl:top-0 xl:right-0 xl:mt-0 w-full xl:max-w-105 rounded-[20px] sm:rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
      <h2 className="heading-xs font-heading">
        {hero.totalLessons} Lessons ({hero.totalHours} hours)
      </h2>

      <ul className="mt-6 flex flex-col gap-4">
        {hero.previewLessons.map((lesson, index) => {
          const formattedNumber = String(index + 1).padStart(2, "0")
          return (
            <li key={index} className="flex items-start justify-between space-x-2 label-m">
              <div className="flex items-start space-x-3">
                <span className="font-medium">{formattedNumber}.</span>
                <span className="max-w-48.5 text-wrap">{lesson.title}</span>
              </div>
              <span className="body-m text-primary-800">{lesson.duration}</span>
            </li>
          )
        })}
        <li className="body-m text-neutral-700">
          {hero.totalLessons - hero.previewLessons.length} more videos
        </li>
      </ul>

      <p className="mt-6 body-m text-neutral-700">{hero.callToAction}</p>

      <h4 className="my-6 heading-s text-primary-800">
        ${hero.price}<span className="body-m text-neutral-700">/{hero.priceLabel}</span>
      </h4>

      <Button variant="secondary" className="w-full">
        Enroll Now
      </Button>

      <h4 className="my-6 heading-xs text-neutral-950">This course include</h4>

      <ul className="my-6 space-y-3 border-b pb-6">
        {hero.includes.map((item) => (
          <li key={item.label} className="flex items-center gap-2 body-m text-neutral-700">
            <Icon src={item.icon} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Avatar className="size-13">
          <AvatarImage src={hero.instructor.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="label-l text-neutral-950">{hero.instructor.name}</p>
          <p className="body-m text-neutral-700">{hero.instructor.role}</p>
        </div>
      </div>

      <p className="my-6 body-m text-neutral-700">{hero.callToAction}</p>

      <Button variant="outline" size="sm">See Full Profile</Button>
    </div>
  )
}
