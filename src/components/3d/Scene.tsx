import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { Mesh } from 'three';

export default function Scene() {
  const sphereRef = useRef<Mesh>(null);
  const AnimatedSphere = animated(Sphere);

  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere ref={sphereRef} args={[1, 64, 64]} scale={scale}>
        <MeshDistortMaterial
          color="#4B0082"
          attach="material"
          distort={0.3}
          speed={2}
        />
      </AnimatedSphere>
    </>
  );
}