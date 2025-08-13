import { Canvas, useFrame } from "@react-three/fiber";
import { HeroText } from "../components/HeroText.jsx";
import { ParallaxBg } from "../components/ParallaxBg.jsx";
import { Astronaut } from "../components/astronaut.jsx";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "../components/Loader.jsx";

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space" id="home">
      <HeroText />
      <ParallaxBg />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader/>}>
            <Float>
              <Astronaut
                scale={isMobile && 0.2}
                position={isMobile && [0, -1.7, 0]}
              />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / -10, 1 + state.mouse.y / -10, 3],
      0.5,
      delta
    );
  });
}
