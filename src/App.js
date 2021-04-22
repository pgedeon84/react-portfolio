import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import ReactParticles from "./utilities/ReactParticles";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <div>
      <Layout>
        <ReactParticles />
        <Header />
        <AboutMe />
      </Layout>
    </div>
  );
}

export default App;
