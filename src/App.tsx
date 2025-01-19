import './App.css'
import CirclesBackground from './components/CirclesBackground'
import About from './pages/About'
import Menu from './pages/Menu'

function App() {
  return (
    <CirclesBackground>
      <>
        <Menu />
        <About />
      </>
    </CirclesBackground>
  )
}

export default App
