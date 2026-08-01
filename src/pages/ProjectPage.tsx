import { Link, Navigate, useParams } from 'react-router'
import { Navbar } from '../components/layout/Navbar'
import { Seo } from '../components/common/Seo'
import { projectBySlug } from '../data/projects'
import type { ProjectStatus } from '../types/project'

const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Completado', deployed: 'Funcional y desplegado', 'in-progress': 'En progreso', 'demo-preparation': 'En preparación para demo',
}

function Pending({ title }: { title: string }) {
  return <section className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-6"><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[var(--text-secondary)]">Información pendiente de confirmación o documentación. Se añadirá cuando esté verificada para evitar presentar detalles imprecisos.</p></section>
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? projectBySlug.get(slug) : undefined

  if (!project) return <Navigate to="/404" replace />

  return <><Seo title={`${project.title} | Snayder Cedeño`} description={project.shortDescription} /><a href="#main-content" className="skip-link">Saltar al contenido</a><Navbar /><main id="main-content">
    <header className="border-b border-[var(--border)]"><div className="mx-auto max-w-5xl px-5 py-16 sm:py-20 lg:px-8"><Link to="/#proyectos" className="font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]">← Todos los proyectos</Link><div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full bg-[color:rgb(52_211_153_/_0.12)] px-3 py-1.5 font-mono text-xs text-[var(--accent)]">{statusLabels[project.status]}</span>{project.type === 'collaborative' && <span className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-xs text-[var(--text-secondary)]">Proyecto colaborativo</span>}</div><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{project.fullDescription}</p><div className="mt-8 flex flex-wrap gap-3"><a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-[var(--border)] px-5 py-3 font-semibold hover:bg-[var(--surface)]">Ver código ↗</a>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-[var(--primary)] px-5 py-3 font-semibold text-[#08111e] hover:bg-[var(--primary-hover)]">Ver demo ↗</a>}</div></div></header>
    <article className="mx-auto max-w-5xl space-y-12 px-5 py-16 lg:px-8"><section className="grid gap-6 lg:grid-cols-2"><div><p className="font-mono text-sm text-[var(--primary)]">EL PROYECTO</p><h2 className="mt-3 text-2xl font-bold">Problema y solución</h2></div><div className="space-y-6">{project.problem ? <><div><h3 className="font-semibold">Problema</h3><p className="mt-2 leading-7 text-[var(--text-secondary)]">{project.problem}</p></div><div><h3 className="font-semibold">Solución</h3><p className="mt-2 leading-7 text-[var(--text-secondary)]">{project.solution}</p></div></> : <p className="leading-7 text-[var(--text-secondary)]">La descripción técnica detallada se documentará después de la revisión del proyecto.</p>}</div></section>
      <section className="border-t border-[var(--border)] pt-12"><p className="font-mono text-sm text-[var(--primary)]">PARTICIPACIÓN</p><h2 className="mt-3 text-2xl font-bold">Mi contribución</h2><p className="mt-3 text-[var(--text-secondary)]">{project.role}</p>{project.responsibilities.length > 0 ? <ul className="mt-6 grid gap-3 sm:grid-cols-2">{project.responsibilities.map((item) => <li key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text-secondary)]">{item}</li>)}</ul> : <p className="mt-5 text-[var(--text-muted)]">Pendiente de documentar tras la revisión técnica.</p>}</section>
      <section className="border-t border-[var(--border)] pt-12"><p className="font-mono text-sm text-[var(--primary)]">TECNOLOGÍAS</p><h2 className="mt-3 text-2xl font-bold">Stack utilizado</h2><ul className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-sm text-[var(--text-secondary)]">{technology}</li>)}</ul></section>
      {project.features.length > 0 && <section className="border-t border-[var(--border)] pt-12"><p className="font-mono text-sm text-[var(--primary)]">FUNCIONALIDADES</p><h2 className="mt-3 text-2xl font-bold">Qué permite hacer</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text-secondary)]">{feature}</li>)}</ul></section>}
      {project.screenshots.length > 0 && <section className="border-t border-[var(--border)] pt-12"><p className="font-mono text-sm text-[var(--primary)]">CAPTURAS</p><h2 className="mt-3 text-2xl font-bold">Interfaz del proyecto</h2><div className="mt-6 grid gap-5">{project.screenshots.map((screenshot) => <figure key={screenshot.src} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"><img className="h-auto w-full" src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" /><figcaption className="px-4 py-3 text-sm text-[var(--text-muted)]">{screenshot.alt}</figcaption></figure>)}</div></section>}
      <section className="grid gap-5 border-t border-[var(--border)] pt-12 lg:grid-cols-2"><Pending title="Arquitectura y decisiones técnicas" /><Pending title="Retos y próximos pasos" /></section>
    </article>
  </main></>
}
