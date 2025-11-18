import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import GradientSpheres from './components/GradientSpheres'
import TechStack from './sections/TechStack'


const App = () => {
  return (
    <div className="div">
      <Hero/>
      <About/>
      <TechStack/>
    </div>
  )
}

export default App