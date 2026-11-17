import { Users } from 'lucide-react';
import { committee, social } from '../data/unitData.js';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Committee() {
  usePageTitle('Committee');
  return (
    <>
      <PageHeader ml="യൂണിറ്റ് കമ്മിറ്റി" title="Unit committee" />
      <section className="page py-16 md:py-24">
        {committee.length ? (
          <ul className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {committee.map((m, i) => (
              <li key={m.name} className={`bg-white ${i === 0 ? 'col-span-2 md:row-span-2' : ''}`}>
                <div className={`${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-[calc(100%-88px)]' : 'aspect-[4/5]'} bg-surface-alt`}>
                  {m.photo && <img src={m.photo} alt={m.name} loading="lazy" className="size-full object-cover" />}
                </div>
                <div className="p-5">
                  <p className="font-bold">{m.name}</p>
                  <p className="text-sm text-ink-muted">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid justify-items-start gap-3 border border-line bg-surface-alt p-8 sm:p-10">
            <Users className="size-6 text-brand-blue" aria-hidden="true" />
            <p className="text-xl font-bold">The committee list has not been published on this site yet.</p>
            <a className="btn-line mt-2" href={social.instagram.url} target="_blank" rel="noopener">Ask on Instagram</a>
          </div>
        )}
      </section>
    </>
  );
}
