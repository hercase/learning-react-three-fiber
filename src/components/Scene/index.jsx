import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Light from "../Light";
import Box from "../Box";

const Scene = () => {
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
};

export default Scene;
