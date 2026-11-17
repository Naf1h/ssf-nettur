export default function PageHeader({ ml, title, children }) {
  return (
    <section className="border-b border-line bg-surface-alt">
      <div className="page grid gap-6 py-14 md:grid-cols-12 md:items-end md:py-20">
        <div className="md:col-span-8">
          {ml && <p lang="ml" className="text-lg font-semibold text-brand-blue">{ml}</p>}
          <h1 className="display mt-2 text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        {children && <div className="text-ink-muted md:col-span-4">{children}</div>}
      </div>
    </section>
  );
}
