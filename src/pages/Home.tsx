import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  )
}
