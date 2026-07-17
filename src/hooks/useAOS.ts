import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOS() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);
}
