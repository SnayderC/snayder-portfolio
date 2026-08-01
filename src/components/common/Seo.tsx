import { useEffect } from 'react'

const defaultDescription = 'Portafolio de Snayder Cedeño, Desarrollador Full Stack Junior especializado en Python, Django REST Framework, React, PostgreSQL y aplicaciones web.'

export function Seo({ title, description = defaultDescription }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [description, title])

  return null
}
