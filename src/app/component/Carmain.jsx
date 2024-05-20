import React from 'react'
import Image from 'next/image'

const Carmain = () => {
  return (
    <div className='flex flex-col px-8 gap-2 sm:flex sm:flex-row'>
    <div className='relative w-full text-center pt-8'>
      <Image 
        src='/sports-car.jpg' 
        alt='sport car' 
        width={1000} 
        height={1000} 
        className=''
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-white text-3xl font-bold'>Sports Car</h2>
      </div>
    </div>
    <div className='relative w-full text-center pt-8'>
      <Image 
        src='/suv-car.jpg' 
        alt='suv car' 
        width={1000} 
        height={1000} 
        className=''
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-white text-3xl font-bold'>Sports Utility Vehicle</h2>
      </div>
    </div>
  </div>
  )
}

export default Carmain