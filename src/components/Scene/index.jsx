import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Light from "../Light";
import Box from "../Box";

const MAX_BOXES = 5;

const Scene = () => {
  const colorMap = useLoader(TextureLoader, "/textures/Color.jpg");
  const { scene } = useThree();
  const half = Math.floor(MAX_BOXES / 2);
  scene.background = colorMap;

  return (
    <>
      <Light color="cyan" position={[0, 2, 1]} />
      <Light color="magenta" position={[-3, -3, 0.5]} />
      <Light color="yellow" position={[3, 2, 1]} />
      {[...Array(MAX_BOXES)].map((_, index) => (
        <Box key={index} position={[-half + index, -half + index, 0]} />
      ))}
    </>
  );
};

export default Scene;
