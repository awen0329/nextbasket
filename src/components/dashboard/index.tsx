import FurnitureSection from "./section1";
import FeaturedProductSection from "./section2";
import { BestServiceSection } from "./section3";
import FeaturedPostSection from "./section4";
import TestimonialSection from "./section5";
import BetterExperienceSection from "./section6";

export default function Dashboard() {
  return (
    <>
      <FurnitureSection />
      <FeaturedProductSection />
      <BestServiceSection />
      <FeaturedPostSection />
      <TestimonialSection />
      <BetterExperienceSection />
    </>
  );
}
