//@ts-ignore
import * as THREE from "three";
import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere, Stars, Preload,OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../Loader";

const React = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      {/* <color attach="background" args={["black"]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        <Float speed={2} rotationIntensity={5} floatIntensity={12} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} isGroup={undefined}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Atom />
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </Float>
        {/* <Stars saturation={0} count={400} speed={0.5} /> */}
        {/* <EffectComposer> */}
        {/* </EffectComposer> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

function Atom(props: any) {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group {...props}>
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} fog={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} blending={undefined} transparent={undefined} alphaTest={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} isMaterial={undefined} needsUpdate={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} precision={undefined} premultipliedAlpha={undefined} forceSinglePass={undefined} dithering={undefined} side={undefined} shadowSide={undefined} toneMapped={undefined} version={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined} uniforms={undefined} vertexShader={undefined} fragmentShader={undefined} wireframeLinewidth={undefined} lights={undefined} clipping={undefined} derivatives={undefined} extensions={undefined} defaultAttributeValues={undefined} index0AttributeName={undefined} uniformsNeedUpdate={undefined} glslVersion={undefined} isShaderMaterial={undefined} format={undefined} />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, 1]} fog={undefined} toneMapped={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} blending={undefined} transparent={undefined} alphaTest={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} isMaterial={undefined} needsUpdate={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} precision={undefined} premultipliedAlpha={undefined} forceSinglePass={undefined} dithering={undefined} side={undefined} shadowSide={undefined} version={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined} uniforms={undefined} vertexShader={undefined} fragmentShader={undefined} wireframeLinewidth={undefined} lights={undefined} clipping={undefined} derivatives={undefined} extensions={undefined} defaultAttributeValues={undefined} index0AttributeName={undefined} uniformsNeedUpdate={undefined} glslVersion={undefined} isShaderMaterial={undefined} format={undefined}      />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, -1]} fog={undefined} toneMapped={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} blending={undefined} transparent={undefined} alphaTest={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} isMaterial={undefined} needsUpdate={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} precision={undefined} premultipliedAlpha={undefined} forceSinglePass={undefined} dithering={undefined} side={undefined} shadowSide={undefined} version={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined} uniforms={undefined} vertexShader={undefined} fragmentShader={undefined} wireframeLinewidth={undefined} lights={undefined} clipping={undefined} derivatives={undefined} extensions={undefined} defaultAttributeValues={undefined} index0AttributeName={undefined} uniformsNeedUpdate={undefined} glslVersion={undefined} isShaderMaterial={undefined} format={undefined}      />
      <Sphere args={[0.55, 64, 64]} material={undefined} geometry={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref:any = useRef();
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed;
      ref.current.position.set(
        Math.sin(t) * radius,
        (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
        0
      );
    }
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

export default React;
