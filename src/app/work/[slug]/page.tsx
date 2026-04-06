import { notFound } from 'next/navigation'
import { projects, getProject } from '@/data/projects'
import ProjectClient from './ProjectClient'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Jomil Shah`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const next = getProject(project.nextProject)
  return <ProjectClient project={project} nextProject={next} />
}
