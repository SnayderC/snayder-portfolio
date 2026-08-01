interface SectionHeadingProps { eyebrow: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return <div className="max-w-2xl"><p className="font-mono text-sm text-[var(--primary)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">{description}</p>}</div>
}
