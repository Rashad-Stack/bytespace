import Details from "./details"
import Heading from "./heading"
import { AnimatedDetailsCard, AnimatedHeading, AnimatedRatings, AnimatedVideoPlayer } from "./hero-animated"
import Ratings from "./ratings"
import VideoPlayer from "./video-player"

export default function Hero() {
  return (
    <section className="relative isolate bg-primary-700 grid-background">
      <div className="container py-[calc(var(--u,1px)*var(--k,1)*100)] md:pt-[calc(var(--u,1px)*var(--k,1)*150)]">
        <AnimatedHeading><Heading /></AnimatedHeading>
        <AnimatedRatings><Ratings /></AnimatedRatings>
        <div className="relative">
          <AnimatedVideoPlayer><VideoPlayer /></AnimatedVideoPlayer>
          <AnimatedDetailsCard><Details /></AnimatedDetailsCard>
        </div>
      </div>
    </section>
  )
}
