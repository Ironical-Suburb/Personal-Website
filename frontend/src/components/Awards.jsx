import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const AwardCard = ({ award, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const theme = useTimeBasedTheme()

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br ${theme.gradient} rounded-xl ${theme.shadow} hover:shadow-xl transition-all duration-700 p-6 border ${theme.border} text-center transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } hover:scale-105`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 transform transition-transform hover:scale-110 hover:rotate-12">
        {award.icon || '🏆'}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${theme.text.primary}`}>{award.title}</h3>
      <p className="text-primary-600 font-medium mb-1">{award.organization}</p>
      <p className={`text-sm mb-3 ${theme.text.muted}`}>{award.date}</p>
      <p className={theme.text.secondary}>{award.description}</p>
    </div>
  )
}

const Awards = ({ awards }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  if (!awards || awards.length === 0) {
    return (
      <section id="awards" className={`py-20 ${theme.bg.primary} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary}`}>
            Awards & Achievements
          </h2>
          <p className={`text-center ${theme.text.muted}`}>No awards available yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="awards" className={`py-20 ${theme.bg.primary} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

