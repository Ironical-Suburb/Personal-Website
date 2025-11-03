import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const InternshipCard = ({ internship, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-start transition-all duration-700 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      } ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
        <div className={`${theme.card} rounded-lg ${theme.shadow} hover:shadow-xl transition-all p-6 border ${theme.border} transform hover:scale-105`}>
          <div className="text-sm font-semibold text-primary-600 mb-2">
            {internship.date}
          </div>
          <h3 className={`text-xl font-semibold mb-1 ${theme.text.primary}`}>
            {internship.title}
          </h3>
          <h4 className="text-lg text-primary-600 mb-3">{internship.company}</h4>
          <p className={`${theme.text.secondary} mb-4`}>{internship.description}</p>
          {internship.responsibilities && internship.responsibilities.length > 0 && (
            <ul className={`list-disc list-inside space-y-2 ${theme.text.secondary}`}>
              {internship.responsibilities.map((resp, idx) => (
                <li key={idx} className={`transition-all ${theme.hover.text}`}>{resp}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  )
}

const Internships = ({ internships }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  if (!internships || internships.length === 0) {
    return (
      <section id="internships" className={`py-20 ${theme.bg.secondary} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary}`}>
            Internship Experiences
          </h2>
          <p className={`text-center ${theme.text.muted}`}>No internships available yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="internships" className={`py-20 ${theme.bg.secondary} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          Internship Experiences
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-400 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <InternshipCard key={internship.id} internship={internship} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships

