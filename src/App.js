import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Header from "./components/headerSection/HeaderSection";
import ReactParticles from "./utilities/ReactParticles";
import AboutMe from "./components/aboutMeSection/AboutMeSection";
import ServicesSection from "./components/servicesSection/ServicesSection";
import ExperienceSection from "./components/experienceSection/ExperienceSection";
import PortfolioSection from "./components/portfolioSection/PortfolioSection";
import TestimonialSection from "./components/testimonialSection/TestimonialSection";

function App() {
  return (
    <div>
      <Layout>
        <ReactParticles />
        <Header />
        <AboutMe />
        <ServicesSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialSection />
      </Layout>
    </div>
  );
}

export default App;
