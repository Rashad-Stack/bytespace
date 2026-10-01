import CreatorsClient from "./_components/creators-client"
import COURSES from "@/data/courses.json"
import CREATORS from "@/data/creators.json"

export default function CreatorsPage() {
  return <CreatorsClient creator={CREATORS[0]} courses={COURSES.slice(0, 6)} />
}
