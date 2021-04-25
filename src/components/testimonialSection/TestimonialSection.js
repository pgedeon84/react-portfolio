import TestimonialCarousel from "./TestimonialCarousel";

function TestimonialSection() {
  return (
    <div id="testimonial" className="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="testimonial-content">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
