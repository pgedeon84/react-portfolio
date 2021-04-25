import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";

function TestimonialCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="testimonial avatar" />
        <div className="carousel-content">
          <h3>Jane Doe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            laudantium earum illo neque dolorem harum ipsam quae cumque, itaque
            error hic, molestiae ratione odit quasi autem consectetur enim!
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="testimonial avatar" />
        <div className="carousel-content">
          <h3>Rashawd Doe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            inventore corrupti corporis doloribus incidunt aut dolore facilis
            necessitatibus? Dolor aspernatur necessitatibus dolore at nemo?
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="testimonial avatar" />
        <div className="carousel-content">
          <h3>Janet Dough</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            possimus sit molestias odit beatae ea excepturi! Vel illum eius
            iure.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="testimonial avatar" />
        <div className="carousel-content">
          <h3>Wang Dough</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatum ratione reiciendis nemo, quasi tempora dolores,
            repellendus provident eius quibusdam optio fuga, at omnis neque
            quisquam deleniti adipisci itaque consectetur.
          </p>
        </div>
      </>
      <>
        <img src={avatar5} alt="testimonial avatar" />
        <div className="carousel-content">
          <h3>José Douje</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            possimus sit molestias odit beatae ea excepturi! Vel illum eius
            iure.
          </p>
        </div>
      </>
    </Carousel>
  );
}

export default TestimonialCarousel;
