'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const links = [
    {name: 'ORDER', href: '/order'},
    {name: 'ABOUT', href: '/about'},
    {name: 'CONTACT', href: '/contact'}
]

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const val = 0;

    return (
        <nav className='bg-[#F4F4F9] max-w-full px-8 items-center min-h-[8vh] sm:min-h-[5vh] fixed inset-x-0 z-[2] flex justify-between'>
            <div>
                <h1 className='text-black font-bold text-2xl sm:text-lg'>
                    <Link href='/'>Hi-Tech <span className='hidden sm:inline'>Multipurpose Ltd</span></Link>
                </h1>
            </div>
            <div className='flex items-center'>
                <ul className=' text-black hidden sm:flex flex-row gap-2'>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center ml-4'>
                    <RiShoppingBagLine className='font-semibold text-black' />
                    <span className='font-semibold ml-2 text-black'>({val})</span>
                </div>
                <div className='ml-4 relative sm:hidden'>
                    <div className='text-2xl cursor-pointer text-black' onClick={toggleNav}>
                        {isNavOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </div>
                    {isNavOpen && (
                        <ul className='absolute right-1 mt-4 text-center w-48 text-black bg-[#f4f4f9] shadow-lg rounded-lg flex flex-col gap-2 p-4'>
                            {links.map(link => (
                                <li key={link.href}>
                                    <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
