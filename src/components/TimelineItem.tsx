export interface TimelineItemProps {
  readonly title: string
  readonly company: string
  readonly period: string
  readonly description: string
  readonly icon: string
  readonly isCurrent: boolean
}

function TimelineItem({
  title,
  company,
  period,
  description,
  icon,
  isCurrent,
}: TimelineItemProps) {
  const dotClasses = isCurrent
    ? 'bg-primary text-white'
    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors'

  const badgeClasses = isCurrent
    ? 'text-primary bg-primary/10'
    : 'text-slate-600 dark:text-slate-400 bg-surface dark:bg-surface-dark'

  return (
    <div className="relative flex items-start group">
      {/* Timeline Dot */}
      <div
        className={`
          flex items-center justify-center w-12 h-12 rounded-full
          border-[6px] border-background dark:border-background-dark
          shrink-0 z-10 shadow-sm ${dotClasses}
        `}
      >
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>

      {/* Content Card */}
      <div className="glass p-8 rounded-3xl ml-6 hover:-translate-y-1 transition-transform w-full">
        <span
          className={`
            font-bold text-xs tracking-wider uppercase
            inline-block mb-3 px-3 py-1 rounded-full
            ${badgeClasses}
          `}
        >
          {period}
        </span>
        <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <div className="text-slate-500 dark:text-slate-400 font-medium mb-4">
          {company}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TimelineItem