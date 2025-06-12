
import { Canvas } from '@react-three/fiber';
import { useRef, Suspense, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometry = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial 
        color={color} 
        transparent
        opacity={0.8}
        shininess={100}
      />
    </mesh>
  );
};

const Bubble = ({ initialPosition, mousePosition }: { initialPosition: [number, number, number], mousePosition: { x: number, y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = useRef(Math.random() * 0.5 + 0.3);
  const wobble = useRef(Math.random() * 2 + 1);
  const size = useRef(Math.random() * 0.3 + 0.1);
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Calculate mouse influence
      const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
      const mouseWorldX = mouseX * viewport.width / 2;
      const mouseWorldY = mouseY * viewport.height / 2;
      
      // Calculate distance to mouse
      const distance = Math.sqrt(
        Math.pow(meshRef.current.position.x - mouseWorldX, 2) + 
        Math.pow(meshRef.current.position.y - mouseWorldY, 2)
      );
      
      // Move bubble upward
      meshRef.current.position.y += speed.current * 0.01;
      
      // Add wobble effect with mouse influence
      const mouseInfluence = Math.max(0, 1 - distance / 3);
      const wobbleStrength = 0.5 + mouseInfluence * 2;
      
      meshRef.current.position.x = initialPosition[0] + 
        Math.sin(state.clock.elapsedTime * wobble.current) * wobbleStrength +
        (mouseWorldX - meshRef.current.position.x) * mouseInfluence * 0.1;
      
      meshRef.current.position.z = initialPosition[2] + 
        Math.cos(state.clock.elapsedTime * wobble.current * 0.7) * 0.3;
      
      // Reset bubble when it goes too high
      if (meshRef.current.position.y > 10) {
        meshRef.current.position.y = -10;
        meshRef.current.position.x = (Math.random() - 0.5) * 20;
        meshRef.current.position.z = (Math.random() - 0.5) * 10;
      }
      
      // Scale based on mouse proximity
      const baseScale = size.current;
      const scaleMultiplier = 1 + mouseInfluence * 0.5;
      meshRef.current.scale.setScalar(baseScale * scaleMultiplier);
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition} scale={size.current}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhongMaterial 
        color="#ffffff"
        transparent
        opacity={0.4}
        shininess={100}
      />
    </mesh>
  );
};

const BubbleField = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const bubbles = [];
  
  // Create 25 bubbles with random positions
  for (let i = 0; i < 25; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = Math.random() * 20 - 10;
    const z = (Math.random() - 0.5) * 10;
    
    bubbles.push(
      <Bubble key={i} initialPosition={[x, y, z]} mousePosition={mousePosition} />
    );
  }
  
  return <>{bubbles}</>;
};

const Scene = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#90EE90" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#32CD32" />
      
      <FloatingGeometry position={[-4, 2, -2]} color="#228B22" scale={0.8} />
      <FloatingGeometry position={[4, -2, -3]} color="#32CD32" scale={1.2} />
      <FloatingGeometry position={[2, 3, -4]} color="#90EE90" scale={0.6} />
      <FloatingGeometry position={[-3, -1, -1]} color="#00FF00" scale={0.9} />
      <FloatingGeometry position={[0, -3, -5]} color="#ADFF2F" scale={0.7} />
      
      <BubbleField mousePosition={mousePosition} />
    </>
  );
};

const ThreeBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div 
      className="absolute inset-0 -z-10"
      onMouseMove={(e) => handleMouseMove(e.nativeEvent)}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#228B22', 0.3);
        }}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
