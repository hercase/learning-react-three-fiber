import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Suspense } from "react";

const Box = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const mesh = useRef();
  const { scale } = useSpring({ scale: hovered ? 1.5 : 1 });
  const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    "/textures/Color.jpg",
    "/textures/Displacement.jpg",
    "/textures/Normal.jpg",
    "/textures/Roughness.jpg",
    "/textures/Metalness.jpg",
  ]);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <animated.mesh
      ref={mesh}
      scale={scale}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshStandardMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
      />
    </animated.mesh>
  );
};

const Light = ({ color, position }) => {
  const light = useRef();

  useFrame(() => {
    light.current.position.x += 0.01;
    light.current.position.y += 0.01;

    if (light.current.position.x > 4) {
      light.current.position.x = -4;
      light.current.position.y = -4;
    }
  });

  return <pointLight ref={light} intensity={1} color={color} position={position} />;
};

function Scene() {
  const colorMap = useLoader(TextureLoader, "/textures/Color.jpg");

  const { scene } = useThree();

  scene.background = colorMap;

  return (
    <>
      <ambientLight intensity={0.2} />
      <Light color="cyan" position={[-1, -1, 1.5]} />
      <Light color="magenta" position={[0, 0, 1.5]} />
      <Light color="yellow" position={[1, 1, 1.5]} />
      <Light color="cyan" position={[-2, -1, 1.5]} />
      <Light color="magenta" position={[0, 0, 1.5]} />
      <Light color="yellow" position={[2, 1, 1.5]} />
      {[...Array(5)].map((_, index) => (
        <Box key={index} position={[-2 + index, -2 + index, 0]} />
      ))}
    </>
  );
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
