import "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
  const hamburgerMenu = (
    <FontAwesomeIcon icon={faBars} style={{ color: "#f6f6f6" }} />
  );
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link
          smooth={true}
          offset={-100}
          to="home"
          className="navbar-brand"
          href="#"
        >
          Webify.io
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {hamburgerMenu}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                offset={-100}
                to="home"
                className="nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-225}
                to="about"
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-100}
                to="services"
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="experience"
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-200}
                to="portfolio"
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-140}
                to="testimonial"
                className="nav-link"
                href="#"
              >
                testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-100}
                to="contact"
                className="nav-link"
                href="#"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
