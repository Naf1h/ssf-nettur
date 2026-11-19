import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHead({ tag, title, tone = 'text-glow-emerald', link, linkLabel, children }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div className="max-w-2xl">
        <p className={`tag ${tone}`}>{tag}</p>
        <h2 className="h-sec mt-3">{title}</h2>
        {children && <div className="mt-4 text-white/60">{children}</div>}
      </div>
      {link && <Link to={link} className="btn-glass min-h-[44px] px-5">{linkLabel}<ArrowRight className="size-4" aria-hidden="true" /></Link>}
    </div>
  );
}
