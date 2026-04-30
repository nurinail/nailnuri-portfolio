"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// Floating sphere with distortion
function FloatingSphere({ position, color, size = 1, speed = 1 }: { 
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.2}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

// Glowing torus ring
function GlowingTorus({ position, color, size = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[size, size * 0.15, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </Float>
  );
}

// Floating cube with wireframe
function FloatingCube({ position, color, size = 0.8 }: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && wireRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      wireRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      wireRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1}>
      <group position={position}>
        <Box ref={meshRef} args={[size, size, size]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.3}
            metalness={0.5}
            roughness={0.2}
          />
        </Box>
        <Box ref={wireRef} args={[size * 1.01, size * 1.01, size * 1.01]}>
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
      </group>
    </Float>
  );
}

// Icosahedron with glow effect
function GlowingIcosahedron({ position, color, size = 0.6 }: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[size, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
          flatShading
        />
      </Icosahedron>
    </Float>
  );
}

// Particle field
function ParticleField({ count = 100 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Mouse-reactive camera movement
function CameraRig() {
  const { camera } = useThree();
  const mousePosition = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (typeof window !== "undefined") {
      const targetX = mousePosition.current.x * 0.5;
      const targetY = mousePosition.current.y * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (targetY - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
    }
  });

  // Add mouse event listener
  useMemo(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        mousePosition.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mousePosition.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return null;
}

// Main 3D scene for hero
export function HeroScene3D() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[5, -5, 5]} intensity={0.4} color="#22D3EE" />
        
        {/* Main floating shapes */}
        <FloatingSphere position={[-3, 1.5, -2]} color="#8B5CF6" size={0.8} />
        <FloatingSphere position={[3.5, -1, -3]} color="#22D3EE" size={0.6} />
        <FloatingSphere position={[0, 2.5, -4]} color="#A78BFA" size={0.5} />
        
        <GlowingTorus position={[-2.5, -1.5, -2]} color="#8B5CF6" size={0.6} />
        <GlowingTorus position={[2, 2, -3]} color="#22D3EE" size={0.4} />
        
        <FloatingCube position={[4, 0.5, -2]} color="#A78BFA" size={0.6} />
        <FloatingCube position={[-4, -0.5, -4]} color="#8B5CF6" size={0.5} />
        
        <GlowingIcosahedron position={[1, -2, -2]} color="#22D3EE" size={0.5} />
        <GlowingIcosahedron position={[-1, 1, -3]} color="#8B5CF6" size={0.4} />
        
        {/* Particle field */}
        <ParticleField count={150} />
        
        {/* Camera movement based on mouse */}
        <CameraRig />
      </Canvas>
    </div>
  );
}

// Smaller background scene for other sections
export function BackgroundScene3D() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.2]}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[-10, 10, -10]} intensity={0.3} color="#8B5CF6" />
        <pointLight position={[10, -10, 10]} intensity={0.2} color="#22D3EE" />
        
        {/* Subtle background particles */}
        <ParticleField count={80} />
        
        {/* Very subtle floating shapes */}
        <FloatingSphere position={[-6, 4, -8]} color="#8B5CF6" size={0.4} speed={0.3} />
        <FloatingSphere position={[7, -3, -10]} color="#22D3EE" size={0.3} speed={0.4} />
        <GlowingTorus position={[0, 5, -12]} color="#A78BFA" size={0.5} />
      </Canvas>
    </div>
  );
}
