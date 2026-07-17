export interface ContactLinkProps {
  readonly label: string
  readonly value: string
  readonly href: string
  readonly icon: string
  readonly hoverBg: string
  readonly external?: boolean
}

function ContactLink({
  label,
  value,
  href,
  icon,
  hoverBg,
  external = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-5 group w-fit"
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {/* Icon Box */}
      <div className={`contact-icon-box ${hoverBg} transition-all`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>

      {/* Text */}
      <div>
        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
          {label}
        </div>
        <div className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-lg">
          {value}
        </div>
      </div>
    </a>
  )
}

export default ContactLink