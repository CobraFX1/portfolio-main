import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        
        // Wait a beat at 100%, then start fading out
        setTimeout(() => {
          setIsFading(true);
          // Wait for fade transition to finish before unmounting
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = '';
          }, 800); 
        }, 500);
      }
      setProgress(current);
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background dark:bg-background-dark transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo Text */}
        <div className="font-display text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-[0.2em] mb-8">
          JACOB
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-primary transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Percentage */}
        <div className="font-sans text-xs text-slate-400 dark:text-slate-500 font-semibold tracking-widest">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}
