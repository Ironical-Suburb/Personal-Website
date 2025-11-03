import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const HobbyCard = ({ hobby, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const theme = useTimeBasedTheme()

  return (
    <div
      ref={ref}
      className={`${theme.card} rounded-xl ${theme.shadow} hover:shadow-xl transition-all duration-700 p-6 border ${theme.border} text-center transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } hover:scale-105`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
        {hobby.icon || '🎯'}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${theme.text.primary}`}>{hobby.title}</h3>
      <p className={theme.text.secondary}>{hobby.description}</p>
    </div>
  )
}

const Hobbies = ({ hobbies }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  if (!hobbies || hobbies.length === 0) {
    return (
      <section id="hobbies" className={`py-20 ${theme.bg.secondary} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary}`}>
            Hobbies & Interests
          </h2>
          <p className={`text-center ${theme.text.muted}`}>No hobbies available yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="hobbies" className={`py-20 ${theme.bg.secondary} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies

