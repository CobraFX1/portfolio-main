import { projects } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 z-10 relative" id="projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="A selection of my recent work in web development, focusing on performance, UX, and robust architectures."
        aosAnimation="fade-up"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
