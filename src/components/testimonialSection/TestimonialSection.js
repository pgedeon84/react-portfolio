import TestimonialCarousel from "./TestimonialCarousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function TestimonialSection() {
  return (
    <div
      id="testimonial"
      className="testimonial"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="container">
        <h1>Testimonials</h1>
        <div className="testimonial-content">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
