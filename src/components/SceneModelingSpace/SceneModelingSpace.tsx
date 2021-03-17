import React from "react";
import {
  Scene,
  Color,
  Fog,
  HemisphereLight,
  WebGLRenderer,
  PerspectiveCamera
} from "three";

const SceneModelingSpace = () => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  const init = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // @ts-ignore
    const renderer = new WebGLRenderer({ canvas, antialias: true });

    let hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.61);

    hemiLight.position.set(0, 50, 0);

    scene.background = new Color(0xf1f1f1);
    scene.fog = new Fog(0xf1f1f1, 60, 100);
    scene.add(hemiLight);

    camera.position.z = 30;
    camera.position.x = 0;
    camera.position.y = -3;

    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);
  };

  return (
    <>
      Space for magic
      <canvas ref={canvas} className="canvas" id="model-space" />
    </>
  );
};

export default SceneModelingSpace;
