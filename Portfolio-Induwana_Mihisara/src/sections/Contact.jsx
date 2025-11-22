import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Contact = () => {
  return (
    <section id='contact'
             className='flex justify-center relative px-10'
    >
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
            title="CONTACT ME"
            number="06"
            text="Let's collaborate on tailored, sustainable solutions."
          />

          <div className="mt-20">
            <div className="grid grid-cols-12">
              <div className="md:col-span-5 col-span-12"></div>
              <div className="md:col-span-7 col-span-12"></div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact