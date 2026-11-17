import { useState } from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { social, unit, formPurposes } from '../data/unitData.js';

const field = 'mt-2 block min-h-[50px] w-full rounded-2xl border border-slate-200 bg-alabaster px-4 text-base text-navy transition-colors focus:border-blue-ssf focus:bg-white focus:outline-none';

function ContactForm() {
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

  if (state === 'sent') {
    return (
      <div role="status" className="card flex items-start gap-4 p-8">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-ssf/10 text-green-ssf"><Check className="size-5" aria-hidden="true" /></span>
        <div>
          <p className="text-lg font-extrabold text-navy">Message sent.</p>
          <p className="mt-1 text-ink-muted">A unit member will contact you on WhatsApp.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft md:p-9">
      <p className="text-xl font-extrabold tracking-[-0.02em] text-navy">Send us a message</p>
      <p className="mt-1 text-sm text-ink-muted">Fields marked * are required.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label htmlFor="f-name" className="text-sm font-semibold text-navy">Name *
          <input id="f-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'f-name-err' : undefined} />
          {errors.name && <span id="f-name-err" className="mt-1.5 block text-sm font-medium text-red-700">{errors.name}</span>}
        </label>
        <label htmlFor="f-wa" className="text-sm font-semibold text-navy">WhatsApp number *
          <input id="f-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? 'f-wa-err' : undefined} />
          {errors.whatsapp && <span id="f-wa-err" className="mt-1.5 block text-sm font-medium text-red-700">{errors.whatsapp}</span>}
        </label>
      </div>
      <label htmlFor="f-purpose" className="mt-5 block text-sm font-semibold text-navy">Purpose
        <select id="f-purpose" name="purpose" className={field}>{formPurposes.map((p) => <option key={p}>{p}</option>)}</select>
      </label>
      <label htmlFor="f-msg" className="mt-5 block text-sm font-semibold text-navy">Message
        <textarea id="f-msg" name="message" rows={4} className={`${field} py-3`} />
      </label>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === 'sending'} className="btn-primary disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Send message'}</button>
        <span className="text-xs text-ink-muted">Your details go only to the unit's email.</span>
      </div>
      {state === 'error' && <p role="alert" className="mt-4 text-sm font-medium text-red-700">The message could not be sent. Try again, or message {social.instagram.handle} on Instagram.</p>}
    </form>
  );
}

export default function Contact() {
  const channels = [
    { icon: Instagram, label: 'Instagram', value: social.instagram.handle, href: social.instagram.url },
    { icon: Facebook, label: 'Facebook', value: `facebook.com/${social.facebook.handle}`, href: social.facebook.url },
    social.whatsapp && { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with the unit', href: `https://wa.me/${social.whatsapp}` },
    { icon: Mail, label: 'Email', value: unit.email, href: `mailto:${unit.email}` },
    { icon: MapPin, label: 'Unit office', value: unit.address },
  ].filter(Boolean);

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#0F3D66] to-blue-ssf px-8 py-14 text-white md:px-14 md:py-16">
          <div className="glow -right-20 -top-24 size-80 bg-emerald-ssf opacity-25" aria-hidden="true" />
          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-300">Get involved</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">Be part of something meaningful in Nettur.</h2>
              <p className="mt-5 max-w-xl text-lg text-white/75">Join our programmes, volunteer with the unit, or simply say hello.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <a href={social.instagram.url} target="_blank" rel="noopener" className="btn bg-white text-navy hover:-translate-y-0.5"><Instagram className="size-4" aria-hidden="true" />Instagram</a>
              <a href={social.facebook.url} target="_blank" rel="noopener" className="btn border border-white/30 text-white hover:-translate-y-0.5 hover:bg-white/10"><Facebook className="size-4" aria-hidden="true" />Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Stay connected</p>
          <h2 id="contact-title" className="h2 mt-4">Let's start a conversation.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">Have a question, an idea for a programme, or want to join? Reach SSF Nettur Unit here.</p>
          <ul className="mt-8 grid gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-alabaster text-blue-ssf ring-1 ring-slate-200/80"><Icon className="size-5" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-ink-muted">{label}</span>
                    <span className="block break-words font-bold text-navy">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="size-4 shrink-0 text-ink-muted" aria-hidden="true" />}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-7"><ContactForm /></div>
      </div>
    </section>
  );
}
