import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={`pt-24 pb-16 bg-gradient-to-br ${theme.gradient} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme.text.primary}`}>
            Hi, I'm <span className="text-primary-600">Priyanshu Pusola</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-4 ${theme.text.secondary}`}>
            Computer Science Student & Software Developer
          </p>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${theme.text.muted}`}>
            Passionate about building innovative solutions with AI, functional testing, and exploring new technologies. 
            Currently pursuing a Bachelor of Science in Computer Science at the University of Alberta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 ${theme.card} text-primary-600 border-2 border-primary-600 rounded-lg font-medium ${theme.hover.card} transition-all transform hover:scale-105`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

