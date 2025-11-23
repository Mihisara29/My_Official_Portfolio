import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import GradientSpheres from './components/GradientSpheres'
import TechStack from './sections/TechStack'
import Project from './sections/Project'
import Contact from './sections/Contact'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className="div">
      <Toaster position="top-right" reverseOrder={false} />
      <Hero/>
      <About/>
      <TechStack/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App