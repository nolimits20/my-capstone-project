import Link from 'next/link'
import React from 'react'

const FooterMenu = () => {
  return (
    <footer className='bg-black max-w-full min-h-[20vh]  text-white px-8 flex flex-col sm:flex-row justify-between'>
        <div>
        <ul className='space-y-2 text-[12px] mt-[5rem] mb-[-2rem] sm:mb-0'>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    ORDER NOW
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    <Link href={'/about'}>ABOUT</Link>
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    <Link href={'/contact'}>CONTACT</Link>
                </li>
            </ul>
            
          </div>
        <div>
        <ul className='space-y-2 text-[12px] mt-[5rem] mb-[-2rem] sm:mb-0'>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    TERMS
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    SHIPPING POLICY
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    REFUND POLICY
                </li>
            </ul>
        </div>
        <div className='mr-[70rem] mb-[-2rem] sm:mb-0'>
        <ul className='space-y-2 text-[12px] mt-[5rem] '>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    INSTAGRAM
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    FACEBOOK
                </li>
                <li className='hover:text-[#f4f4f973] hover:cursor-pointer hover:text-[10px]'>
                    TWITTER
                </li>
            </ul>
        </div>
        <div className='space-y-2 text-[12px] mt-[105px] text-[#f4f4f973]'>
            <h3>LICENSES</h3>
            <p>&copy;2024</p>
        </div>
        
        

    </footer>
  )
}

export default FooterMenu