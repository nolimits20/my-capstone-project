import Link from 'next/link'
import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
const Navbar = () => {
const val = 0
  return (
    <nav className='bg-slate-200 max-w-full px-16 items-center min-h-[5vh] flex flex-col sm:flex-row justify-between'>
        <div className=''>
            <h1>
                <Link href='/'>Hi-Tech Multipurpose Ltd</Link>
            </h1>
        </div>
        <div className=''>
            <ul className='flex gap-4'>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
                <li><RiShoppingBagLine /></li>
                <li>{val}</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar