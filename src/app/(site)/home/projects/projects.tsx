'use client'

import { useState } from 'react'
import Link from 'next/link'
import projectsData from '../projects.json'

// ---- Types ----
type ProjectContent = {
  image: string
  text: string
}

type Project = {
  _id: number
  title: string
  year: number
  logo: string
  projectType: string
  lat: number
  lng: number
  coverImage: string
  category: string[] // 👈 array of strings
  contents: ProjectContent[]
}

// Filter categories
type FilterCategory =
  | 'all'
  | 'งานโครงการ'
  | 'นิคม โรงงาน'
  | 'อาหาร เครื่องดื่ม'
  | 'โรงแรม รีสอร์ท'
  | 'เกาะ'
  | 'เหมืองแร่ พลังงาน'
  | 'ฟาร์ม เกษตร ปศุสัตว์'
  | 'วัด โรงเรียน'
  | 'Dewatering'

const projects = projectsData as Project[]

export default function ProjectsSection() {
  const [category, setCategory] = useState<FilterCategory>('all')

  const filteredProjects =
    category === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(category))

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
          >
            ทั้งหมด
          </button>

          <button
            className={`filter-button ${
              category === 'งานโครงการ' ? 'active' : ''
            }`}
            onClick={() => setCategory('งานโครงการ')}
          >
            งานโครงการ
          </button>

          <button
            className={`filter-button ${
              category === 'นิคม โรงงาน' ? 'active' : ''
            }`}
            onClick={() => setCategory('นิคม โรงงาน')}
          >
            นิคม โรงงาน
          </button>

          <button
            className={`filter-button ${
              category === 'อาหาร เครื่องดื่ม' ? 'active' : ''
            }`}
            onClick={() => setCategory('อาหาร เครื่องดื่ม')}
          >
            อาหาร เครื่องดื่ม
          </button>

          <button
            className={`filter-button ${
              category === 'โรงแรม รีสอร์ท' ? 'active' : ''
            }`}
            onClick={() => setCategory('โรงแรม รีสอร์ท')}
          >
            โรงแรม รีสอร์ท
          </button>

          <button
            className={`filter-button ${category === 'เกาะ' ? 'active' : ''}`}
            onClick={() => setCategory('เกาะ')}
          >
            เกาะ
          </button>

          <button
            className={`filter-button ${
              category === 'เหมืองแร่ พลังงาน' ? 'active' : ''
            }`}
            onClick={() => setCategory('เหมืองแร่ พลังงาน')}
          >
            เหมืองแร่ พลังงาน
          </button>

          <button
            className={`filter-button ${
              category === 'ฟาร์ม เกษตร ปศุสัตว์' ? 'active' : ''
            }`}
            onClick={() => setCategory('ฟาร์ม เกษตร ปศุสัตว์')}
          >
            ฟาร์ม เกษตร ปศุสัตว์
          </button>

          <button
            className={`filter-button ${
              category === 'วัด โรงเรียน' ? 'active' : ''
            }`}
            onClick={() => setCategory('วัด โรงเรียน')}
          >
            วัด โรงเรียน
          </button>

          <button
            className={`filter-button ${
              category === 'Dewatering' ? 'active' : ''
            }`}
            onClick={() => setCategory('Dewatering')}
          >
            Dewatering
          </button>
        </div>
      </div>

      <div className="projects-grid display-posts-listing">
        {filteredProjects.map((project) => (
          <article key={project._id} className="listing-item project-card">
            <div className="image">
              <Link
                href={project.contents?.[0]?.image || '#'}
                className="removeUnderLine"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ borderRadius: 10, width: '100%', height: 'auto' }}
                />
              </Link>
            </div>

            <h4
              className="Project-Title title SP-textHead5 removeUnderLine"
              style={{ textAlign: 'center', marginBottom: 0 }}
            >
              {project.title}
            </h4>

            <h5 className="project-date SP-textHead4">{project.year}</h5>

            <p
              className="project-type-of-work SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.projectType}
            </p>

            <p
              className="project-category SP-textHead6"
              style={{ textAlign: 'center' }}
            >
              {project.category.join(' • ')}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
