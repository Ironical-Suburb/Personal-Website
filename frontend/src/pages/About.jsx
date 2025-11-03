import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${theme.text.primary} leading-tight`}>
            Hi, I'm Priyanshu Pusola
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className={`text-xl md:text-2xl ${theme.text.secondary} leading-relaxed`}>
              Computer Science Student & Software Developer
            </p>
            <p className={`text-lg ${theme.text.muted} leading-relaxed`}>
              Passionate about building innovative solutions with AI, functional testing, and exploring new technologies. 
              Currently pursuing a Bachelor of Science in Computer Science at the University of Alberta, expected to graduate in December 2025.
            </p>
          </div>

          <div className={`${theme.card} rounded-2xl ${theme.shadow} p-8 border ${theme.border} mb-8`}>
            <h2 className={`text-2xl font-bold mb-6 ${theme.text.primary}`}>About Me</h2>
            <div className={`space-y-4 ${theme.text.secondary} text-lg leading-relaxed`}>
              <p>
                I'm a dedicated computer science student with a passion for software development, 
                functional testing, and artificial intelligence. Through my internships at BlackBerry 
                and Newgen Software, I've gained hands-on experience in building scalable applications 
                and working with cutting-edge AI technologies.
              </p>
              <p>
                I've served in leadership roles at Theta Chi Fraternity as Secretary, Treasurer, and 
                currently as President, developing strong collaboration and management skills. I actively 
                participate in hackathons and continuously work on personal projects to expand my 
                technical expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Education</h3>
              <p className={`${theme.text.secondary} mb-2`}>
                <span className="font-semibold">University of Alberta</span>
              </p>
              <p className={`${theme.text.muted} text-sm mb-2`}>
                Bachelor of Science, Computer Science
              </p>
              <p className={`${theme.text.muted} text-sm`}>
                Expected: December 2025
              </p>
              <p className={`${theme.text.muted} text-sm mt-2`}>
                Edmonton, AB
              </p>
            </div>

            <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Contact</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:pusola@ualberta.ca" 
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  pusola@ualberta.ca
                </a>
                <a 
                  href="tel:8259661673" 
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  (825) 966-1673
                </a>
                <p className={theme.text.muted}>Edmonton, AB</p>
              </div>
            </div>
          </div>

          <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
            <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Leadership Experience</h3>
            <div className={`space-y-3 ${theme.text.secondary}`}>
              <div>
                <p className="font-semibold">Theta Chi Fraternity</p>
                <p className={`text-sm ${theme.text.muted}`}>
                  President (2024-2025) • Treasurer (2023-2024) • Secretary (2022-2023)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

