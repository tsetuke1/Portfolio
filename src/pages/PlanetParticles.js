// PlanetParticles.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSphere = ({ count = 1500 }) => {
  const meshRef = useRef();
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Start randomly spread
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  });

  const [targetPositions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 2.5;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const easeOutCubic = (t) => --t * t * t + 1;
    const t = Math.min(easeOutCubic(Math.min(time / 10, 1)), 1); // Smooth 6s

    const posAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < count * 3; i++) {
      posAttr.array[i] = THREE.MathUtils.lerp(
        positions[i],
        targetPositions[i],
        t
      );
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.y += 0.0012; // subtle cinematic spin
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
};

const PlanetParticles = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: -250,
        width: "50%",
        height: "100%",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight />
        <ParticleSphere />
      </Canvas>
    </div>
  );
};

export default PlanetParticles;
