import {
  Billboard,
  OrbitControls,
  SpotLight,
  Stars,
  Text,
  Text3D,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Light = () => {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.SpotLightHelper, "cyan");

  return (
    <>
      <ambientLight intensity={1} />
      <SpotLight
        ref={lightRef}
        position={[-1, 3.5, 0]}
        angle={0.3}
        intensity={500}
        color={"blue"}
        decay={2}
      />
    </>
  );
};

const TextEle = () => {
  return (
    <Billboard position={[0, 0, -6.3]} scale={[3, 3, 3]}>
      <Text
        color="white"
        fontSize={0.4}
        fontWeight={"bold"}
        maxWidth={100}
        lineHeight={1}
      >
        SpaceX Falcon 9
      </Text>
    </Billboard>
  );
};

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 2, 4],
        fov: 70,
        near: 0.1,
        far: 1000,
      }}
    >
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Light />
      <Scene scale={0.3} />
      <TextEle />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </Canvas>
  );
};

export default App;
