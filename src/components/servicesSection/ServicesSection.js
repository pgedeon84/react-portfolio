import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faNetworkWired,
  faStore,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function ServicesSection() {
  return (
    <div
      id="services"
      className="services"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <h1 className="py-5">Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>Bring your imagination into fruition...</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faStore} size="2x" />
              </div>
              <h3>E-Commerce</h3>
              <p>
                Begin generating money while you sleep with an E-Shop today!
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faImages} size="2x" />
              </div>
              <h3>Company Portfolio</h3>
              <p>Grow your brand by Globalizing your Work.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faNetworkWired}
                  size="2x"
                />
              </div>
              <h3>Web Hosting</h3>
              <p>Keep your website up and running on the internet!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
