import type { TechCategory as TechCategoryType } from '../types';
import { useTilt } from '../hooks/useTilt';
import type { MouseEvent } from 'react';

interface TechCategoryCardProps {
  readonly category: TechCategoryType;
  readonly aosDelay?: number;
}

function TechCategoryCard({ category, aosDelay = 100 }: TechCategoryCardProps) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 10, scale: 1.03 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      data-aos="fade-up"
      data-aos-delay={String(aosDelay)}
      className="glass rounded-[2rem] p-8 relative overflow-hidden group will-change-transform"
    >
      <div className="glow-effect absolute inset-0 rounded-[2rem] pointer-events-none" />

      {/* Background Icon Decoration */}
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity text-slate-900 dark:text-white">
        <span className="material-symbols-outlined text-[5rem]">
          {category.icon}
        </span>
      </div>

      {/* Category Title */}
      <h3 className="text-xl font-display font-bold mb-6 text-slate-900 dark:text-white relative z-10">
        {category.title}
      </h3>

      {/* Tech Items List */}
      <ul className="space-y-3 relative z-10">
        {category.items.map((item) => (
          <li 
            key={item.name} 
            className="group/item flex items-center gap-3 p-2 -mx-2 rounded-xl transition-colors hover:bg-white/40 dark:hover:bg-slate-800/40 cursor-default"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${item.dotColor} group-hover/item:scale-150`}
              style={{ boxShadow: item.glowColor }}
            />
            <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors group-hover/item:text-slate-900 dark:group-hover/item:text-white">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechCategoryCard;
