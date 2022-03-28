import Property_Hero from "../components/add properties/property hero/Property_Hero";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Agency_Form from "../components/add properties/agency form/Agency_Form";
import Property_Section from "../components/add properties/property section/Property_Section";


function Add_property() {
  return (
    <div>
<HeaderTop/>
     <Property_Hero/>
    <Agency_Form/>
    <Property_Section/>
    </div>


  );
}

export default Add_property;