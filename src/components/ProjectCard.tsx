import type { Project } from '../types';
import TechBadge from './TechBadge';
import { useTilt } from '../hooks/useTilt';
import type { MouseEvent } from 'react';

interface ProjectCardProps {
  readonly project: Project;
  readonly aosDelay?: number;
}

function ProjectCard({ project, aosDelay = 100 }: ProjectCardProps) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.02 });

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
      className="group relative rounded-3xl overflow-hidden glass flex flex-col will-change-transform"
    >
      <div className="glow-effect absolute inset-0 rounded-3xl pointer-events-none" />

      {/* Mockup Area */}
      <div className="relative bg-slate-100 dark:bg-slate-800/50 aspect-video p-6 flex flex-col items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
        <div
          className={`relative w-full h-full rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center transform group-hover:scale-105 ${project.hoverRotate} transition-transform duration-500 overflow-hidden`}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`flex flex-col items-center ${project.iconColor}`}>
              <span className="material-symbols-outlined text-[4rem] mb-2">
                {project.icon}
              </span>
              <span className="font-display font-bold tracking-widest uppercase text-xs">
                {project.iconLabel}
              </span>
            </div>
          )}
        </div>

        {/* Upcoming Badge */}
        {project.isUpcoming && (
          <div className="absolute top-4 right-4 bg-amber-500/90 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
            Coming Soon
          </div>
        )}
      </div>

      {/* Details Area */}
      <div className="p-8 relative z-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {!project.isUpcoming && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              title={`View ${project.title}`}
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_outward
              </span>
            </a>
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
