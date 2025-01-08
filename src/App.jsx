
import './App.css'
import About from './components/About'
import Footer from './components/Footer'

import { GridBackgroundDemo } from './components/GridBackground'
import {FloatingNavDemo} from "./components/Navbar"

function App() {
  

  return (
    <div>
      <FloatingNavDemo/>
      <GridBackgroundDemo/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
