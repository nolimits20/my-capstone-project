'use client';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { carData } from '@/app/component/data';
import Image from 'next/image';
import { TbArrowBackUp } from 'react-icons/tb';
import Link from 'next/link';
import { SideBarContext } from '@/app/providers';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function ProductPage({ params }) {
    const { val, setVal, cartItems, setCartItems } = useContext(SideBarContext);

    const carInfo = useRef(carData.find((car) => car.image === params.slug));
    const [inputValue, setInputValue] = useState(1);

    useEffect(() => {
        if (carInfo.current) {
            // Do nothing with state here to avoid re-renders
        }
    }, []);

    function handleValType(e) {
        setInputValue(Number(e.target.value));
    }

    function handleButtonIncrease() {
        setVal(prev => prev + inputValue);
        if (!carInfo.current) return;

        const itemIndex = cartItems.findIndex(item => item.title === carInfo.current.make);
        let newCartItems;

        if (itemIndex !== -1) {
            newCartItems = cartItems.map((item, index) => index === itemIndex ? {
                ...item,
                value: item.value + inputValue,
                amount: item.amount + (carInfo.current.price * inputValue)
            } : item);
        } else {
            newCartItems = [...cartItems, {
                id: carInfo.current.id,
                title: carInfo.current.make,
                image: carInfo.current.image,
                value: inputValue,
                amount: carInfo.current.price * inputValue
            }];
        }

        setCartItems(newCartItems);

        Swal.fire({
            title: 'Added to Bag!',
            text: `${carInfo.current.make} has been added to your bag.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    if (!carInfo.current) {
        return <div>Car not found</div>;
    }

    const relatedProducts = carData.filter((car) => car.image !== params.slug).slice(0, 4);

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <motion.div 
                    className="lg:w-1/2 min-h-[700px] flex items-center justify-center bg-gray-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={`/${carInfo.current.image}.png`}
                        alt={`${carInfo.current.make.split(' ').join('-')}-${carInfo.current.model.split(' ').join('-')}-${carInfo.current.year}`}
                        width={800}
                        height={600}
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </motion.div>

                <motion.div 
                    className="lg:w-1/2 flex flex-col gap-6 pt-28 px-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/ordernow">
                        <div className="flex items-center gap-2">
                            <TbArrowBackUp className="text-black" />
                            <p className="text-black text-sm font-medium">ORDER NOW</p>
                        </div>
                    </Link>

                    <div className="lg:grid lg:grid-cols-2 gap-4">
                        <div>
                            <h2 className="font-semibold">Make</h2>
                            <p className='text-black'>{carInfo.current.make}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Model</h2>
                            <p className='text-black'>{carInfo.current.model}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Year</h2>
                            <p className='text-black'>{carInfo.current.year}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Price</h2>
                            <p className='text-black'>&#8358;{carInfo.current.price.toLocaleString()}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Weight</h2>
                            <p className='text-black'>{carInfo.current.weight}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Engine</h2>
                            <p className='text-black'>{carInfo.current.engine}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Transmission</h2>
                            <p className='text-black'>{carInfo.current.transmission}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Drivetrain</h2>
                            <p className='text-black'>{carInfo.current.drivetrain}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Fuel Efficiency</h2>
                            <p className='text-black'>{carInfo.current.fuelEfficiency}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Horsepower</h2>
                            <p className='text-black'>{carInfo.current.horsepower}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <input 
                            type="number" 
                            value={inputValue} 
                            onChange={handleValType} 
                            className="p-2 w-20 h-[50px] text-white"
                            min="1"
                        />
                        <motion.button 
                            onClick={handleButtonIncrease} 
                            className="bg-black text-white w-full h-[50px] hover:bg-slate-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ADD TO BAG
                        </motion.button>
                    </div>
                    
                    <div className='flex justify-between text-[12px] text-black hover:text-slate-400 cursor-pointer mt-4'>
                      <Link href='/shipping-policy'>
                        <p>SHIPPING POLICY</p>
                      </Link>
                      <Link href='/refund-policy'>
                        <p>REFUND POLICY</p>
                      </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold mb-4 text-center text-black">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                    {relatedProducts.map((product) => (
                        <motion.div 
                            key={product.image} 
                            className="bg-white p-4 rounded-lg shadow-md h-[350px] flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href={`/product/${product.image}`}>
                                <Image
                                    src={`/${product.image}.png`}
                                    alt={`${product.make}-${product.model}-${product.year}`}
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                />
                                <div className='text-center text-black mt-2'>
                                    <h3 className="text-lg font-semibold">{product.make}</h3>
                                    <p className="text-sm">{product.model} - {product.year}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
