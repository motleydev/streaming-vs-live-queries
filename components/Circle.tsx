import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

export default function Circle(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 1.5 : 1}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
