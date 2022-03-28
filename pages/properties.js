import ExploreCities from "../components/index components/explore cities/ExploreCities";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Brand from "../components/index components/brand/Brand";
import PropertySelect from "../components/properties components/property selector/PropertySelect";

export default function properties() {
  return (
    <div>
      <HeaderTop />
      <PropertySelect />
      <ExploreCities />
      <Brand />
    </div>
  );
}
