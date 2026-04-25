'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Stars, 
  Text, 
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import { ABYSS_ZONES, AbyssZone } from '@/config/abyss-data';

const log = (msg: string) => {
  if (typeof window !== 'undefined') console.log(`[SCENE_STABLE] ${msg}`);
};

// ─── Data Stream ─────────────────────────────────────────────────────────────
function DataStream({ count = 200 }) {
  const points = useRef<THREE.Points>(null!);
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00ff41" size={0.15} />
    </points>
  );
}

// ─── Zone Layer ──────────────────────────────────────────────────────────────
function ZoneLayer({ zone, index }: { zone: AbyssZone, index: number }) {
  const height = 10;
  const yPos = -index * (height + 5);

  return (
    <group position={[0, yPos, 0]}>
      <mesh>
        <boxGeometry args={[18, height, 18]} />
        <meshBasicMaterial 
          color={zone.color}
          transparent
          opacity={0.5}
        />
      </mesh>
      <Text
        position={[9.5, 0, 9.5]}
        rotation={[0, Math.PI / 4, 0]}
        fontSize={1.5}
        color="white"
        anchorX="left"
      >
        {`${index}::${zone.name.toUpperCase()}`}
      </Text>
    </group>
  );
}

export default function AbyssScene() {
  useEffect(() => {
    log("Motor 3D em Modo de Segurança (Checkpoint Salvo)");
  }, []);

  return (
    <Canvas dpr={1}>
      <PerspectiveCamera makeDefault position={[35, 20, 35]} fov={50} />
      <color attach="background" args={['#050508']} />
      <ambientLight intensity={2} />
      <pointLight position={[20, 20, 20]} intensity={100} />

      {/* Cubo de Referência Absoluta (Se você ver isso, o Canvas está OK) */}
      <mesh position={[0, 20, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" />
      </mesh>

      <group position={[0, 10, 0]}>
        {ABYSS_ZONES.map((zone, i) => (
          <ZoneLayer key={zone.id} zone={zone} index={i} />
        ))}
        <DataStream count={300} />
      </group>

      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls target={[0, -10, 0]} />
    </Canvas>
  );
}
