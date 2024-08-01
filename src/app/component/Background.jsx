'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className='relative min-h-screen flex justify-center items-center overflow-hidden'>
      <motion.div
        className='absolute top-0 left-0 w-full h-full'
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <video
          src="/red-vintage-car.mp4"
          className='w-full h-full object-cover'
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </motion.div>
      <motion.div 
        className='absolute bottom-0 left-0 p-4 sm:p-8 pb-16 text-white font-extrabold ml-14 sm:ml-0'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className='text-[24px] sm:text-[40px] lg:text-[50px] tracking-[-1px] sm:tracking-[-3px] shadow-[2px 2px 4px rgba(0, 0, 0, 0.6)]' 
          style={{ lineHeight: '1.4' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Driving is a way of life <br />
          And a car is a tool to <br />
          Explore the world
        </motion.h2>
        <motion.div 
          className='flex flex-col sm:flex-row sm:space-x-4 mt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <motion.button 
            className='bg-[#F4F4F9] w-full sm:w-auto sm:px-8 h-[50px] text-black mb-2 sm:mb-0'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BUY NOW
          </motion.button>
          <motion.button 
            className='bg-transparent w-full sm:w-auto sm:px-8 h-[50px] text-black border-[#F4F4F9] border-2 hover:bg-[#F4F4F9]'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'/about'}>ABOUT HI-TECH</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Background;
