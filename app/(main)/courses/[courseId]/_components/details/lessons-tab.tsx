import Icon from "@/components/shared/icon"
import DETAILS from "@/data/course-details.json"

export default function LessonsTab() {
  const { lesson } = DETAILS

  return (
    <>
      <h4 className="heading-xs text-neutral-950">Explore the Modules</h4>
      <p className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6">
        {lesson.description}
      </p>

      <h4 className="mt-6 heading-xs text-neutral-950">Lesson List</h4>
      <div className="mt-6 space-y-4">
        {lesson.lesson_list.map((item, index) => (
          <div key={index} className="flex items-start gap-3.25">
            <div className="w-fit shrink-0 rounded-[24px] bg-secondary p-3 sm:p-4">
              <Icon src="/icons/video-cam.svg" wrapper="span" />
            </div>
            <div>
              <h2 className="label-m text-neutral-950">{item.title}</h2>
              <p className="body-m text-neutral-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-6 heading-xs text-neutral-950">Lesson Content</h4>
      <p className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6">
        {lesson.content}
      </p>

      <h4 className="mt-6 heading-xs text-neutral-950">Lesson Progress Tracking</h4>
      <p className="mt-4 body-m whitespace-pre-line text-neutral-700 sm:mt-6">
        {lesson.tracking}
      </p>

      <div className="mt-6 w-full space-y-2 rounded-[16px] border p-4">
        <p className="label-s text-neutral-950">Learning Progress</p>
        <h6 className="heading-s text-neutral-950">{lesson.progress}%</h6>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-secondary-400"
            style={{ width: `${lesson.progress}%` }}
          />
        </div>
      </div>
    </>
  )
}
