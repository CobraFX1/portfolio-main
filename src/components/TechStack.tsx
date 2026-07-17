import { techStack } from '../data/portfolioData';
import TechCategoryCard from './TechCategoryCard';

function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 z-10 relative" id="stack">
      <div data-aos="fade-right" className="mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
          Tech Stack
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((category, index) => (
          <TechCategoryCard
            key={category.title}
            category={category}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>
    </section>
  );
}

export default TechStack;
