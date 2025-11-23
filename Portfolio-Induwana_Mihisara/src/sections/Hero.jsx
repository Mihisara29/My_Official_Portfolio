import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperince from "../components/HeroExperince";


const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 px-10"
    >
          <GradientSpheres sphere1Class={"gradient-sphere sphere-1"} sphere2Class={"gradient-sphere sphere-2"} />  
      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">

          <div className="md:mt-20 mt-20">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I'm Here
            </p>
            <h1 className="font-bold md:text-8xl text-5xl">
              INDUWARA MIHISARA
            </h1>
            <h1 className="font-bold md:text-8xl text-5xl">CREATIVE</h1>
          </div>

          <div className="absolute w-full z-30 bottom-30 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img className='size-7 animate-bounce'src="images/arrowdown.svg" alt="arrowdown" />
              </div>
              <div className="flex flex-col items-end">
                <img src="images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-5xl text-4xl">Se&DevOps</h1>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full h-full absolute inset-0 border">
        <HeroExperince />
      </div>
    </section>
  );
};

export default Hero;
