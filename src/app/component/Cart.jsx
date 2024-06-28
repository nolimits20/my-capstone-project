"use client";

import React, { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import { SideBarContext } from '../providers'; 
import { MdDelete } from "react-icons/md";// Adjust the import path accordingly

export default function Cart() {
    const {setVal, cartItems, setCartItems } = useContext(SideBarContext);
    const [isCartOpen, setIsCartOpen] = useState(true);

    const handleClick = () => {
        setIsCartOpen(false);
    };

    const handleDelete = (id) => {
        setVal(prevVal => prevVal - 1); // Decrement the counter in the parent component    
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    if (item.value > 1) {
                        const newValue = item.value - 1;
                        const newAmount = (item.amount / item.value) * newValue;
                        return { ...item, value: newValue, amount: newAmount };
                    } else {
                        return null; // Mark item for removal
                    }
                }
                return item;
            }).filter(item => item !== null); // Remove items marked for removal
        });
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0);

    return (
        isCartOpen && (
            <section className='fixed top-[64px] right-0 w-[33%] h-[calc(100vh-64px)] bg-white shadow-lg flex flex-col'>
                <div className='p-7 flex-1 flex flex-col overflow-hidden'>
                    <div className='flex justify-between items-center mb-5 mt-10'>
                        <h2 className='text-3xl font-bold text-black'>Cart</h2>
                        <button onClick={handleClick} className='text-3xl text-black'>
                            <IoMdClose />
                        </button>
                    </div>
                    {cartItems.length === 0 ? (
                        <div className='flex-1 flex items-center justify-center'>
                            <p className='text-xl font-semibold text-black'>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className='overflow-y-auto flex-1 mb-5'>
                            {cartItems.map(item => (
                                <div key={item.id} className='mb-5 grid grid-cols-3 gap-x-10 items-center'>
                                    <div className='bg-[#F4F4F9] rounded-lg w-[150px] h-[100px]'>
                                        <Image
                                            src={`/${item.image}.png`}
                                            alt={`${item.title}`}
                                            width={150}
                                            height={150}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className='flex flex-col justify-between text-xs font-bold'>
                                        <p className='text-sm text-black py-3'>{item.title}</p>
                                        <div className='text-black py-3'>
                                            <p>Qty: {item.value}</p>
                                            <p>Price: &#8358;{item.amount.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-start text-black'>
                                        <MdDelete 
                                            className='cursor-pointer text-xl' 
                                            onClick={() => handleDelete(item.id)} 
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='border-t pt-5 sticky bottom-20 bg-white'>
                        <div className='flex justify-between'>
                            <p className='text-xl font-bold text-black'>TOTAL</p>
                            <p className='text-xl font-semibold text-black'>
                            &#8358;{totalAmount.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-7 bg-white fixed bottom-0 w-[33%]'>
                    <button className='bg-black text-white p-3 w-full tracking-[1rem] hover:bg-slate-500'>
                        CHECKOUT
                    </button>
                </div>
            </section>
        )
    );
}
