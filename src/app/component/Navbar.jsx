import Link from 'next/link'
import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";

const link = [
    {name: 'ORDER', href: '/order'},
    {name: 'ABOUT', href: '/about'},
    {name: 'CONTACT', href: '/contact'}
]
const Navbar = () => {
const val = 0
  return (
    <nav className='bg-[#F4F4F9] max-w-full px-8 items-center min-h-[5vh] fixed inset-x-0 z-[2] flex flex-col sm:flex-row justify-between'>
        <div className=''>
            <h1 className='text-black font-bold text-lg'>
                <Link href='/'>Hi-Tech Multipurpose Ltd</Link>
            </h1>
        </div>
        <div className='text-black text-[12px]'>
            <ul className='flex gap-4'>
               {
                link.map((link) =>(
                    <li key={link.href}>
                        <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                    </li>
                ))
               }
                <li className='pt-0.5 font-semibold'><RiShoppingBagLine /></li>
                <li className='font-semibold'>({val})</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar