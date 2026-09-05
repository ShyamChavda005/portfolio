import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 antialiased">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
