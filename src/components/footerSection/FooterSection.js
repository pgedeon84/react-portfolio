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
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
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
