import resume from './docs/resume.json'
import './App.css'
import CirclesBackground from './components/CirclesBackground'
import About from './pages/About'
import Menu from './pages/Menu'
import Carousel from './components/Carousel'

function App() {
  const { about, carousel: { content } } = resume
  return (
    <CirclesBackground>
      <>
        <Menu />
        <About about={about} />
        <Carousel content={content} />
      </>
    </CirclesBackground>
  )
}

export default App
