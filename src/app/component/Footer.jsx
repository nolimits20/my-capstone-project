import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black max-w-full min-h-[10vh] px-16 text-white flex flex-col sm:flex-row justify-between'>
        <div>
        <h2 className=''>
                <Link href='/'>Hi-Tech Multipurpose Ltd</Link>
            </h2>        
        </div>
        <div>
            <input type="email" placeholder='ENTER YOUR EMAIL ADDRESS ' id='email'/>
            <button>SUBMIT</button>
        </div>
        
    </footer>
  )
}

export default Footer