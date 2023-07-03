import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Soccer = () => {
  const soccer = useGLTF('./brazuca_ball/scene.gltf');

  return (
    <mesh>
      <directionalLight position={[0, 0.65, 0.65]} />
      <primitive object={soccer.scene} scale={2.5} rotation-x={0.25} rotation-y={-1.7} />
      <directionalLight position={[0.65, 0, 0.65]} />
      <directionalLight position={[0.65, 0.65, 0]} />
      <ambientLight intensity={0.35} />
    </mesh>
  );
};

const SoccerCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[4, 4]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 110,
        near: 0.4,
        far: 200,
        position: [40, 40, 40],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <Soccer />

        <Preload all />
      </Suspense>
      <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
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
export default SoccerCanvas;