import React, { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');

    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus('sent');
          form.reset();
          setTimeout(() => setStatus('idle'), 4000);
        } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800/50 flex flex-col gap-6 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-bold text-slate-700 dark:text-slate-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white font-medium"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-slate-700 dark:text-slate-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white font-medium"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-slate-700 dark:text-slate-300"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white font-medium"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary hover:bg-primary-bold text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-lg mt-2 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'idle' && (
          <>
            Send Message
            <span className="material-symbols-outlined text-lg">send</span>
          </>
        )}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && (
          <>
            Message Sent!
            <span className="material-symbols-outlined text-lg">check_circle</span>
          </>
        )}
        {status === 'error' && (
          <>
            Failed — Try Again
            <span className="material-symbols-outlined text-lg">error</span>
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;