// src/Data/particals.jsx
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#3b82f6" }, // blue
          shape: { type: "star" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1.5, outModes: "bounce" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 120 } },
        },
      }}
    />
  );
}
