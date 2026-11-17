import { useState } from 'react';
import { Check } from 'lucide-react';
import { unit, social, formPurposes } from '../data/unitData.js';

const field = 'mt-2 block w-full border-0 border-b border-black/15 bg-transparent px-0 pb-3 pt-1 text-lg text-ink placeholder:text-ink-muted/50 focus:border-ink focus:outline-none focus:ring-0';

// Messages are emailed to the unit through FormSubmit.
export default function Write() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = {};
    if (!String(data.get('name') || '').trim()) next.name = 'Enter your name.';
    if (!/^\+?[0-9 ]{10,15}$/.test(String(data.get('whatsapp') || '').trim())) next.whatsapp = 'Enter a WhatsApp number with 10 to 15 digits.';
    setErrors(next);
    if (Object.keys(next).length) { form.querySelector(`[name="${Object.keys(next)[0]}"]`)?.focus(); return; }
    data.set('_subject', `SSF Nettur website: ${data.get('purpose')} from ${String(data.get('name')).trim()}`);
    data.set('_template', 'table');
    data.set('_captcha', 'false');
    setState('sending');
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${unit.email}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const body = await r.json().catch(() => ({}));
      if (!r.ok || String(body.success) === 'false') throw new Error();
      setState('sent');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <section id="write" aria-labelledby="write-title" className="frame mb-32 mt-40 grid gap-14 sm:mb-40 sm:mt-56 md:grid-cols-12">
      <div className="md:col-span-5">
        <h2 id="write-title" className="h-section">Write to the unit</h2>
        <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-muted">Join the unit, subscribe to Risala, or ask the student help desk. Your message goes to {unit.email}.</p>
      </div>

      <div className="md:col-span-6 md:col-start-7">
        {state === 'sent' ? (
          <div role="status" className="flex items-start gap-4 border-t border-black/[0.06] pt-8">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white"><Check className="size-5" aria-hidden="true" /></span>
            <div>
              <p className="text-2xl font-bold tracking-[-0.03em]">Message sent.</p>
              <p className="mt-1 text-ink-muted">A unit member will reply on WhatsApp.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-9">
            <div className="grid gap-9 sm:grid-cols-2">
              <label htmlFor="f-name" className="text-sm font-medium text-ink-muted">Your name
                <input id="f-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'f-name-err' : undefined} />
                {errors.name && <span id="f-name-err" className="mt-2 block text-sm font-medium text-red-700">{errors.name}</span>}
              </label>
              <label htmlFor="f-wa" className="text-sm font-medium text-ink-muted">WhatsApp number
                <input id="f-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? 'f-wa-err' : undefined} />
                {errors.whatsapp && <span id="f-wa-err" className="mt-2 block text-sm font-medium text-red-700">{errors.whatsapp}</span>}
              </label>
            </div>
            <fieldset>
              <legend className="text-sm font-medium text-ink-muted">About</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {formPurposes.map((p, i) => (
                  <label key={p} className="cursor-pointer">
                    <input type="radio" name="purpose" value={p} defaultChecked={i === 0} className="peer sr-only" />
                    <span className="block rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flag-blue">{p}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label htmlFor="f-msg" className="text-sm font-medium text-ink-muted">Message
              <textarea id="f-msg" name="message" rows={3} className={`${field} resize-none`} />
            </label>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-5">
              <button type="submit" disabled={state === 'sending'} className="rounded-full bg-obsidian px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Send message'}</button>
              {state === 'error' && <p role="alert" className="text-sm font-medium text-red-700">The message could not be sent. Try again, or message {social.instagram.handle}.</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
