import { siteConfig } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/50 bg-white/30 dark:bg-slate-950/30 backdrop-blur-md z-10 relative mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-semibold">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-surface dark:bg-surface-dark rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-800">
            <span className="material-symbols-outlined text-[16px]">code</span>
          </div>
          © {siteConfig.copyrightYear} {siteConfig.name}.
        </div>
        <div className="flex gap-8">
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
