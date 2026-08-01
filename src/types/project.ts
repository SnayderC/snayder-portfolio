export type ProjectType = 'individual' | 'collaborative'

export type ProjectStatus = 'completed' | 'deployed' | 'in-progress' | 'demo-preparation'

export interface ProjectScreenshot {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  role: string
  type: ProjectType
  status: ProjectStatus
  featured: boolean
  technologies: string[]
  problem: string
  solution: string
  responsibilities: string[]
  features: string[]
  decisions: string[]
  challenges: string[]
  learnings: string[]
  improvements: string[]
  repositoryUrl: string
  demoUrl?: string
  coverImage?: string
  screenshots: ProjectScreenshot[]
}
