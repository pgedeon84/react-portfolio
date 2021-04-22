import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Header from "./components/headerSection/HeaderSection";
import ReactParticles from "./utilities/ReactParticles";
import AboutMe from "./components/aboutMeSection/AboutMeSection";
import ServicesSection from "./components/servicesSection/ServicesSection";
import ExperienceSection from "./components/experienceSection/ExperienceSection";

function App() {
  return (
    <div>
      <Layout>
        <ReactParticles />
        <Header />
        <AboutMe />
        <ServicesSection />
        <ExperienceSection />
      </Layout>
    </div>
  );
}

export default App;
