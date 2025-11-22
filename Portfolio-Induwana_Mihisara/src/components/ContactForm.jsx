import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex justify-center'>
      <form className='w-full text-primary flex flex-col gap-7'>
        <div>
            <label htmlFor="name" className='label'>Name</label>
            <input type="text" id='name' placeholder='Alex' className='input' />
        </div>

                <div>
            <label htmlFor="name" className='label'>Email</label>
            <input type="text" id='email' placeholder='alex@gmail.com' className='input' />
        </div>

                <div>
            <label htmlFor="name" className='label'>Subject</label>
            <input type="text" id='subject' placeholder='Alex' className='input' />
        </div>

                <div>
            <label htmlFor="name" className='label'>Message</label>
            <textarea type="text"
             id='name' placeholder='Alex' rows={5}
             className='input' />
        </div>

        <button type='sabmit' className='w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm 