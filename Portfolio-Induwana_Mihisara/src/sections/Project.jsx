import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import Carousel from '../components/Carousel'
import { SeSlides } from '../constants'
import { DevOpsSlides } from '../constants'




const Project = () => {
  return (
    <section className='w-full h-full flex-center relative' id='projects'>
      <GradientSpheres 
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      
    <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container px-10 md:mb-10 mb-0">
          <TitleHeader
            title="SE PROJECTS"
            number="04"
            text="Check my recent project brloe for your Goal."
          />
        </div>
        <div className='md:mt-20 mt-10'>
           <Carousel slides={SeSlides} sliderItem="slider_item_se"/>
        </div>
    </div>

        <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container px-10 md:mb-10 mb-0">
          <TitleHeader
            title="DevOps PROJECTS"
            number="05"
            text="Check my recent project brloe for your Goal."
          />
        </div>
        <div className='md:mt-20 mt-10'>
           <Carousel slides={DevOpsSlides} sliderItem="slider_item_devOps"/>
        </div>
    </div>
    </section>
  )
}

export default Project