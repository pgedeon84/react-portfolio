import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <Layout>
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 5,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              shape: {
                type: "star",
                stroke: {
                  width: 3,
                  color: "#6A49Ca",
                },
              },
            },
          }}
        />
        <Header />
      </Layout>
    </div>
  );
}

export default App;
