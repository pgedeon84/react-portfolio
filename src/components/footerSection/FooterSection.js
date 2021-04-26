import { Link } from "react-scroll";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function FooterSection() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>
                4836 Palto Alto Silicon Valley
                <br /> San Francisco, California, 90210
              </p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">+1(555)555-5555</a>
            </div>
            <div className="d-flex">
              <p>webifi.contact@info.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-100}
                  to="home"
                  href="#"
                >
                  Home
                </Link>
                <br />
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-225}
                  to="about"
                  href="#"
                >
                  About me
                </Link>
                <br />
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-100}
                  to="services"
                  href="#"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-110}
                  to="experience"
                  href="#"
                >
                  Experience
                </Link>
                <br />
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-200}
                  to="portfolio"
                  href="#"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  className="footer-nav"
                  smooth={true}
                  offset={-100}
                  to="contact"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"www.patricegedeon.com"}
                quote={"Front-End Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"www.patricegedeon.com"}
                quote={"Front-End Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"www.patricegedeon.com"}
                quote={"Front-End Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <PinterestShareButton
                url={"www.patricegedeon.com"}
                quote={"Front-End Developer"}
                hashtag="#javascript"
              >
                <PinterestIcon className="mx-3" size={36} />
              </PinterestShareButton>
              <WhatsappShareButton
                url={"www.patricegedeon.com"}
                quote={"Front-End Developer"}
                hashtag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;| Webifi.io | All Rights Reserved
              ®
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
