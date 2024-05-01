import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Light from "./Light";
import Box from "./Box";
import Ground from "./Ground";
import { Environment, Helper, OrbitControls, PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { SpotLightHelper } from "three";
import Fennec from "./Fennec";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 30], fov: 35 }}>
      <ambientLight intensity={0.8} color="white" />

      <ScrollControls pages={3} damping={0.5}>
        <Fennec scale={0.1} position={[0, 0, 0]} rotation={[0, -0.9, -0.07]} />
        <Ground />
      </ScrollControls>
      <OrbitControls target={[0, 2, 0]} enableZoom={false} enableRotate={false} />

      <Environment files="hdr/snowy_park_01_1k.hdr" />
    </Canvas>
  );
};

export default Scene;
