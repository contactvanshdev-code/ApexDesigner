"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
  Sphere,
  Stars,
  TorusKnot
} from "@react-three/drei";
import * as THREE from "three";

function KineticCore() {
  const torusKnotRef = useRef<THREE.Mesh>(null!);
  const shellRef = useRef<THREE.Mesh>(null!);
  const pulseRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (groupRef.current) {
      groupRef.current.position.x = 1.8 + Math.sin(time * 0.55) * 0.34;
      groupRef.current.position.y = Math.sin(time * 0.28) * 0.18;
      groupRef.current.position.z = Math.cos(time * 0.42) * 0.48;
    }

    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = time * 0.22 + y * 0.6;
      torusKnotRef.current.rotation.y = time * 0.12 + x * 0.6;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y = time * -0.17 + x * -0.5;
      shellRef.current.rotation.z = time * 0.11 + y * 0.4;
      const scalePulse = 1 + Math.sin(time * 2.2) * 0.03;
      shellRef.current.scale.setScalar(scalePulse);
    }

    if (pulseRef.current) {
      pulseRef.current.rotation.x = time * 0.62;
      pulseRef.current.rotation.z = time * 0.43;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
        <TorusKnot args={[1.1, 0.33, 230, 30]} ref={torusKnotRef}>
          <MeshTransmissionMaterial
            backside={false}
            samples={8}
            transmission={1}
            roughness={0.04}
            clearcoat={1}
            clearcoatRoughness={0}
            thickness={0.95}
            ior={1.2}
            chromaticAberration={0.3}
            anisotropy={0.24}
            distortion={0.2}
            distortionScale={0.6}
            temporalDistortion={0.08}
            color="#b8edff"
          />
        </TorusKnot>

        <Sphere args={[0.86, 48, 48]} ref={shellRef}>
          <meshStandardMaterial
            color="#0f1e3e"
            metalness={0.35}
            roughness={0.2}
            emissive="#59dfff"
            emissiveIntensity={0.16}
            transparent
            opacity={0.3}
          />
        </Sphere>

        <Sphere args={[0.49, 64, 64]} ref={pulseRef}>
          <MeshDistortMaterial
            color="#5fe7ff"
            emissive="#8df9a7"
            emissiveIntensity={1.5}
            speed={3.2}
            distort={0.38}
            radius={1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function ParticleField() {
  const particleRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (particleRef.current) {
      particleRef.current.rotation.x = -y * 0.08;
      particleRef.current.rotation.y = x * 0.08;
    }
  });

  return (
    <group ref={particleRef}>
      <Sparkles count={250} scale={14} size={2.5} speed={0.2} opacity={0.45} color="#8edcf5" />
      <Sparkles count={70} scale={8} size={4} speed={0.65} opacity={0.8} color="#f5fff8" />
    </group>
  );
}

export default function ImmersiveScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 34 }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.45}
          maxPolarAngle={Math.PI * 0.66}
          minPolarAngle={Math.PI * 0.36}
        />

        <Environment preset="night" />
        <color attach="background" args={["#050912"]} />

        <Stars radius={90} depth={40} count={1300} factor={3.2} saturation={0} fade speed={0.7} />
        <KineticCore />
        <ParticleField />

        <spotLight position={[9, 10, 8]} angle={0.46} penumbra={1} intensity={230} color="#5fe7ff" />
        <pointLight position={[-10, -9, -8]} intensity={120} color="#8df9a7" />
        <pointLight position={[0, 6, -8]} intensity={80} color="#ffc670" />
      </Canvas>
    </div>
  );
}
