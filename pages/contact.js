import ContactForm from "../components/contact components/contact form/ContactForm";
import GetInTouch from "../components/contact components/get in touch/GetInTouch";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Hero from "../components/contact components/hero/Hero";

export default function contact() {
  return (
    <div>
      <HeaderTop />
      <Hero />
      <GetInTouch />
      <ContactForm />
    </div>
  );
}
