const Light = ({ color, position }) => {
  return <directionalLight intensity={2} color={color} position={position} />;
};

export default Light;
