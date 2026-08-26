import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Home } from './pages/Home'
import { ProjectsArchive } from './pages/ProjectsArchive'
import { Resume } from './pages/Resume'

// /costcogas is a separate static app (built by the costco-pump repo) served
// at that path by Caddy at the edge -- it never reaches this bundle or router.
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsArchive />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
