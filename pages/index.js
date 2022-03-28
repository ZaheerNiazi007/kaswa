import AboutUs from "../components/index components/about us/AboutUs";
import AdvanceSearchBar from "../components/index components/advance search bar/AdvanceSearchBar";
import FeaturedProducts from "../components/index components/featured products/FeaturedProducts";
import Hero from "../components/index components/hero/Hero";
import PopularProperties from "../components/index components/popular properties/PopularProperties";
import Video from "../components/index components/Video/Video";
import ExploreCities from "../components/index components/Explore cities/ExploreCities";
import TestimonialCarousal from "../components/index components/Testimonial carousal/TestimonialCarousal";
import Brand from "../components/index components/Brand/Brand";
import Team from "../components/index components/Team/Team";
import Blog from "../components/index components/Blog/Blog";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdvanceSearchBar />
      <PopularProperties />
      <AboutUs />
      <FeaturedProducts />
      <Video />
      <ExploreCities />
      <TestimonialCarousal />
      <Brand />
      <Team />
      <Blog />
    </div>
  );
}
