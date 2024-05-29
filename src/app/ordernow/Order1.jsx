import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Order1() {
  return (
    <div className='sm:flex px-8 gap-8 py-8'>
      <div className='relative sm:w-[900px] h-[600px] sm:h-[900px] overflow-hidden mt-12 sm:mt-0'>
        <Image
          src='/about-us.jpg'
          alt='about us'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h2 className='text-5xl text-center text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) font-bold text-[#f8f9face]'>Your Trust <br /> Our Commitment</h2>
          <Link href='/about'><button className='mt-4 px-4 py-2 bg-[#F0F4EF] hover:bg-slate-400 h-[60px] w-[150px] text-black'>About Us</button></Link>
        </div>
      </div>
      <div className='relative sm:w-[900px] h-[600px] sm:h-[900px] overflow-hidden mt-12 sm:mt-0'>
        <Image
          src='/contact-us.jpg'
          alt='contact us'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h2 className='text-5xl text-center  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)  font-bold text-[#f8f9face]'>Forward Your <br /> Complaints To Us</h2>
          <Link href='/contact'><button className='mt-4 px-4 py-2 bg-[#F0F4EF] hover:bg-slate-400 h-[60px] w-[150px] text-black'>Contact Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Order1
