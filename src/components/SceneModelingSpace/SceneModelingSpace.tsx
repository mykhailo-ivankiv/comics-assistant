import React from "react";
import {
  Scene,
  Color,
  Fog,
  HemisphereLight,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";

const SceneModelingSpace = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  React.useEffect(() => {
    init();
  }, []);

  // @ts-ignore
  const renderer = new WebGLRenderer({ antialias: true });
  const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.61);

  const init = () => {
    hemiLight.position.set(0, 50, 0);

    scene.background = new Color(0xf1f1f1);
    scene.fog = new Fog(0xf1f1f1, 60, 100);
    scene.add(hemiLight);

    camera.position.z = 30;
    camera.position.x = 0;
    camera.position.y = -3;

    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);

    var geometry = new BoxGeometry(1, 1, 1);
    var material = new MeshBasicMaterial({ color: "000000" });
    var cube = new Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 10;
    camera.position.y = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  };

  const update = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(update);
  };

  return <div />;
};

export default SceneModelingSpace;
