'use client'

import { useState } from 'react'
import Link from 'next/link'
import projectsData from '../projects.json'

// 1) Types for filter + project
type FilterCategory = 'all' | 'government-project' | 'private-organization'
type ProjectCategory = Exclude<FilterCategory, 'all'>

type Project = {
  id: string
  title: string
  location: string
  typeOfWork: string
  businessType?: string
  year: number // <- match JSON: number
  url: string
  category: ProjectCategory
  imageUrl: string
}

// 2) Type for raw JSON structure
type RawProject = {
  id: string
  title: string
  year: number
  location: string
  typeOfWork: string
  businessType?: string
  url: string
  imageUrl: string
  category: string
}

// 3) Safely map JSON -> typed projects
const rawProjects = projectsData as RawProject[]

const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  category: p.category as ProjectCategory,
}))

// 4) Component
export default function ProjectsSection() {
  const [category, setCategory] = useState<FilterCategory>('all')

  const filteredProjects: Project[] =
    category === 'all'
      ? projects
      : projects.filter((p) => p.category === category)

  return (
    <section className="home-projects thirdBackground">
      <div className="projects-header">
        <h2 className="elementor-heading-title elementor-size-default">
          ตัวอย่าง โครงการของเรา
        </h2>

        <div className="projects-filter-buttons">
          <button
            className={`filter-button ${
              category === 'all' ? 'active' : ''
            } filter-all`}
            onClick={() => setCategory('all')}
            data-category="all"
          >
            ทั้งหมด
          </button>

          <button
            className={`filter-button ${
              category === 'government-project' ? 'active' : ''
            }`}
            onClick={() => setCategory('government-project')}
            data-category="government-project"
          >
            งานรัฐบาล
          </button>

          <button
            className={`filter-button ${
              category === 'private-organization' ? 'active' : ''
            }`}
            onClick={() => setCategory('private-organization')}
            data-category="private-organization"
          >
            งานเอกชน
          </button>
        </div>
      </div>

      <div className="projects-grid display-posts-listing">
        {filteredProjects.map((project) => (
          <article key={project.id} className="listing-item project-card">
            <div className="image">
              <Link href={project.url} className="removeUnderLine">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ borderRadius: 10, width: '100%', height: 'auto' }}
                />
              </Link>
            </div>

            <Link href={project.url} className="removeUnderLine">
              <h4
                className="Project-Title title SP-textHead5 removeUnderLine"
                style={{ textAlign: 'center', marginBottom: 0 }}
              >
                {project.title}
              </h4>
            </Link>

            <h5 className="project-date SP-textHead4">{project.year}</h5>

            <p
              className="project-location SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.location}
            </p>

            <p
              className="project-type-of-work SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.typeOfWork}
            </p>

            {project.businessType && (
              <p
                className="project-business-type SP-hidden"
                style={{ textAlign: 'center' }}
              >
                ประเภทธุรกิจ: {project.businessType}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
