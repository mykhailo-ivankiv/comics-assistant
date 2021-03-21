import React, { useRef, useState } from "react";
import { useThree, Vector3 } from "react-three-fiber";
import { useGesture } from "react-use-gesture";

interface Box {
  position: Vector3 | undefined;
}

export const Box: React.FC<Box> = props => {
  const mesh = useRef(null);
  // TODO fix Z control deviation
  // TODO fix mesh ts-ignore

  const [isZcontrolOn, setIsZControlOn] = useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", e => {
      // if key = 'Z'
      if (e.keyCode === 90) {
        setIsZControlOn(true);
      }
    });
    document.addEventListener("keyup", () => setIsZControlOn(false));
  }, []);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (mesh.current) {
        if (isZcontrolOn) {
          // @ts-ignore
          mesh.current.position.z = y / aspect;
        } else {
          // @ts-ignore
          mesh.current.position.x = x / aspect;
          // @ts-ignore
          mesh.current.position.y = -y / aspect;
        }
      }
    }
  });

  return (
    <>
      <mesh castShadow ref={mesh} scale={[1, 1, 1]} {...bind()}>
        <boxBufferGeometry args={[1, 1]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
};
