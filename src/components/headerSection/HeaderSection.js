import { Link } from "react-scroll";
import TypedReactDemo from "../../utilities/TypedReactDemo";

function HeaderSection() {
  return (
    <div>
      <header id="home" className="header-wrapper">
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
    </div>
  );
}

export default HeaderSection;
