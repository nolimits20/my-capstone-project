'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { carData } from '../component/data';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="flex justify-center items-center h-[60vh]">
    <motion.div
      className="w-20 h-20 border-8 border-gray-300 rounded-full"
      style={{ borderTopColor: 'black' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setCarInfo(carData.slice(0, 12));
      setLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='min-h-[70vh]'>
      <h1 className='pt-20 px-8 text-black text-4xl font-bold'>Order Now</h1>
      <ul className='text-black flex px-8 gap-6 pt-10 text-sm'>
        <li>
          <h3>ALL PRODUCTS</h3>
        </li>
        <li>
          <h3 className='text-slate-400'>ALPHABETICALLY A-Z</h3>
        </li>
        <li>
          <h3 className='text-slate-400'>ALPHABETICALLY Z-A</h3>
        </li>
        <li>
          <h3 className='text-slate-400'>NEWEST FIRST</h3>
        </li>
      </ul>
      <div className='px-8 pt-10'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <motion.div 
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {carInfo.map((car, index) => (
                <motion.div 
                  className='flex flex-col items-center' 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/product/${car.image}`}>
                    <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
                      <Image
                        src={`/${car.image}.png`}
                        alt={`${car.make.split(' ').join('-')}-${car.model.split(' ').join('-')}-${car.year}`}
                        width={1200}
                        height={600}
                        className='transition-transform duration-300 ease-in-out transform hover:scale-105'
                      />
                    </div>
                    <div className='text-center text-slate-500 mt-4'>
                      <p>{car.make}</p>
                      <p className='text-black'>&#8358; {car.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <Link href='/ordernow2'>
              <div className='text-black flex items-center justify-center my-20 gap-4'>
                <button>1/2 Next</button>
                <GoArrowRight />
              </div>
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Page;