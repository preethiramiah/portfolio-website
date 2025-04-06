import resume from './docs/resume.json'
import './App.css'
import CirclesBackground from './components/CirclesBackground'
import About from './pages/About'
import Menu from './pages/Menu'
import Carousel from './components/Carousel'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  const {
    about,
    carousel: { content },
    skills
  } = resume
  return (
    <>
      <CirclesBackground />
      <div className='flex flex-col items-center justify-center'>
        <Menu />
        <About about={about} />
        <Carousel content={content} />
        <Skills skills={skills} />
        <Projects />
      </div>
    </>
  )
}

export default App
