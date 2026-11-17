import { Instagram, Facebook, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { social, unit } from '../data/unitData.js';

export default function Connect() {
  const cards = [
    { icon: Instagram, label: 'SSF Nettur', handle: social.instagram.handle, href: social.instagram.url, accent: 'text-glow-emerald' },
    { icon: Facebook, label: 'SSF Nettur', handle: `facebook.com/${social.facebook.handle}`, href: social.facebook.url, accent: 'text-glow-cyan' },
    { icon: Instagram, label: 'SSF Thalassery Division', handle: social.thalassery.handle, href: social.thalassery.url, accent: 'text-glow-gold' },
  ];
  const helpHref = social.whatsapp ? `https://wa.me/${social.whatsapp}` : social.dm;

  return (
    <section id="connect" aria-labelledby="connect-title" className="relative">
      <div className="frame pt-28 sm:pt-36">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="tag text-glow-emerald">Connect</p>
            <h2 id="connect-title" className="h-sec mt-3">Join the unit</h2>
          </div>
          <p className="text-white/55 md:col-span-4">Follow along, or message us to join, subscribe to Risala or ask the student help desk.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* Help desk CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-glow-emerald/30 bg-gradient-to-br from-glow-emerald/20 via-glow-teal/10 to-transparent p-8 sm:p-10 lg:col-span-5 lg:row-span-3">
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-glow-emerald/30 blur-[90px]" aria-hidden="true" />
            <p className="tag relative text-glow-emerald">Student help desk</p>
            <p lang="ml" className="relative mt-5 text-3xl font-extrabold text-white sm:text-4xl">എസ് എസ് എഫിൽ അംഗമാകാം</p>
            <p className="relative mt-2 font-display text-xl font-bold text-white/85">Become a member</p>
            <p className="relative mt-4 max-w-sm text-white/65">Send your name and class or college. A unit member will reply and help you join or get support.</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href={helpHref} target="_blank" rel="noopener" className="btn-emerald">
                {social.whatsapp ? <MessageCircle className="size-4" aria-hidden="true" /> : <Instagram className="size-4" aria-hidden="true" />}
                {social.whatsapp ? 'Message on WhatsApp' : 'Message on Instagram'}
              </a>
              <a href={`mailto:${unit.email}`} className="btn-glass"><Mail className="size-4" aria-hidden="true" />Email the unit</a>
            </div>
          </div>

          {cards.map(({ icon: Icon, label, handle, href, accent }) => (
            <a key={href} href={href} target="_blank" rel="noopener" className="glass glow-card group flex items-center gap-5 p-6 lg:col-span-7">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] ${accent}`}><Icon className="size-6" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-white/55">{label}</span>
                <span className="block truncate font-display text-xl font-bold tracking-[-0.01em] text-white">{handle}</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-white/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
