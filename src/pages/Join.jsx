import { useState } from 'react';
import { Instagram, Facebook, MessageCircle, ArrowUpRight, Check, Mail, MapPin } from 'lucide-react';
import { social, formspreeId, formPurposes, unit } from '../data/unitData.js';
import { PageIntro } from '../components/ui.jsx';
import usePageTitle from '../components/usePageTitle.js';

const field = 'mt-2 block min-h-[48px] w-full rounded-sm border border-line bg-white px-4 text-base text-ink focus:border-brand-blue focus:outline-none';

function HelpForm() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error | offline
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
    if (!formspreeId) { setState('offline'); return; }
    setState('sending');
    try {
      const r = await fetch(`https://formspree.io/f/${formspreeId}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      setState('sent');
      form.reset();
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div role="status" className="flex items-start gap-3 border border-brand-green bg-[#F0FDF4] p-6">
        <Check className="mt-0.5 size-5 text-brand-green" aria-hidden="true" />
        <div>
          <p className="font-semibold">Registration sent.</p>
          <p className="text-sm text-ink-muted">A unit member will contact you on WhatsApp.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-line p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold" htmlFor="f-name">Name *
          <input id="f-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'f-name-err' : undefined} />
          {errors.name && <span id="f-name-err" className="mt-1.5 block text-sm font-medium text-red-700">{errors.name}</span>}
        </label>
        <label className="text-sm font-semibold" htmlFor="f-wa">WhatsApp number *
          <input id="f-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? 'f-wa-err' : undefined} />
          {errors.whatsapp && <span id="f-wa-err" className="mt-1.5 block text-sm font-medium text-red-700">{errors.whatsapp}</span>}
        </label>
      </div>
      <label className="text-sm font-semibold" htmlFor="f-purpose">Purpose
        <select id="f-purpose" name="purpose" className={field}>
          {formPurposes.map((p) => <option key={p}>{p}</option>)}
        </select>
      </label>
      <label className="text-sm font-semibold" htmlFor="f-msg">Message
        <textarea id="f-msg" name="message" rows={4} className={`${field} py-3`} />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-navy" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send registration'}</button>
        <span className="text-xs text-ink-muted">Used only to contact you about the unit.</span>
      </div>
      {state === 'error' && <p role="alert" className="text-sm font-medium text-red-700">The form could not send. Check your connection and try again, or message {social.instagram.handle}.</p>}
      {state === 'offline' && <p role="alert" className="text-sm font-medium text-red-700">Online registration is not connected yet. Message {social.instagram.handle} on Instagram to register.</p>}
    </form>
  );
}

export default function Join() {
  usePageTitle('Join & Student Desk');
  const channels = [
    social.whatsapp && { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with the unit', href: `https://wa.me/${social.whatsapp}`, primary: true },
    { icon: Instagram, label: 'Instagram', value: social.instagram.handle, href: social.instagram.url },
    { icon: Facebook, label: 'Facebook', value: `facebook.com/${social.facebook.handle}`, href: social.facebook.url },
    unit.email && { icon: Mail, label: 'Email', value: unit.email, href: `mailto:${unit.email}` },
    unit.address && { icon: MapPin, label: 'Unit address', value: unit.address },
  ].filter(Boolean);

  return (
    <>
      <PageIntro tag="JOIN // STUDENT DESK" title="Join & student desk">
        <p>Register as a member, subscribe to Risala, or ask the student help desk for support with studies and admissions.</p>
      </PageIntro>
      <section className="page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="tag mb-4 text-brand-blue">01 // CONNECT</p>
          <h2 className="font-head text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Reach the unit</h2>
          <ul className="mt-8 border-t border-line">
            {channels.map(({ icon: Icon, label, value, href, primary }) => (
              <li key={label} className="border-b border-line">
                {href ? (
                  <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" className={`group grid grid-cols-[28px_1fr_auto] items-center gap-4 py-5 ${primary ? 'text-brand-green' : ''}`}>
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="tag block text-ink-muted">{label}</span>
                      <span className="block break-words font-head text-lg font-bold text-ink">{value}</span>
                    </span>
                    <ArrowUpRight className="size-5 text-ink-muted transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="grid grid-cols-[28px_1fr] items-center gap-4 py-5">
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="tag block text-ink-muted">{label}</span>
                      <span className="block break-words font-head text-lg font-bold text-ink">{value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <p className="tag mb-4 text-brand-blue">02 // REGISTRATION & HELP DESK</p>
          <h2 className="mb-8 font-head text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Send your details</h2>
          <HelpForm />
        </div>
      </section>
    </>
  );
}
