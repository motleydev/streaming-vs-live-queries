import { Box, Cone, Environment, Line, Sphere } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import Square from "./Square";

type Props = {};

const RED = "#ff7373";
const GREEN = "#bada55";
const BLUE = "#00ffff";
const YELLOW = "#ffd700";
const BLACK = "#666666";

export default function PlayStage({}: Props) {
  const { scene, viewport, size } = useThree();
  const { width, height } = viewport;
  const scale: number = ((width - 2) / 3) * 0.6;

  const squareRef = useRef<THREE.Mesh>(null!);
  const circleRef = useRef<THREE.Mesh>(null!);
  const triangleRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    squareRef.current.rotation.y += 0.025;
    circleRef.current.rotation.y += 0.025;
    triangleRef.current.rotation.y += 0.025;
  });

  return (
    <>
      <pointLight position={[-3, 3, 0]} />
      <spotLight intensity={0.5} position={[300, 300, 4000]} />
      {true && <Sphere position={[0, 0, 0]} />}
      <group position={[0, (height / 2 - scale - 0.5) * -1, 0]}>
        <Box
          castShadow={true}
          ref={squareRef}
          args={[scale, scale, scale]}
          position={[(width / 3) * -1, 0, 0]}
          //   onPointerOver={(event) => hover(true)}
          //   onPointerOut={(event) => hover(false)}
        >
          <ambientLight />
          <meshBasicMaterial color={RED} />
        </Box>
        <Sphere ref={circleRef} position={[0, 0, 0]} />
        <Cone
          ref={triangleRef}
          position={[width / 3, 0, 0]}
          args={[scale * 0.8, scale]}
        />
      </group>
    </>
  );
}
