interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 border-l border-slate-200 dark:border-slate-800 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-slate-600 dark:text-slate-300 outline-none bg-surface dark:bg-surface-dark rounded-full"
        aria-label="Close menu"
      >
        <span className="material-symbols-outlined text-2xl block">close</span>
      </button>

      {/* Navigation Links */}
      <a
        href="#projects"
        onClick={onClose}
        className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
      >
        Projects
      </a>
      <a
        href="#stack"
        onClick={onClose}
        className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
      >
        Tech Stack
      </a>
      <a
        href="#experience"
        onClick={onClose}
        className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
      >
        Experience
      </a>
      <a
        href="#contact"
        onClick={onClose}
        className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors mb-4"
      >
        Contact
      </a>
      <a
        href="#contact"
        onClick={onClose}
        className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl shadow-primary/30"
      >
        Hire Me
      </a>
    </div>
  );
}

export default MobileMenu;
