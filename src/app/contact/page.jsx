'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Loader from '../component/Loader'

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simulate a 2 second loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <main>
      <div className="relative px-8 min-h-screen pb-48">
        <div className="pt-20">
          <motion.h1
            className="text-2xl sm:text-6xl text-black font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-black text-sm pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Have a question, comment, or just want to say hello? We&apos;re here for you! <br />
            Feel free to reach out to our friendly team for expert assistance, personalized <br />
            recommendations, or any inquiries you may have.
          </motion.p>
        </div>
        <div className="mt-8">
          <motion.video
            src="/thank-you.mp4"
            className="w-full h-full sm:h-[800px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          ></motion.video>
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-8 mt-8">
          <div className="w-full h-[500px]">
            <motion.h2
              className="text-black text-lg sm:text-3xl pt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <input
                type="text"
                id="name"
                placeholder="FULL NAME"
                className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-10 p-2 bg-white outline-none"
              />
              <input
                type="email"
                id="email"
                placeholder="EMAIL"
                className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-10 p-2 bg-white outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="MESSAGE"
                className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-8 p-2 bg-white outline-none"
              ></textarea>
            </motion.div>
            <motion.div
              className="bg-black hover:bg-slate-600 cursor-pointer w-full text-center text-white mt-10 h-[50px] py-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <button>SEND A MESSAGE</button>
            </motion.div>
          </div>
          <div className="w-full h-[500px]">
            <motion.h2
              className="text-black text-lg sm:text-3xl pt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.div
              className='sm:grid grid-cols-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <div className="mt-10 text-black">
                <h3 className='text-[12px] text-slate-600'>SUPPORT</h3>
                <a href="mailto:oladeleakomolede43@gmail.com" target="blank" className='sm:text-2xl'>oladeleakomolede43@gmail.com</a>
                <h3 className="mt-10 text-[12px] text-slate-600">PHONE</h3>
                <a href="tel:+2348164584868" target="blank" className='sm:text-2xl'>+2348163584868</a>
                <h3 className="mt-10 text-[12px] text-slate-600">LAGOS NIGERIA</h3>
                <p className='sm:text-2xl'>34 Kehinde Abass Str, Igando Lagos Nigeria</p>
              </div>
              <div className="mt-10 text-black">
                <h3 className='text-[12px] text-slate-600'>SALES</h3>
                <a href="mailto:oladeleakomolede43@gmail.com" target="blank" className='sm:text-2xl'>www.hitechltd.com</a>
                <h3 className="mt-10 text-[12px] text-slate-600">WHATSAPP</h3>
                <a href="tel:+2349027110443" target="blank" className='sm:text-2xl'>+2349027110443</a>
                <h3 className="mt-10 text-[12px] text-slate-600">OGUN STATE</h3>
                <p className='sm:text-2xl'>Plot 1-3 Onigbedu Itori Ogun State</p>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className='flex flex-col justify-center mt-48 items-center text-black'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <h4 className='text-[12px] text-slate-600'>HI-TECH MULTIPURPOSE LTD</h4>
          <p className='text-lg sm:text-6xl font-bold'>Your Trust, <span className='text-slate-600'>Our Commitment</span></p>
        </motion.div>
      </div>
    </main>
  )
}

export default Page
