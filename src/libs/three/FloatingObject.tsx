import React, { useRef } from 'react';
import { Mesh } from 'three';
import { Sphere } from '@react-three/drei';

interface FloatingObjectProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
}

const FloatingObject: React.FC<FloatingObjectProps> = ({
  position = [0, 0, 0],
  scale = 1,
  color = '#00d4ff',
  metalness = 0.7,
  roughness = 0.2,
}) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Sphere
      ref={meshRef}
      args={[1, 64, 64]}
      scale={scale}
      position={position}
    >
      <meshPhysicalMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
        envMapIntensity={1.5}
      />
    </Sphere>
  );
};

export default FloatingObject;