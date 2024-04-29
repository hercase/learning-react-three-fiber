import React from "react";

const Ground = () => {
  return (
    <mesh>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Ground;
