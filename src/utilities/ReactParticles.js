import React from "react";
import Particles from "react-particles-js";

function ReactParticles() {
  return (
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
  );
}

export default ReactParticles;
