'use client'

import { useState, type ChangeEvent } from 'react'
import Link from 'next/link'
import projectsData from '../projects.json'
import './projects.css'

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
  category: string[]
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

type ItemsPerPage = 10 | 20 | 50 | 100 | 'all'

const projects = projectsData as Project[]

export default function ProjectsSection() {
  const [category, setCategory] = useState<FilterCategory>('all')
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(10)

  const filteredProjects =
    category === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(category))

  const displayedProjects =
    itemsPerPage === 'all'
      ? filteredProjects
      : filteredProjects.slice(0, itemsPerPage)

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'all') {
      setItemsPerPage('all')
    } else {
      setItemsPerPage(Number(value) as ItemsPerPage)
    }
  }

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

        {/* toolbar: items-per-page + count */}
        <div className="projects-subheader">
          <div className="projects-count">
            แสดง {displayedProjects.length.toLocaleString('th-TH')} /{' '}
            {filteredProjects.length.toLocaleString('th-TH')} โครงการ
          </div>

          <div className="projects-page-size">
            <label>
              แสดงสูงสุด:{' '}
              <select
                value={itemsPerPage === 'all' ? 'all' : itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="10">10 รายการ</option>
                <option value="20">20 รายการ</option>
                <option value="50">50 รายการ</option>
                <option value="100">100 รายการ</option>
                <option value="all">ทั้งหมด</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="projects-grid display-posts-listing">
        {displayedProjects.map((project) => (
          <article key={project._id} className="listing-item project-card">
            <div className="image project-card-image-wrapper">
              <Link href={'#'} className="removeUnderLine">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={'/images/logo/logo_SGW_white.svg'}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="project-card-image"
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
