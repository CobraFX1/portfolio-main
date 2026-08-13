import { heroData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

function Hero() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center relative z-10"
      id="home"
    >

      {/* Main Heading */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 max-w-5xl text-slate-900 dark:text-white"
      >
        {heroData.headingPrefix}
        <span className="text-gradient">{heroData.headingGradient}</span>
        <br />
        {heroData.headingSuffix}
      </h1>

      {/* Subtitle */}
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
      >
        Hi, I'm{' '}
        <span className="font-bold text-slate-900 dark:text-white">
          {heroData.name}
        </span>
        . {heroData.subtitle}
      </p>

      {/* CTA Buttons */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <MagneticButton
          as="a"
          href="#projects"
          className="bg-primary hover:bg-primary-bold text-white px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
        >
          {heroData.ctaPrimary}
          <span className="material-symbols-outlined text-sm">
            arrow_downward
          </span>
        </MagneticButton>
        <MagneticButton
          as="a"
          href="#contact"
          className="glass text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-full text-base font-bold flex items-center justify-center"
        >
          {heroData.ctaSecondary}
        </MagneticButton>
      </div>

      {/* Tech Tools Marquee Strip */}
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        className="mt-24 pt-10 border-t border-slate-200 dark:border-slate-800/50 w-full max-w-3xl flex flex-wrap justify-center gap-6 text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider"
      >
        {heroData.techItems.map((item) => (
          <span key={item.name} className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
