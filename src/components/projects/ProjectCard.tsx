import { Link } from 'react-router'
import type { Project } from '../../types/project'

const statusLabels = { completed: 'Completado', deployed: 'Desplegado', 'in-progress': 'En progreso', 'demo-preparation': 'En preparación para demo' }

export function ProjectCard({ project, prominent = false }: { project: Project; prominent?: boolean }) {
  return <article className={`group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)] ${prominent ? 'lg:col-span-2 lg:p-8' : ''}`}>
    {project.screenshots[0] && <img className="mb-6 aspect-[2/1] w-full rounded-xl border border-[var(--border)] object-cover" src={project.screenshots[0].src} alt={project.screenshots[0].alt} width={project.screenshots[0].width} height={project.screenshots[0].height} loading="lazy" />}
    <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[color:rgb(52_211_153_/_0.12)] px-2.5 py-1 font-mono text-xs text-[var(--accent)]">{statusLabels[project.status]}</span>{project.type === 'collaborative' && <span className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">Proyecto colaborativo</span>}</div>
    <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">{project.shortDescription}</p>
    <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, prominent ? 7 : 5).map((technology) => <span key={technology} className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">{technology}</span>)}</div>
    <div className="mt-7 flex flex-wrap gap-4"><Link to={`/proyectos/${project.slug}`} className="font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]">Ver caso de estudio <span aria-hidden="true">→</span></Link><a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Código <span className="sr-only">de {project.title}</span><span aria-hidden="true">↗</span></a>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Demo <span aria-hidden="true">↗</span></a>}</div>
  </article>
}
