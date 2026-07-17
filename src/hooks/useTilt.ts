import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import type { VanillaTiltOptions } from 'vanilla-tilt';

export function useTilt<T extends HTMLElement>(options?: VanillaTiltOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, options);
    }
    
    const node = ref.current as any;
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return ref;
}
