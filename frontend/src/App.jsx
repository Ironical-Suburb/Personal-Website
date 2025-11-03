import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import InternshipsPage from './pages/InternshipsPage'
import AwardsPage from './pages/AwardsPage'
import HobbiesPage from './pages/HobbiesPage'
import { useTimeBasedTheme } from './hooks/useTimeBasedTheme'

function App() {
  const theme = useTimeBasedTheme()

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 relative`} style={{ backgroundColor: 'transparent' }}>
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

