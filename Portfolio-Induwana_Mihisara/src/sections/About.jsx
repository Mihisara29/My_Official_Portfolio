import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center relative px-5 border border-re"
    >
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator,Lifelong Learner"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">

              <div className="md:col-span-7 col-span-12 row-span-5">
                <div className="bg-black-300 rounded-2xl p-7 w-full">
                  <div>
                    <img src="/images/flower.svg" alt="flower" className="md:w-32 w-16 flower"/>
                  </div>
                  <div className="mt-5">
                    <h1 className="md:text-5xl text-3xl">Induwara Mihisara</h1>
                    <p className="md:text-2xl mt-2"> A highly motivated Software Engineering undergraduate with strong hands-on experience in full-stack
 development, DevOps practices, and cloud technologies. Passionate about solving real-world problems,
 building scalable systems, and continuously learning modern tools. Skilled in collaboration, creative
 thinking, and delivering high-quality software through practical, project-based learning</p>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
