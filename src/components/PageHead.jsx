// Top of every inner page: small coloured tag, title, optional Malayalam line and intro.
export default function PageHead({ tag, title, ml, children, tone = 'text-glow-emerald' }) {
  return (
    <section className="relative overflow-hidden pb-6 pt-[calc(76px+3.5rem)] sm:pt-[calc(76px+5rem)]">
      <div className="aura aura-emerald -left-48 -top-40 size-[640px]" aria-hidden="true" />
      <div className="aura aura-gold -right-40 top-0 size-[520px]" aria-hidden="true" />
      <div className="frame relative">
        <p className={`tag ${tone}`}>{tag}</p>
        {ml && <p lang="ml" className="mt-4 text-xl font-bold text-white/80 sm:text-2xl">{ml}</p>}
        <h1 className="mt-2 font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{children}</div>}
      </div>
    </section>
  );
}
