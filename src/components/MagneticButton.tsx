import { useRef, useEffect } from 'react';
import { useSound } from '../hooks/useSound';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

export default function MagneticButton({ children, className = '', as = 'button', href, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const { playHoverSound, playClickSound } = useSound();

  useEffect(() => {
    const el = buttonRef.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Pull strength
      targetX = distanceX * 0.3;
      targetY = distanceY * 0.3;
    };

    const onMouseEnter = () => {
      playHoverSound();
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const render = () => {
      // Lerp for smooth magnetic pull and snap back
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      textEl.style.transform = `translate3d(${currentX * 0.3}px, ${currentY * 0.3}px, 0)`;

      rafId = requestAnimationFrame(render);
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const Component = as as any;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={playClickSound}
      className={`relative inline-flex items-center justify-center interactive ${className}`}
      {...props}
    >
      <span ref={textRef} className="relative z-10 inline-block pointer-events-none">
        {children}
      </span>
    </Component>
  );
}
