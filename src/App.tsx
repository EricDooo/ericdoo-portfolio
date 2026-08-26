import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Home } from './pages/Home'

// Single-page portfolio -- no router. /costcogas is a separate static app
// (built by the costco-pump repo) served at that path by Caddy at the edge;
// it never reaches this bundle.
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
