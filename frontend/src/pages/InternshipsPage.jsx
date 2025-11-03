import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { fetchInternships } from '../services/api'

const InternshipsPage = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const theme = useTimeBasedTheme()

  useEffect(() => {
    const loadInternships = async () => {
      setLoading(true)
      try {
        console.log('Loading internships...')
        const data = await fetchInternships()
        console.log('Loaded internships:', data)
        setInternships(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error loading internships:', error)
        setInternships([])
      } finally {
        setLoading(false)
      }
    }
    loadInternships()
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-4xl md:text-6xl font-bold mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          Internship Experiences
        </h2>
        {loading ? (
          <div className={`text-center ${theme.text.secondary}`}>Loading internships...</div>
        ) : internships.length === 0 ? (
          <div className={`text-center ${theme.text.muted} text-lg`}>
            No internships available yet. Check back soon!
          </div>
        ) : (
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div key={internship.id} className={`${theme.card} rounded-xl ${theme.shadow} p-8 border ${theme.border}`}>
                <div className={`text-sm font-semibold mb-2 ${theme.text.secondary}`}>{internship.date}</div>
                <h3 className={`text-2xl font-semibold mb-2 ${theme.text.primary}`}>{internship.title}</h3>
                <h4 className={`text-xl mb-4 ${theme.text.primary}`}>{internship.company}</h4>
                <p className={`${theme.text.secondary} mb-4`}>{internship.description}</p>
                {internship.responsibilities && internship.responsibilities.length > 0 && (
                  <ul className={`list-disc list-inside space-y-2 ${theme.text.secondary}`}>
                    {internship.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default InternshipsPage

