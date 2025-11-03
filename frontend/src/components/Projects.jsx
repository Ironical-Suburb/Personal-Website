import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [isExpanded, setIsExpanded] = useState(false)
  const theme = useTimeBasedTheme()

  return (
    <div
      ref={ref}
      className={`${theme.card} rounded-xl ${theme.shadow} hover:shadow-xl transition-all duration-700 border ${theme.border} transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div 
        className={`p-6 cursor-pointer ${theme.hover.card} rounded-xl transition-all`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-semibold ${theme.text.primary} flex items-center gap-3`}>
            <span className="text-2xl">{project.icon || '💻'}</span>
            {project.title}
          </h3>
          <button
            className={`${theme.text.secondary} transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-0 space-y-4">
          <p className={theme.text.secondary}>{project.description}</p>
          
          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className={`${theme.text.primary} font-semibold mb-2`}>Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full transition-all hover:bg-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {project.link && (
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-all group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = ({ projects }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className={`py-20 ${theme.bg.primary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary}`}>
            Computer Science Projects
          </h2>
          <p className={`text-center ${theme.text.muted}`}>No projects available yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className={`py-20 ${theme.bg.primary} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          Computer Science Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

