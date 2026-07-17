import { contactLinks } from '../data/portfolioData';
import ContactLink from './ContactLink';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 z-10 relative" id="contact">
      <div
        data-aos="zoom-in"
        className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/5 border border-slate-100 dark:border-slate-800"
      >
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Left Column — Info */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-[1.1] text-slate-900 dark:text-white">
              Let's build
              <br />
              something <span className="text-gradient">together.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg font-medium">
              Currently looking for full-stack opportunities or freelance projects.
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link) => (
                <ContactLink
                  key={link.label}
                  label={link.label}
                  value={link.value}
                  href={link.href}
                  icon={link.icon}
                  hoverBg={link.hoverBg}
                  external={link.href.startsWith('http')}
                />
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
