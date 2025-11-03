import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <footer id="contact" className={`${theme.footer} text-white py-12 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6">
            <a
              href="mailto:pusola@ualberta.ca"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              aria-label="Email"
            >
              pusola@ualberta.ca
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="tel:8259661673"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              aria-label="Phone"
            >
              (825) 966-1673
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-gray-300">Edmonton, AB</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Priyanshu Pusola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

