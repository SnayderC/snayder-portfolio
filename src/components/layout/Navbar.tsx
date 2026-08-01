import { useState } from 'react'

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#tecnologias', label: 'Tecnologías' },
  { href: '/#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgb(8_13_24_/_0.92)] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
        <a href="/#inicio" className="font-mono text-lg font-bold tracking-tight text-[var(--text-primary)]">SC<span className="text-[var(--primary)]">.dev</span></a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">{link.label}</a>)}
          <a href="/cv/Snayder-Cedeno-CV.pdf" download className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">Descargar CV</a>
        </div>
        <button type="button" className="rounded-lg border border-[var(--border)] p-2 text-[var(--text-primary)] md:hidden" aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen((open) => !open)}>
          <span className="sr-only">{isOpen ? 'Cerrar' : 'Abrir'} menú</span><span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
      </nav>
      {isOpen && <div id="mobile-menu" className="border-t border-[var(--border)] px-5 py-4 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)]">{link.label}</a>)}
          <a href="/cv/Snayder-Cedeno-CV.pdf" download className="mt-2 rounded-lg border border-[var(--border)] px-3 py-2.5 text-sm font-medium text-[var(--text-primary)]">Descargar CV</a>
        </div>
      </div>}
    </header>
  )
}
