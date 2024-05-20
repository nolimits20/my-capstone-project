import React from 'react'


const background = () => {
  return (
    <div className='relative min-h-screen flex justify-center items-center'>
    <video 
      src="/red-vintage-car.mp4" 
      className='absolute top-0 left-0 w-full h-full object-cover' 
      autoPlay 
      muted 
      loop 
    ></video>
    <div className='absolute bottom-0 left-0 pl-8 pb-16 text-white font-extrabold'>
      <h2 className='text-[40px] tracking-[-1.5px] sm:text-[50px] sm:tracking-[-3px] shadow-[2px 2px 4px rgba(0, 0, 0, 0.6)]' style={{ lineHeight: '1.4,' }}>
        Driving is a way of life <br />
        And a car is a tool to <br />
        Explore the world
      </h2>
      <div className='space-x-4 mt-2'>
          <button className='bg-[#F4F4F9] w-[30%] h-[50px] text-black'>BUY NOW</button>
          <button className='bg-transparent w-[45%] h-[50px] text-black border-[#F4F4F9] border-2 hover:bg-[#F4F4F9]'>ABOUT HI-TECH</button>
      </div>
    </div>
    
  </div>
  )
}

export default background