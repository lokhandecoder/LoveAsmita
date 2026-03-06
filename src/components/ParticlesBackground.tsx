import Particles from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        particles: {
          number: { value: 30 },
          shape: {
            type: "char",
            options: {
              char: {
                value: "❤",
                font: "Verdana",
                weight: "400",
              },
            },
          },
          size: { value: 16 },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
