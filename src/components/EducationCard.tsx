import type { EducationItem } from '../types';

interface EducationCardProps {
  readonly education: EducationItem;
}

/** Maps accentColor values from portfolioData to their Tailwind class sets.
 *  We use a lookup instead of string interpolation because Tailwind's JIT
 *  compiler needs to see full class names in the source to generate them. */
const accentStyles: Record<string, { border: string; badgeBg: string; badgeText: string }> = {
  'purple-500': {
    border: 'border-l-purple-500',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-600 dark:text-purple-400',
  },
  primary: {
    border: 'border-l-primary',
    badgeBg: 'bg-primary/10',
    badgeText: 'text-primary dark:text-primary-dark',
  },
};

function EducationCard({ education }: EducationCardProps) {
  const styles = accentStyles[education.accentColor] ?? accentStyles['primary'];

  return (
    <div
      className={`glass p-8 rounded-3xl hover:-translate-y-1 transition-transform border-l-[6px] ${styles.border}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
          {education.degree}
        </h3>
        <span
          className={`${styles.badgeBg} ${styles.badgeText} text-xs font-bold px-3 py-1 rounded-full w-fit shrink-0`}
        >
          {education.period}
        </span>
      </div>
      <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
        {education.institution}
      </h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5 font-medium">
        <span className="material-symbols-outlined text-[18px]">
          {education.locationIcon}
        </span>
        {education.location}
      </p>
    </div>
  );
}

export default EducationCard;
