export interface TechBadgeProps {
  readonly label: string
  readonly className?: string
}

function TechBadge({ label, className = '' }: TechBadgeProps) {
  return (
    <span className={`tag-badge ${className}`}>
      {label}
    </span>
  )
}

export default TechBadge