export interface SectionHeaderProps {
  readonly title: string
  readonly subtitle?: string
  readonly aosAnimation?: string
  readonly icon?: string
  readonly iconBg?: string
  readonly iconColor?: string
  readonly showAccentBar?: boolean
  readonly marginBottom?: string
}

function SectionHeader({
  title,
  subtitle,
  aosAnimation,
  icon,
  iconBg = 'bg-primary/10',
  iconColor = 'text-primary',
  showAccentBar,
  marginBottom,
}: SectionHeaderProps) {
  const isIconLayout = Boolean(icon)
  const resolvedShowBar = showAccentBar ?? !isIconLayout
  const resolvedMargin = marginBottom ?? (isIconLayout ? 'mb-10' : 'mb-16')

  if (isIconLayout) {
    return (
      <div
        className={`flex items-center gap-4 ${resolvedMargin}`}
        {...(aosAnimation ? { 'data-aos': aosAnimation } : {})}
      >
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}
        >
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white">
          {title}
        </h2>
      </div>
    )
  }

  return (
    <div
      className={resolvedMargin}
      {...(aosAnimation ? { 'data-aos': aosAnimation } : {})}
    >
      <h2 className="section-title">{title}</h2>
      {resolvedShowBar && <div className="section-accent-bar mb-6" />}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader