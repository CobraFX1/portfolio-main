// ============================================
// Portfolio Data Models
// ============================================
// All TypeScript interfaces for the portfolio.
// These types define the shape of every data
// object used across the site — from project
// cards to contact links.
// ============================================

/** A featured project displayed on the portfolio */
export interface Project {
  /** Project display name */
  readonly title: string;
  /** Short description of the project */
  readonly description: string;
  /** Technology tags shown below the description */
  readonly tags: readonly string[];
  /** URL to the live deployed project */
  readonly liveUrl: string;
  /** Material Symbols icon name for the mockup area */
  readonly icon: string;
  /** Label text displayed under the icon */
  readonly iconLabel: string;
  /** Tailwind gradient start class (e.g. "from-indigo-500/10") */
  readonly gradientFrom: string;
  /** Tailwind gradient end class (e.g. "to-purple-500/10") */
  readonly gradientTo: string;
  /** Tailwind text color class for the icon */
  readonly iconColor: string;
  /** Hover rotation class (e.g. "group-hover:-rotate-2") */
  readonly hoverRotate: string;
  /** Whether this is a placeholder for an upcoming build */
  readonly isUpcoming?: boolean;
  /** Optional 3D asset image URL to use instead of an icon */
  readonly image?: string;
}

/** A work experience entry on the timeline */
export interface ExperienceItem {
  /** Job title */
  readonly title: string;
  /** Company name and location (e.g. "VisionLand Schools (Remote)") */
  readonly company: string;
  /** Date range string (e.g. "01/2025 — 05/2025") */
  readonly period: string;
  /** Brief description of role and responsibilities */
  readonly description: string;
  /** Material Symbols icon name */
  readonly icon: string;
  /** Whether this is the current/most recent role */
  readonly isCurrent: boolean;
}

/** An education credential */
export interface EducationItem {
  /** Degree or certification name */
  readonly degree: string;
  /** School or platform name */
  readonly institution: string;
  /** Date range string */
  readonly period: string;
  /** Physical location or "Remote Curriculum" */
  readonly location: string;
  /** Material Symbols icon for the location indicator */
  readonly locationIcon: string;
  /** Tailwind color class for the left accent border */
  readonly accentColor: string;
}

/** A category in the tech stack section (e.g. "Frontend") */
export interface TechCategory {
  /** Category title */
  readonly title: string;
  /** Material Symbols icon name for background decoration */
  readonly icon: string;
  /** List of technologies in this category */
  readonly items: readonly TechItem[];
}

/** A single technology item with a colored dot */
export interface TechItem {
  /** Technology name (e.g. "Next.js & React") */
  readonly name: string;
  /** Tailwind bg color class for the dot (e.g. "bg-blue-500") */
  readonly dotColor: string;
  /** CSS box-shadow value for the glow effect */
  readonly glowColor: string;
}

/** A contact link (email, GitHub, LinkedIn, etc.) */
export interface ContactInfo {
  /** Label shown above the value (e.g. "Email Me At") */
  readonly label: string;
  /** The display value (e.g. "jacobstephen045@gmail.com") */
  readonly value: string;
  /** The href URL */
  readonly href: string;
  /** Material Symbols icon name */
  readonly icon: string;
  /** Tailwind hover background class for the icon box */
  readonly hoverBg: string;
}

/** A tech tool shown in the hero marquee strip */
export interface HeroTechItem {
  /** Technology name */
  readonly name: string;
  /** Tailwind bg color class for the dot */
  readonly dotColor: string;
}

/** Navigation link item */
export interface NavLink {
  /** Display text */
  readonly label: string;
  /** Anchor href (e.g. "#projects") */
  readonly href: string;
}

/** Hero section content */
export interface HeroData {
  /** Availability badge text */
  readonly badgeText: string;
  /** Main heading — text before the gradient word */
  readonly headingPrefix: string;
  /** The gradient-styled word in the heading */
  readonly headingGradient: string;
  /** Main heading — text after the gradient word */
  readonly headingSuffix: string;
  /** Subtitle paragraph */
  readonly subtitle: string;
  /** The developer's name (bolded in subtitle) */
  readonly name: string;
  /** Primary CTA button text */
  readonly ctaPrimary: string;
  /** Secondary CTA button text */
  readonly ctaSecondary: string;
  /** Tech items shown in the marquee strip */
  readonly techItems: readonly HeroTechItem[];
}

/** Global site configuration */
export interface SiteConfig {
  /** Developer's display name */
  readonly name: string;
  /** Site title for <title> tag */
  readonly title: string;
  /** Meta description for SEO */
  readonly description: string;
  /** Copyright year */
  readonly copyrightYear: number;
}
