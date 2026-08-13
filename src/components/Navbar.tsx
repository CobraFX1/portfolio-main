import { useTheme } from '../hooks/useTheme';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useScrollBackground } from '../hooks/useScrollBackground';
import { navLinks } from '../data/portfolioData';
import MobileMenu from './MobileMenu';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { isOpen, openMenu, closeMenu } = useMobileMenu();
  const isScrolled = useScrollBackground(20);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'shadow-md dark:shadow-none border-b border-slate-200 dark:border-slate-800 nav-glass'
            : 'nav-glass'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary dark:text-primary-dark group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
              <span className="material-symbols-outlined text-xl">
                code_blocks
              </span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Jacob<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface dark:bg-surface-dark text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-all outline-none overflow-hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              <div className={`transition-all duration-500 ease-spring absolute flex items-center justify-center ${isDark ? 'rotate-0 translate-y-0 opacity-100' : 'rotate-90 translate-y-8 opacity-0'}`}>
                <span className="material-symbols-outlined text-[20px]">light_mode</span>
              </div>
              <div className={`transition-all duration-500 ease-spring absolute flex items-center justify-center ${!isDark ? 'rotate-0 translate-y-0 opacity-100' : '-rotate-90 -translate-y-8 opacity-0'}`}>
                <span className="material-symbols-outlined text-[20px]">dark_mode</span>
              </div>
            </button>

            {/* Let's Talk Button (Desktop) */}
            <a
              href="#contact"
              className="hidden md:inline-flex bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={isOpen ? closeMenu : openMenu}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                subject
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;
