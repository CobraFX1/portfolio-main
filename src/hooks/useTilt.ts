import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  transition?: boolean;
  glare?: boolean;
  'max-glare'?: number;
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const tiltRef = useRef<T>(null);

  useEffect(() => {
    // Only enable on non-touch devices for performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 150,
        transition: true,
        glare: true,
        'max-glare': 0.3,
        ...options,
      });
    }

    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
}
