import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Vanta's npm package assigns itself to window.VANTA and expects THREE globally.
// We import the module and use its .default export which is the NET effect function.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let VANTA_NET: any = null;

export function useVanta<T extends HTMLElement>(isDark: boolean) {
  const ref = useRef<T>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Vanta so it can find THREE
    if (!vantaEffect && ref.current && !VANTA_NET) {
      // Make THREE available globally for Vanta
      (window as any).THREE = THREE;

      import('vanta/dist/vanta.net.min')
        .then((mod) => {
          VANTA_NET = mod.default || mod;
          if (typeof VANTA_NET === 'function' && ref.current) {
            const effect = VANTA_NET({
              el: ref.current,
              THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: isDark ? 0x818cf8 : 0x4f46e5,
              backgroundColor: isDark ? 0x0a0a0a : 0xfafafa,
              backgroundAlpha: 0.0,
              points: 12.0,
              maxDistance: 20.0,
              spacing: 20.0,
              showDots: true,
            });
            setVantaEffect(effect);
          }
        })
        .catch((err) => {
          console.warn('Vanta.js failed to load — 3D background will not be available', err);
        });
    } else if (!vantaEffect && ref.current && VANTA_NET) {
      // Module already loaded from a previous mount
      try {
        const effect = VANTA_NET({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: isDark ? 0x818cf8 : 0x4f46e5,
          backgroundColor: isDark ? 0x0a0a0a : 0xfafafa,
          backgroundAlpha: 0.0,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 20.0,
          showDots: true,
        });
        setVantaEffect(effect);
      } catch (err) {
        console.warn('Vanta.js initialization failed', err);
      }
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update colors when theme changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        backgroundColor: isDark ? 0x0a0a0a : 0xfafafa,
        color: isDark ? 0x818cf8 : 0x4f46e5,
      });
    }
  }, [isDark, vantaEffect]);

  return ref;
}
