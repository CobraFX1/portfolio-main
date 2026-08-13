import { useVanta } from '../hooks/useVanta';
import { useTheme } from '../hooks/useTheme';
import { useEffect } from 'react';

function BackgroundEffects() {
  const { isDark } = useTheme();
  const vantaRef = useVanta<HTMLDivElement>(isDark);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center (-1 to 1)
      targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    let time = 0;

    const animate = () => {
      time += 0.002;
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const elements = document.querySelectorAll('.bg-parallax');
      elements.forEach((el, index) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        
        // Continuous drifting even without mouse input
        const driftX = Math.sin(time + index * 1.5) * 80 * speed;
        const driftY = Math.cos(time * 0.8 + index * 2) * 80 * speed;

        const x = currentX * speed * 50 + driftX; 
        const y = currentY * speed * 50 + driftY;
        
        (el as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isDark]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        {/* Colorful Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob dark:opacity-10"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-bold rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-dark rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
        
        {/* 3D Floating Elements (Dark Mode) */}
        {isDark && (
          <div className="absolute inset-0 mix-blend-screen opacity-80 filter brightness-110">
            <div data-speed="1.5" className="bg-parallax absolute -top-10 -right-20 w-[400px] h-[400px]">
              <img src="/assets/3d/bg_orb_1786475373909.jpg" alt="" className="w-full h-full object-cover animate-float-slow" />
            </div>
            <div data-speed="-1" className="bg-parallax absolute top-1/3 -left-32 w-[500px] h-[500px]">
              <img src="/assets/3d/bg_torus_1786475384204.jpg" alt="" className="w-full h-full object-cover animate-float-slower" />
            </div>
            <div data-speed="0.8" className="bg-parallax absolute -bottom-40 right-20 w-[450px] h-[450px]">
              <img src="/assets/3d/bg_crystal_1786475395716.jpg" alt="" className="w-full h-full object-cover animate-float-slowest" />
            </div>
          </div>
        )}

        {/* 3D Floating Elements (Light Mode) */}
        {!isDark && (
          <div className="absolute inset-0 mix-blend-multiply opacity-50">
            <div data-speed="1.5" className="bg-parallax absolute -top-10 -right-20 w-[400px] h-[400px]">
              <img src="/assets/3d/bg_orb_light_1786475982572.jpg" alt="" className="w-full h-full object-cover animate-float-slow" />
            </div>
            <div data-speed="-1" className="bg-parallax absolute top-1/3 -left-32 w-[500px] h-[500px]">
              <img src="/assets/3d/bg_torus_light_1786475993671.jpg" alt="" className="w-full h-full object-cover animate-float-slower" />
            </div>
            <div data-speed="0.8" className="bg-parallax absolute -bottom-40 right-20 w-[450px] h-[450px]">
              <img src="/assets/3d/bg_crystal_light_1786476005526.jpg" alt="" className="w-full h-full object-cover animate-float-slowest" />
            </div>
          </div>
        )}
      </div>
      <div ref={vantaRef} className="fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000"></div>
    </>
  );
}

export default BackgroundEffects;
