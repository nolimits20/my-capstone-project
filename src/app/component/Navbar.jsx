'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const links = [
    { name: 'ORDER', href: '#' },  // Adjusted href to '#' as it won't be used for navigation
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
];

const orderDropdownLinks = [
    { name: 'Sub-order 1', href: '/order/suborder1' },
    { name: 'Sub-order 2', href: '/order/suborder2' },
    { name: 'Sub-order 3', href: '/order/suborder3' }
];

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleOrderDropdown = () => {
        setIsOrderDropdownOpen(!isOrderDropdownOpen);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    const closeOrderDropdown = () => {
        setIsOrderDropdownOpen(false);
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
                <ul className='text-black hidden sm:flex sm:text-sm flex-row gap-2 relative'>
                    {links.map(link => (
                        <li key={link.href} className='relative'>
                            {link.name === 'ORDER' ? (
                                <>
                                    <button className='tracking-[1.5px] font-semibold' onClick={toggleOrderDropdown}>
                                        {link.name}
                                    </button>
                                    {isOrderDropdownOpen && (
                                        <div>
                                            <ul className='absolute left-0 top-full mt-4 w-full h-[50%] bg-white shadow-lg rounded-lg'>
                                                {orderDropdownLinks.map(subLink => (
                                                    <li key={subLink.href} onClick={closeOrderDropdown}>
                                                        <Link className='block px-4 py-2 text-black hover:bg-gray-200' href={subLink.href}>{subLink.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div>
                                                <h1>here is our product lists</h1>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                            )}
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
                        <div className='absolute right-0 mt-4 w-80 h-[40rem] bg-white text-black  flex flex-col items-center justify-center p-4'>
                            <ul className='flex flex-col gap-2 text-center'>
                                {links.map(link => (
                                    <li key={link.href} onClick={closeNav}>
                                        <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
