
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import {CardHoverEffectDemo} from "./components/Services"
import { GridBackgroundDemo } from './components/GridBackground'
import {FloatingNavDemo} from "./components/Navbar"
import { TimelineDemo } from './components/Features'

function App() {
  

  return (
    <div>
      <FloatingNavDemo/>
      <GridBackgroundDemo/>
      <About/>
      <CardHoverEffectDemo/>
      <TimelineDemo/>
      <Footer/>
    </div>
  )
}

export default App
