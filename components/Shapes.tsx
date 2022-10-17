import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import PlayStage from "./PlayStage";
import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from "@react-three/drei";

export const MARGIN = new Number(0.6);

export default function Shapes() {
  const canvasRef = useRef(null);

  return (
    <div className="h-2/3 bg-red-100" ref={canvasRef}>
      <Canvas shadows>
        <pointLight position={[0, 10, 0]} intensity={1.5} />
        <PlayStage />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
