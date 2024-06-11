'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const links = [
    { name: 'ORDER', href: '#' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
];

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleOrderDropdown = () => {
        setIsOrderDropdownOpen(!isOrderDropdownOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const closeOrderDropdown = () => {
        setIsOrderDropdownOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle the search functionality here, e.g., redirect to a search results page
        console.log('Search query:', searchQuery);
        // You can redirect or fetch search results based on the searchQuery here
    };

    const val = 0;

    return (
        <nav className='bg-[#F4F4F9] max-w-full px-8 items-center min-h-[8vh] sm:min-h-[5vh] fixed inset-x-0 z-[2] flex justify-between'>
            <div>
                <h1 className='text-black font-bold text-2xl sm:text-lg'>
                    <Link href='/'>Hi-Tech <span className='hidden sm:inline'>Multipurpose Ltd</span></Link>
                </h1>
            </div>
            <div className='flex items-center'>
                <form onSubmit={handleSearchSubmit} className='relative'>
                    <input 
                        type='text' 
                        className='px-4 py-1 border rounded-lg sm:text-sm text-black  bg-white w-72 outline-none' // Adjusted width here
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button type='submit' className='absolute right-0 top-0 h-full px-4 text-white bg-black rounded-r-lg'>Search</button>
                </form>
                <ul className='text-black hidden sm:flex sm:text-sm flex-row gap-2 relative ml-4'>
                    {links.map(link => (
                        <li key={link.href} className='relative'>
                            {link.name === 'ORDER' ? (
                                <>
                                    <button className='tracking-[1.5px] font-semibold' onClick={toggleOrderDropdown}>
                                        {link.name}
                                    </button>
                                    {isOrderDropdownOpen && (
                                        <div className='fixed inset-x-0 top-[5vh] bg-white shadow-lg overflow-auto' style={{ height: '50vh', zIndex: 1 }}>
                                            <div className='flex h-full'>
                                                <div className='w-1/2 p-4 flex flex-col'>
                                                    <p className='font-semibold'>Order</p>
                                                    <ul className='mt-2 font-bold text-2xl'>
                                                        <Link href='/ordernow'>
                                                            <li className='py-2 hover:text-slate-600 cursor-pointer' onClick={closeOrderDropdown}>Order Now</li>
                                                        </Link>
                                                        <li className='py-2 hover:text-slate-600 cursor-pointer'>Best Sellers</li>
                                                        <li className='py-2 hover:text-slate-600 cursor-pointer'>Exclusive</li>
                                                        <li className='py-2 hover:text-slate-600 cursor-pointer'>On Sale</li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/2 p-4 flex justify-center items-center relative'>
                                                    <Image alt='car dealership' width={900} height={350} src='/car-dealership.jpeg' />
                                                    <button className='absolute bg-blue-500 text-white py-2 px-4 rounded' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                        Learn More
                                                    </button>
                                                </div>
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
                        <div className='absolute right-0 mt-4 w-80 h-[40rem] bg-white text-black flex flex-col items-center justify-center p-4'>
                            <ul className='flex flex-col gap-2 text-center'>
                                {links.map(link => (
                                    <li key={link.href} onClick={closeNav}>
                                        {link.name === 'ORDER' ? (
                                            <>
                                                <button className='tracking-[1.5px] font-semibold' onClick={toggleOrderDropdown}>
                                                    {link.name}
                                                </button>
                                                {isOrderDropdownOpen && (
                                                    <div className='w-full bg-white shadow-lg overflow-auto mt-2' style={{ maxHeight: '40vh', zIndex: 1 }}>
                                                        <div className='flex flex-col'>
                                                            <div className='p-4 flex flex-col'>
                                                                <p className='font-semibold'>Order</p>
                                                                <ul className='mt-2 font-bold text-2xl'>
                                                                    <Link href='/ordernow'>
                                                                        <li className='py-2 hover:text-slate-600 cursor-pointer' onClick={closeOrderDropdown}>Order Now</li>
                                                                    </Link>
                                                                    <li className='py-2 hover:text-slate-600 cursor-pointer'>Best Sellers</li>
                                                                    <li className='py-2 hover:text-slate-600 cursor-pointer'>Exclusive</li>
                                                                    <li className='py-2 hover:text-slate-600 cursor-pointer'>On Sale</li>
                                                                </ul>
                                                            </div>
                                                            <div className='p-4 flex justify-center items-center relative'>
                                                                <Image alt='car dealership' width={900} height={350} src='/car-dealership.jpeg' />
                                                                <button className='absolute bg-blue-500 text-white py-2 px-4 rounded' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                                    Learn More
                                                                </button>
                                                            </div>
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
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
