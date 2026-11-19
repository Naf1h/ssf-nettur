import { Instagram, Facebook, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { social, unit } from '../data/unitData.js';

// Student help desk card plus social and address cards.
export default function Connect() {
  const cards = [
    { icon: Instagram, label: 'SSF Nettur on Instagram', handle: social.instagram.handle, href: social.instagram.url, accent: 'text-glow-emerald' },
    { icon: Facebook, label: 'SSF Nettur on Facebook', handle: `facebook.com/${social.facebook.handle}`, href: social.facebook.url, accent: 'text-glow-cyan' },
    { icon: Instagram, label: 'SSF Thalassery Division', handle: social.thalassery.handle, href: social.thalassery.url, accent: 'text-glow-gold' },
    { icon: Mail, label: 'Email the unit', handle: unit.email, href: `mailto:${unit.email}`, accent: 'text-glow-teal' },
  ];
  const helpHref = social.whatsapp ? `https://wa.me/${social.whatsapp}` : social.dm;

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="relative overflow-hidden rounded-[32px] border border-glow-emerald/30 bg-gradient-to-br from-glow-emerald/20 via-glow-teal/10 to-transparent p-8 sm:p-10 lg:col-span-5 lg:row-span-4">
        <div className="aura aura-emerald -right-28 -top-28 size-80" aria-hidden="true" />
        <p className="tag relative text-glow-emerald">Student help desk</p>
        <p lang="ml" className="relative mt-5 text-3xl font-extrabold text-white sm:text-4xl">എസ് എസ് എഫിൽ അംഗമാകാം</p>
        <p className="relative mt-2 font-display text-xl font-bold text-white/85">Become a member</p>
        <p className="relative mt-4 max-w-sm text-white/65">Send your name and class or college. A unit member will reply and help you join, subscribe to Risala, or get study and admission support.</p>
        <div className="relative mt-8">
          <a href={helpHref} target="_blank" rel="noopener" className="btn-emerald">
            {social.whatsapp ? <MessageCircle className="size-4" aria-hidden="true" /> : <Instagram className="size-4" aria-hidden="true" />}
            {social.whatsapp ? 'Message on WhatsApp' : 'Message on Instagram'}
          </a>
        </div>
        <div className="relative mt-10 flex gap-3 border-t border-white/10 pt-6 text-sm text-white/70">
          <MapPin className="mt-0.5 size-4 shrink-0 text-glow-emerald" aria-hidden="true" />
          <address className="not-italic">{unit.address}</address>
        </div>
      </div>

      {cards.map(({ icon: Icon, label, handle, href, accent }) => (
        <a key={href} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" className="glass glow-card group flex items-center gap-5 p-5 sm:p-6 lg:col-span-7">
          <span className={`grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] sm:size-14 ${accent}`}><Icon className="size-6" aria-hidden="true" /></span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm text-white/55">{label}</span>
            <span className="block truncate font-display text-lg font-bold tracking-[-0.01em] text-white sm:text-xl">{handle}</span>
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-white/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
