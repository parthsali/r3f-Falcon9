import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Scene(props) {
  const { nodes, materials } = useGLTF("../models/scene.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -6.3]} rotation={[0.2, -0.5, 0.6]} scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet002.geometry}
            material={materials.scene}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet003.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../models/scene.glb");
