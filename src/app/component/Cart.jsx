"use client";

import React, { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import { SideBarContext } from '../providers'; 
import { MdDelete } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

export default function Cart() {
    const { setVal, cartItems, setCartItems } = useContext(SideBarContext);
    const [isCartOpen, setIsCartOpen] = useState(true);

    const handleClick = () => {
        setIsCartOpen(false);
    };

    const handleDelete = async (id) => {
        // Show confirmation alert
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            // Proceed with deletion
            setVal(prevVal => prevVal - 1);
            setCartItems(prevItems => {
                return prevItems.map(item => {
                    if (item.id === id) {
                        if (item.value > 1) {
                            const newValue = item.value - 1;
                            const newAmount = (item.amount / item.value) * newValue;
                            return { ...item, value: newValue, amount: newAmount };
                        } else {
                            return null;
                        }
                    }
                    return item;
                }).filter(item => item !== null);
            });

            Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
            );
        }
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0);

    const cartVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: 'spring',
                damping: 25,
                stiffness: 100,
                duration: 0.6
            }
        },
        exit: { 
            y: '-100%', 
            opacity: 0,
            transition: { 
                type: 'spring',
                damping: 25,
                stiffness: 100,
                duration: 0.6
            }
        }
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <motion.section 
                    className='fixed top-0 right-0 w-full md:w-[50%] lg:w-[33%] h-full bg-white shadow-lg flex flex-col z-50'
                    variants={cartVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='p-4 md:p-7 flex-1 flex flex-col overflow-hidden'>
                        <div className='flex justify-between items-center mb-5 mt-4 md:mt-10'>
                            <h2 className='text-2xl md:text-3xl font-bold text-black'>Cart</h2>
                            <button onClick={handleClick} className='text-2xl md:text-3xl text-black'>
                                <IoMdClose />
                            </button>
                        </div>
                        {cartItems.length === 0 ? (
                            <div className='flex-1 flex items-center justify-center'>
                                <p className='text-lg md:text-xl font-semibold text-black'>Your cart is empty</p>
                            </div>
                        ) : (
                            <div className='overflow-y-auto flex-1 mb-5'>
                                {cartItems.map(item => (
                                    <div key={item.id} className='mb-5 grid grid-cols-3 gap-x-4 md:gap-x-10 items-center'>
                                        <div className='bg-[#F4F4F9] rounded-lg w-[100px] h-[70px] md:w-[150px] md:h-[100px]'>
                                            <Image
                                                src={`/${item.image}.png`}
                                                alt={`${item.title}`}
                                                width={150}
                                                height={150}
                                                className="rounded-lg w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className='flex flex-col justify-between text-xs md:text-sm font-bold'>
                                            <p className='text-xs md:text-sm text-black py-1 md:py-3'>{item.title}</p>
                                            <div className='text-black py-1 md:py-3'>
                                                <p>Qty: {item.value}</p>
                                                <p>Price: &#8358;{item.amount.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-start text-black'>
                                            <MdDelete 
                                                className='cursor-pointer text-lg md:text-xl' 
                                                onClick={() => handleDelete(item.id)} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className='border-t pt-5 sticky bottom-20 bg-white'>
                            <div className='flex justify-between'>
                                <p className='text-lg md:text-xl font-bold text-black'>TOTAL</p>
                                <p className='text-lg md:text-xl font-semibold text-black'>
                                &#8358;{totalAmount.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:p-7 bg-white sticky bottom-0 w-full'>
                        <button className='bg-black text-white p-3 w-full text-sm md:text-base tracking-[0.5rem] md:tracking-[1rem] hover:bg-slate-500'>
                            CHECKOUT
                        </button>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
