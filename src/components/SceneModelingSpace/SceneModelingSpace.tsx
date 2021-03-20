import React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Box } from "../Box";

const SceneModelingSpace = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  );
};

export default SceneModelingSpace;
