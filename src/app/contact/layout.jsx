import React from 'react'

const layout = () => {
  return (
    <div className='sm:grid-cols-2'>
      <div className='px-8'>
        <h1 className='pt-20 text-2xl sm:text-5xl lg:text-5xl md:text-3xl  text-black font-bold'>Contact Us</h1>
        <p className='text-black text-sm pt-4'>Have a question, comment, or just want to say hello? We're here for you! <br /> Feel free to reach out to our friendly team for expert assistance, personalized <br /> recommendations, or any inquiries you may have</p>
      </div>
      <div>
        <video
          src="/thank-you.mp4"
          className=' px-8 mt-12 sm:h-[800px] w-full h-full object-cover'
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className='sm:grid grid-cols-2'>
        <div className='px-8  w-full h-[500px]  mt-8'>
          <h2 className='text-black text-lg sm:text-3xl pt-8'>Get in Touch</h2>
          <div>
          <input type="text" id='name' placeholder='FULL NAME'  className='border-b-black  border-b-2 w-full mt-10 p-2 bg-white outline-none'/>
          <input type="email" id='email' placeholder='EMAIL'  className='border-b-black  border-b-2 w-full mt-10 p-2 bg-white outline-none'/>
          <textarea name="message" id="message" placeholder='MESSAGE 'className='w-full mt-8 bg-white outline-none border-b-black border-b-2 p-2'></textarea>
        </div>
        <div className='bg-black w-full  text-center text-white mt-10 h-[50px] py-3'>
          <button>SEND A MESSAGE</button>
        </div>
        </div>
        <div className='px-8 w-full sm:w-[50%] h-[500px]  mt-8'>
        <h2 className='text-black text-lg sm:text-3xl pt-8'>Lets Connect</h2>
        </div>
      </div>
      
    </div>
    
  )
}

export default layout