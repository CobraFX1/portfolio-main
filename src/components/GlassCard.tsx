import type { ReactNode } from "react";

export interface GlassCardProps {
  readonly children: ReactNode
  readonly className?: string
  readonly hoverLift?: boolean
  readonly rounded?: string
  readonly padding?: string
  readonly aosAnimation?: string
  readonly aosDelay?: number
}

function GlassCard({
  children,
  className = '',
  hoverLift = true,
  rounded = 'rounded-3xl',
  padding = 'p-8',
  aosAnimation,
  aosDelay,
}: GlassCardProps) {
  return (
    <div
      className={`
        glass ${rounded} ${padding} relative overflow-hidden group
        ${hoverLift ? 'hover:-translate-y-1 transition-transform duration-500' : ''}
        ${className}
      `}
      {...(aosAnimation ? { 'data-aos': aosAnimation } : {})}
      {...(aosDelay !== undefined ? { 'data-aos-delay': String(aosDelay) } : {})}
    >
      {children}
    </div>
  )
}

export default GlassCard