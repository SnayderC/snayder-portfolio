import { BrowserRouter } from 'react-router'
import { ScrollToTop } from './components/common/ScrollToTop'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
