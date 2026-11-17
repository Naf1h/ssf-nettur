import { Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react';
import { unit, social, joinCopy, hierarchy } from '../data/unitData.js';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Contact() {
  usePageTitle('Contact');
  const sector = hierarchy.find((h) => h.level === 'Sector');
  const rows = [
    { icon: Instagram, label: 'Instagram', value: social.instagram.handle, href: social.instagram.url, note: 'Fastest way to reach us' },
    { icon: Facebook, label: 'Facebook', value: social.facebook.label, href: social.facebook.url },
    { icon: MapPin, label: 'Location', value: unit.place, note: `${sector.name} Sector` },
  ];
  return (
    <>
      <PageHeader ml={joinCopy.ml} title="Contact the unit">
        <p>{joinCopy.en}</p>
      </PageHeader>
      <section className="page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <h2 className="display text-3xl sm:text-4xl">Reach us</h2>
          <p className="mt-4 text-ink-muted">Send a message on Instagram with your name and class or college. A unit member will reply.</p>
        </div>
        <ul className="border-t border-line md:col-span-8">
          {rows.map(({ icon: Icon, label, value, href, note }) => {
            const body = (
              <>
                <Icon className="size-6 text-brand-blue" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="label">{label}</p>
                  <p className="break-words text-xl font-bold">{value}</p>
                  {note && <p className="text-sm text-ink-muted">{note}</p>}
                </div>
                {href && <ArrowUpRight className="size-5 text-ink-muted transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
              </>
            );
            return (
              <li key={label} className="border-b border-line">
                {href ? (
                  <a href={href} target="_blank" rel="noopener" className="group grid grid-cols-[32px_1fr_auto] items-center gap-5 py-6 hover:bg-surface-alt">{body}</a>
                ) : (
                  <div className="grid grid-cols-[32px_1fr_auto] items-center gap-5 py-6">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
