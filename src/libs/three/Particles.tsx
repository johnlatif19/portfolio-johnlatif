import React, { useRef, useMemo } from 'react';
import { Points } from 'three';

interface ParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  radius?: number;
}

const Particles: React.FC<ParticlesProps> = ({
  count = 500,
  color = '#00d4ff',
  size = 0.02,
  radius = 3,
}) => {
  const pointsRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * radius * 2;
    }
    return pos;
  }, [count, radius]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={2}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;