"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [positions, colors] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      positions.set([x, y, z], i * 3);

      // Mix between two neon colors based on z position
      const color1 = new THREE.Color("#00dfd8"); // Cyan
      const color2 = new THREE.Color("#7928ca"); // Purple
      const mixedColor = color1.clone().lerp(color2, (z + 5) / 10);
      colors.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;

    // Subtle parallax effect based on mouse
    const targetX = (mouse.x * viewport.width) / 20;
    const targetY = (mouse.y * viewport.height) / 20;

    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const CanvasBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
      {/* Dark gradient overlay to blend 3D with UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black pointer-events-none" />
    </div>
  );
};
