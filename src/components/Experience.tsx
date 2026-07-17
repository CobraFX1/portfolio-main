import { experience, education } from '../data/portfolioData';
import TimelineItem from './TimelineItem';
import EducationCard from './EducationCard';

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 z-10 relative" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Column */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">work</span>
            </div>
            <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
            {experience.map((item) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                company={item.company}
                period={item.period}
                description={item.description}
                icon={item.icon}
                isCurrent={item.isCurrent}
              />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div data-aos="fade-left">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <EducationCard key={item.degree} education={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
