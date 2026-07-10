import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { DrinksShowcase } from "@/components/sections/drinks-showcase";
import { Gallery } from "@/components/sections/gallery";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Manifesto />
      <Services />
      <DrinksShowcase />
      <Gallery />
      <Stats />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
