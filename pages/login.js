import HeaderTop from "../components/contact components/header top/HeaderTop";
import Brand from "../components/index components/Brand/Brand";
import Login_Form from "../components/login page/login form/Login_Form";
import Login_Hero from "../components/login page/login hero/Login_Hero";


function login() {
  return (
      
       <div>
       <HeaderTop/>
       <Login_Hero/>
           <Login_Form/>
           <Brand/>
       </div>
  );
}

export default login;