import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function ExperienceSection() {
  return (
    <div
      id="experience"
      className="experience"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>
              I attended Le Wagon Coding Bootcamp where I first learned the
              basics and fundamentals of web development using HTML5, CSS3 and
              JavaScript. I also learned to use Ruby as a backend language
              implemented with the Rails framework using the MVC model.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              After attending the bootcamp, my thirst for coding and hunger to
              become an even better programmer let me to learn more. Which led
              me to the journey of learning a JavaScript framework. I was first
              introduced to ReactJS framework at school and decided to learn it
              more in depth. I watched YouTube videos for countless hours until
              I got a good understanding of the framework.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              ipsum. Eum alias repudiandae dicta. Cupiditate cumque quod hic
              veniam? Sit maxime libero nam commodi assumenda laboriosam enim
              mollitia ratione doloremque ad sint fugit reprehenderit porro
              similique quia, esse odio. Quidem.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-Current</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              ipsum. Eum alias repudiandae dicta. Cupiditate cumque quod hic
              veniam? Sit maxime libero nam commodi assumenda laboriosam enim
              mollitia ratione doloremque ad sint fugit reprehenderit porro
              similique quia, esse odio. Quidem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
