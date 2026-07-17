import { useVanta } from '../hooks/useVanta';
import { useTheme } from '../hooks/useTheme';

function BackgroundEffects() {
  const { isDark } = useTheme();
  const vantaRef = useVanta<HTMLDivElement>(isDark);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob dark:opacity-10"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-bold rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-dark rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
      </div>
      <div ref={vantaRef} className="fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000"></div>
    </>
  );
}

export default BackgroundEffects;
