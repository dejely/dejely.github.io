import './App.css'
import { HeroSection, ProjectsSection } from './components'
import { usePointerParallax } from './hooks'
import { FEATURED_PROJECT, HERO_CONTENT, PROJECTS } from './lib/constants'

function App() {
  const parallaxStyle = usePointerParallax()

  return (
    <main className="portfolio" style={parallaxStyle}>
      <div className="ambient ambient-top" aria-hidden="true" />
      <div className="ambient ambient-side" aria-hidden="true" />

      <HeroSection content={HERO_CONTENT} />
      <ProjectsSection featuredProject={FEATURED_PROJECT} projects={PROJECTS} />
    </main>
  )
}

export default App
