import About_US from "../components/services/about us/About_US";
import Agents from "../components/services/agents/Agents";
import Provided_Services from "../components/services/provided services/Provided_Services";
import Service_Hero from "../components/services/service hero/Service_Hero";
import Brand from "../components/index components/Brand/Brand";
import HeaderTop from "../components/contact components/header top/HeaderTop";

function services() {
  return (
    <div>
      <HeaderTop />
      <Service_Hero />
      <About_US />
      <Provided_Services />
      <Agents />
      <Brand />
    </div>
  );
}

export default services;
