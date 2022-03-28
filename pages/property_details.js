import HeroHead from "../components/property_details components/hero/Hero";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Popular_Property from "../components/property_details components/popular property/Popular_Property";
import Brand from "../components/index components/Brand/Brand";

export default function property_details() {
  return (
    <div>
      <HeaderTop />
      <HeroHead />
      <Popular_Property />
      <Brand />
    </div>
  );
}
