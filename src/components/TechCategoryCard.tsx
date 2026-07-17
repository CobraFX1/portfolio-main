import type { TechCategory as TechCategoryType } from '../types';

interface TechCategoryCardProps {
  readonly category: TechCategoryType;
  readonly aosDelay?: number;
}

function TechCategoryCard({ category, aosDelay = 100 }: TechCategoryCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={String(aosDelay)}
      className="glass rounded-[2rem] p-8 relative overflow-hidden group"
    >
      <div className="glow-effect absolute inset-0 rounded-[2rem]" />

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
      <ul className="space-y-4 relative z-10">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${item.dotColor}`}
              style={{ boxShadow: item.glowColor }}
            />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechCategoryCard;
