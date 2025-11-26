interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3 text-white">
      <p className="text-xs uppercase tracking-[0.4em] text-sky-200">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="text-lg text-white/70">{subtitle}</p>}
    </div>
  );
}
