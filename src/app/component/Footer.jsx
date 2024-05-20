import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black max-w-full min-h-[10vh] px-8 pt-10 sm:pt-6 text-white flex flex-col sm:flex-row justify-between'>
        <div>
        <h2 className=''>
                <Link href='/'>Hi-Tech Multipurpose Ltd</Link>
            </h2>        
        </div>
        <div className='pt-12 sm:pt-0'>
            <input type="email" placeholder='ENTER YOUR EMAIL ADDRESS ' id='email' className='border-b-[0.5px] border-b-[#F4F4F] bg-black outline-none placeholder:text-[12px] text-[#F4F4F] pb-2 w-[300px]'/>
            <button className='border-b-[0.5px] border-b-[#F4F4F] pb-[9px] text-[12px]'>SUBMIT</button>
        </div>
        
    </footer>
  )
}

export default Footer