import HeroContent from "./hero-content"
import Ornaments from "./ornaments"

export default function Hero() {
  return (
    <section className="hero-scale relative isolate overflow-hidden bg-primary-700 grid-background">
      <div className="relative z-20 container px-[clamp(1.25rem,6vw,7.625rem)] pt-20 pb-[calc(var(--u,1px)*var(--k,1)*220)] md:px-[revert] md:pt-30 md:pb-[calc(var(--u,1px)*var(--k,1)*520)]">
        <HeroContent />
      </div>

      <Ornaments />
    </section>
  )
}
