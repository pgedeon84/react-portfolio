import loruki from "../../assets/images/loruki.png";
import coffeeShop from "../../assets/images/coffee-shop.png";
import clubxp from "../../assets/images/clubxp.png";
import landingPage from "../../assets/images/landingpage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function PortfolioSection() {
  const lorukiProject = (
    <div className="portfolio-image-box">
      <img
        className="portfolio-image"
        src={loruki}
        alt="Loruki Hosting website"
      />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
    </div>
  );

  const coffeShopProject = (
    <div className="portfolio-image-box">
      <img
        className="portfolio-image"
        src={coffeeShop}
        alt="E-commerce coffee shop"
      />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
    </div>
  );

  const clubxpProject = (
    <div className="portfolio-image-box">
      <img
        className="portfolio-image"
        src={clubxp}
        alt="Club XP nightlife app"
      />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
    </div>
  );

  const landingPageProject = (
    <div className="portfolio-image-box">
      <img
        className="portfolio-image"
        src={landingPage}
        alt="Personal landing page"
      />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
    </div>
  );

  return (
    <div
      id="portfolio"
      className="portfolio-wrapper"
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="container">
        <h1 className="text-center text-capitalize py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <Popup modal lockScroll trigger={lorukiProject}>
            <img
              className="popup-img"
              src={loruki}
              alt="Loruki Hosting website"
            />
          </Popup>
          {/* - */}
          <Popup modal trigger={coffeShopProject}>
            <img
              className="popup-img"
              src={coffeeShop}
              alt="e-commerce coffee shot"
            />
          </Popup>
          {/* - */}
          <Popup modal lockScroll trigger={clubxpProject}>
            <img
              className="popup-img"
              src={clubxp}
              alt="Club XP nightlife app"
            />
          </Popup>
          {/* - */}
          <Popup modal lockScroll trigger={landingPageProject}>
            <img className="popup-img" src={landingPage} alt="A landing page" />
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
