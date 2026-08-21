import { useState, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fps: number;
  isLowPerformance: boolean;
  deviceMemory?: number;
  isWebGLSupported: boolean;
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    isLowPerformance: false,
    deviceMemory: undefined,
    isWebGLSupported: true,
  });

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const isWebGLSupported = !!gl;

    // Check device memory
    let deviceMemory: number | undefined;
    if ('deviceMemory' in navigator) {
      deviceMemory = (navigator as any).deviceMemory;
    }

    // Check if low performance mode should be enabled
    const isLowPerformance = 
      !isWebGLSupported || 
      (deviceMemory !== undefined && deviceMemory < 4) ||
      window.matchMedia('(prefers-reduced-data: reduce)').matches;

    setMetrics(prev => ({
      ...prev,
      isWebGLSupported,
      deviceMemory,
      isLowPerformance,
    }));

    // FPS counter
    let animationFrameId: number;

    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      const delta = currentTime - lastTime.current;

      if (delta >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / delta);
        setMetrics(prev => ({
          ...prev,
          fps,
          isLowPerformance: prev.isLowPerformance || fps < 30,
        }));
        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return metrics;
};