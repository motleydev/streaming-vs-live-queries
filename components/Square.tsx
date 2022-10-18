import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements, Vector3, useThree } from "@react-three/fiber";
import { Box, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

type Props = {
  color: string;
  position: Vector3;
};

export default function Square({ color, position, ...props }: Props) {
  const { scene, viewport, size } = useThree();
  const { width, height } = viewport;

  const ref = useRef<THREE.Mesh>(null!);

  useHelper(ref, BoxHelper, "red");

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  const scale: number = width / 3;

  return (
    <Box
      args={[scale, scale, scale]}
      position={position}
      {...props}
      ref={ref}
      scale={hovered ? 1.5 : 1}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <ambientLight />
      <meshBasicMaterial color={color} />
    </Box>
  );
}
