"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function HomeModel() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.06;
    }
  });
  return <group ref={group}>
    <mesh position={[0, 0.15, 0]} castShadow>
      <boxGeometry args={[2.15, 1.45, 1.55]} />
      <meshStandardMaterial color="#f8edda" roughness={0.82} />
    </mesh>
    <mesh position={[0, 1.05, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
      <coneGeometry args={[1.65, 1.15, 4]} />
      <meshStandardMaterial color="#a85d47" roughness={0.8} />
    </mesh>
    <mesh position={[0, -0.2, 0.79]} castShadow>
      <boxGeometry args={[0.43, 0.85, 0.06]} />
      <meshStandardMaterial color="#d7a66b" />
    </mesh>
    {[-0.63, 0.63].map((x) => <mesh key={x} position={[x, 0.35, 0.79]}>
      <boxGeometry args={[0.37, 0.37, 0.065]} />
      <meshStandardMaterial color="#d9a08c" emissive="#d9a08c" emissiveIntensity={0.12} />
    </mesh>)}
    <mesh position={[1.35, -0.15, -0.35]} castShadow>
      <cylinderGeometry args={[0.13, 0.18, 0.8, 8]} />
      <meshStandardMaterial color="#a8754f" />
    </mesh>
    <mesh position={[1.35, 0.48, -0.35]} castShadow>
      <sphereGeometry args={[0.57, 20, 20]} />
      <meshStandardMaterial color="#c27a61" roughness={0.9} />
    </mesh>
    <mesh position={[-1.35, -0.15, -0.2]} castShadow>
      <cylinderGeometry args={[0.12, 0.17, 0.75, 8]} />
      <meshStandardMaterial color="#a8754f" />
    </mesh>
    <mesh position={[-1.35, 0.43, -0.2]} castShadow>
      <sphereGeometry args={[0.48, 20, 20]} />
      <meshStandardMaterial color="#d0967d" roughness={0.9} />
    </mesh>
  </group>;
}

export default function HeroScene() {
  return <div className="scene-shell" aria-label="Animated 3D illustration of a welcoming home and garden" role="img">
    <Canvas camera={{ position: [4, 3.1, 5.8], fov: 36 }} dpr={[1, 1.5]} shadows>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 7, 5]} intensity={2.2} castShadow />
      <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.22}>
        <HomeModel />
      </Float>
      <Float speed={1.8} floatIntensity={0.3}>
        <mesh position={[-2.1, 1.4, 0.4]}><sphereGeometry args={[0.19, 24, 24]} /><meshStandardMaterial color="#e5b66f" roughness={0.4} /></mesh>
      </Float>
      <Float speed={1.4} floatIntensity={0.22}>
        <mesh position={[2.2, 1.55, 0.1]}><dodecahedronGeometry args={[0.22, 0]} /><meshStandardMaterial color="#d98f78" roughness={0.55} /></mesh>
      </Float>
      <ContactShadows position={[0, -1.05, 0]} opacity={0.25} scale={7} blur={2.4} />
      <Environment preset="apartment" />
    </Canvas>
  </div>;
}
