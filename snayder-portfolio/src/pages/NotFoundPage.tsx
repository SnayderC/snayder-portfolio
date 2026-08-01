import { Link } from 'react-router'
import { Navbar } from '../components/layout/Navbar'
import { Seo } from '../components/common/Seo'

export function NotFoundPage() {
  return (<>
    <Seo title="Página no encontrada | Snayder Cedeño" />
    <a href="#main-content" className="skip-link">Saltar al contenido</a>
    <Navbar />
    <main id="main-content" className="grid min-h-screen place-items-center bg-[var(--background)] px-6 text-center text-[var(--text-primary)]">
      <section>
        <p className="font-mono text-sm text-[var(--primary)]">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold">Esta página no existe.</h1>
        <Link className="mt-6 inline-flex text-[var(--primary)] underline underline-offset-4" to="/">Volver al inicio</Link>
      </section>
    </main>
  </>)
}
