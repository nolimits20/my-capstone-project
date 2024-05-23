import React from 'react';
import Link from 'next/link'

const Background = () => {
  return (
    <div className='relative min-h-screen flex justify-center items-center'>
      <video 
        src="/red-vintage-car.mp4" 
        className='absolute top-0 left-0 w-full h-full object-cover' 
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>
      <div className='absolute bottom-0 left-0 p-4 sm:p-8 pb-16 text-white font-extrabold ml-14 sm:ml-0'>
        <h2 className='text-[24px] sm:text-[40px] lg:text-[50px] tracking-[-1px] sm:tracking-[-3px] shadow-[2px 2px 4px rgba(0, 0, 0, 0.6)]' style={{ lineHeight: '1.4' }}>
          Driving is a way of life <br />
          And a car is a tool to <br />
          Explore the world
        </h2>
        <div className='flex flex-col sm:flex-row sm:space-x-4 mt-4'>
          <button className='bg-[#F4F4F9] w-full sm:w-auto sm:px-8 h-[50px] text-black mb-2 sm:mb-0'>
            BUY NOW
          </button>
          <button className='bg-transparent w-full sm:w-auto sm:px-8 h-[50px] text-black border-[#F4F4F9] border-2 hover:bg-[#F4F4F9]'>
            <Link href={'/about'}>ABOUT HI-TECH</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
