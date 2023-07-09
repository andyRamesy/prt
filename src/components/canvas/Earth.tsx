import React, { Suspense } from "react";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return(
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas camera={{
      fox:45,
      near:0.1,
      far:200,
      position:[-4,3,6]
    }} shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Earth/> 
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default EarthCanvas;
