/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 doge.glb --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/doge-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Cylinder_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/doge-transformed.glb");
