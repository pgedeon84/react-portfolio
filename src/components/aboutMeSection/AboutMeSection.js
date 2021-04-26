import React from "react";
import author from "../../assets/images/me.JPG";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function AboutMeSection() {
  return (
    <div
      id="about"
      className="container about-me"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div className="photo-wrapper">
            <img className="profile-img" src={author} alt="Avatar" />
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, welcome to Webify.io! I build websites for clients who are
            looking to expand their brands and enter the world of internet
            marketing and promotions, all while selling their products or
            services online with e-commerce.
            <br />
            <br />
            I use the latest technologies to implement cutting edge designs with
            a modern UX/UI to provide the best user experience on mobile devices
            and laptop or desktops.
            <br />
            <br />
            Before begining to develop any Business website, landing page, web
            app or E-Commerce store, I will design a sketch of what you desire
            which meets your business needs and requirements.
            <br />
            <br />I will discuss all the details of your niche with you and
            conduct a survey with all of your competitors to make a list of
            their advantages and disadvantages. I do this to provide your
            potential customers something that your competitors do not provide
            and to increases the chance of them returning!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
