import {
  faImages,
  faNetworkWired,
  faStore,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ServicesSection() {
  return (
    <div className="services">
      <h1 className="py-5">How can I help you?</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>Bring your imagination into fruition...</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
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
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faImages} size="2x" />
              </div>
              <h3>Company Portfolio</h3>
              <p>Grow your brand by Globalizing your Work.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
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
