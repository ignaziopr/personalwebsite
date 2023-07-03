import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Dunk = () => {
  const dunk = useGLTF('./nike_dunk_low_panda/scene.gltf');

  return (
    <mesh>
      <directionalLight position={[0, 0.4, 0.4]} />
      <primitive object={dunk.scene} scale={2.5} rotation-x={0.25} rotation-y={-1.7} />
      <directionalLight position={[0, 0, -1]} />
      <directionalLight position={[1, 0, 0]} />
    </mesh>
  );
};

const DunkCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[4, 4]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 23,
        near: 0.2,
        far: 200,
        position: [-2, 5, 4],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <Dunk />

        <Preload all />
      </Suspense>
      <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
    </Canvas>
  );
};
/*
const FCanvas = () => {
  return (
    <div></div>
  );
};
*/
export default DunkCanvas;
