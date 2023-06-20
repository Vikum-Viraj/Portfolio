import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, RenderTexture, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1}/>
     <mesh>
    <boxGeometry args={[1,1,1]}/>
    <meshStandardMaterial>
      <RenderTexture>
        <color attach="background" args={["pink"]}/>
      </RenderTexture>
    </meshStandardMaterial>
     </mesh>
    </Canvas>
  );
};

export default EarthCanvas;