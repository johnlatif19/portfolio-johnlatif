import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import FloatingObject from './FloatingObject';
import Particles from './Particles';
import { usePerformance } from '@hooks/usePerformance';

interface HeroSceneProps {
  className?: string;
}

const HeroScene: React.FC<HeroSceneProps> = ({ className = '' }) => {
  const { isLowPerformance, isWebGLSupported } = usePerformance();

  const particleCount = useMemo(() => {
    if (isLowPerformance) return 200;
    return 500;
  }, [isLowPerformance]);

  const sphereScale = useMemo(() => {
    if (isLowPerformance) return 0.5;
    return 0.7;
  }, [isLowPerformance]);

  if (!isWebGLSupported) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-accent/20 to-transparent animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[0.5, 1.5]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[0, 3, 0]} intensity={0.5} color="#00d4ff" />
          
          <Environment preset="city" background={false} />
          
          <FloatingObject
            position={[0, 0, 0]}
            scale={sphereScale}
            color="#00d4ff"
            metalness={0.7}
            roughness={0.2}
          />
          
          <Particles
            count={particleCount}
            color="#00d4ff"
            size={0.02}
            radius={3}
          />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={false}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;