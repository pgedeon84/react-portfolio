import { Link } from "react-scroll";
import TypedReactDemo from "../../utilities/TypedReactDemo";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function HeaderSection() {
  return (
    <header
      id="home"
      className="header-wrapper"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="main-info">
        <h1>Web and App Development for you</h1>
        <TypedReactDemo
          strings={[
            "^1000 Need an App or a Website?",
            "Need E-Commerce services?",
            "Need an online Portfolio for your Company?",
            "We've got you covered!",
          ]}
        />
        <Link
          smooth={true}
          offset={-100}
          to="contact"
          href="#"
          className="btn-main-offer"
        >
          contact us
        </Link>
      </div>
    </header>
  );
}

export default HeaderSection;
