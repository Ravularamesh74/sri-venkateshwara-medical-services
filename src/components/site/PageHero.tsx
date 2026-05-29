export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0.5px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        {eyebrow && <div className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">{eyebrow}</div>}
        <h1 className="font-display text-4xl font-extrabold md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
