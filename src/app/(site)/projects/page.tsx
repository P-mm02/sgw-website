import Projects from '../home/projects/projects'

export default function ProjectsPage() {
  return (
    <main className="projects-page" style={{ padding: '1rem' }}>
      {/* Reuse the Home projects section */}
      <Projects />
    </main>
  )
}
