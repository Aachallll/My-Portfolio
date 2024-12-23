import Home from "./component/Home"
import Navbar from "./component/Navbar"
import About from './component/About'
import Skills from "./component/Skills"
import Project from "./component/Project"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
