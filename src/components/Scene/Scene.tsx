import React from "react";
import { Canvas } from "react-three-fiber";
import { Box } from "../Box";

import "./Scene.css";

const Scene = () => {
  return (
    <Canvas shadowMap camera={{ position: [0, 0, 10] }} className="canvas">
      <ambientLight intensity={0.5} />
      <pointLight position={[1, -10, -10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Scene;
