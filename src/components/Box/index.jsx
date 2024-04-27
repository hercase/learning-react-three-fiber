import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Box = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const mesh = useRef();
  const { scale } = useSpring({ scale: hovered ? 1.2 : 1 });
  const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    "/textures/Color.jpg",
    "/textures/Displacement.jpg",
    "/textures/Normal.jpg",
    "/textures/Roughness.jpg",
    "/textures/Metalness.jpg",
  ]);

  useFrame(() => {
    if (hovered) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.z += 0.01;
    }
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

export default Box;
