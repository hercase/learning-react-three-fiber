import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

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

export default Light;
