import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null);
  const particleCount = 3000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [particleCount]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d9ff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AISphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      <Sphere ref={glowRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.8}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
}

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.sin(angle * 2) * 2,
        ] as [number, number, number],
        scale: 0.1 + Math.random() * 0.1,
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position}>
          <boxGeometry args={[cube.scale, cube.scale, cube.scale]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00d9ff" : "#a855f7"}
            emissive={i % 2 === 0 ? "#00d9ff" : "#a855f7"}
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export const EnhancedNeuralBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        <NeuralParticles />
        <AISphere />
        <FloatingCubes />
      </Canvas>
    </div>
  );
};
