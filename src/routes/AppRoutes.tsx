import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

const HomePage = lazy(async () => {
  const module = await import('../pages/HomePage')
  return { default: module.HomePage }
})
const ProjectPage = lazy(async () => {
  const module = await import('../pages/ProjectPage')
  return { default: module.ProjectPage }
})
const NotFoundPage = lazy(async () => {
  const module = await import('../pages/NotFoundPage')
  return { default: module.NotFoundPage }
})

export function AppRoutes() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[var(--background)]" aria-busy="true" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
