import React, { Suspense } from "react";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Canvas, useFrame } from "@react-three/fiber";
// import * as from "maath/random/dist/maath-random.esm"

const Stars = () => {
  return <div>Stars</div>;
};

const StarCanvas = () => {
  return(
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{position: [0,0,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
}

export default Stars;
