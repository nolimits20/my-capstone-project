'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
            className="text-2xl sm:text-left sm:text-6xl md:text-3xl text-center text-black font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-black text-sm pt-4 text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to HI-Tech Multipurpose Ltd, your trusted partner in the automotive industry.
            <br />
            With a passion for innovation and a commitment to excellence,
            <br />
            our team is dedicated to providing cutting-edge solutions for all your automotive needs.
            <br />
          </motion.p>
        </div>
        <div className="mt-8">
          <video
            src="/about-us.mp4"
            className="w-full h-[600px] sm:h-[800px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-8 mt-8">
          <div className="w-full h-[500px]">
            <motion.h2
              className="text-black text-[12px] sm:text-lg pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              HI-TECH MULTIPURPOSE LTD
            </motion.h2>
            <motion.p
              className="text-lg sm:text-3xl font-bold text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Your Trust, <span className="text-slate-600">Our Commitment</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <p className="text-black pt-4">
                As a leading player in the auto-mobile sector, we pride ourselves on our expertise, reliability,
                <br />
                and customer-centric approach. Our mission is to harness the power of technology
                <br />
                to enhance the performance, safety, and sustainability of vehicles,
                <br />
                while also reducing environmental impact.
                <br />
                With a diverse range of services and products,
                <br />
                we cater to individual car owners, dealerships, and manufacturers alike.
                <br />
                From advanced diagnostics and repairs to customization and maintenance,
                <br />
                our state-of-the-art facilities and skilled technicians ensure top-notch quality and efficiency.
                <br />
              </p>
            </motion.div>
            <motion.div
              className="bg-black hover:bg-slate-600 cursor-pointer w-[50%] sm:w-[20%] text-sm text-center text-white mt-24 h-[50px] py-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <Link href="/contact">
                <button>CONTACT US</button>
              </Link>
            </motion.div>
            <div>
              <hr className="sm:mt-52 mt-10" />
            </div>
            <div className="mt-8 hidden sm:block">
              <motion.h2
                className="text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                A leading player in the auto-mobile sector
              </motion.h2>
              <motion.p
                className="text-black mt-9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
              >
                We pride ourselves on our expertise, reliability, and customer-centric approach.
                <br />
                Our mission is to harness the power of technology to enhance the performance, safety
              </motion.p>
              <hr className="mt-8" />
            </div>
          </div>
          <div>
            <motion.div
              className="relative mt-64 sm:mt-0 h-[600px] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <Image src="/black-luxury.jpg" alt="black-luxury" layout="fill" objectFit="cover" />
            </motion.div>
            <div>
              <hr className="sm:mt-9 mt-10" />
              <div className="sm:hidden">
                <motion.h2
                  className="text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5, duration: 1 }}
                >
                  A leading player in the auto-mobile sector
                </motion.h2>
                <motion.p
                  className="text-black mt-9"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5, duration: 1 }}
                >
                  We pride ourselves on our expertise, reliability, and customer-centric approach.
                  <br />
                  Our mission is to harness the power of technology to enhance the performance, safety
                </motion.p>
              </div>
              <div className="block sm:block">
                <motion.h2
                  className="text-black mt-9 sm:mt-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.5, duration: 1 }}
                >
                  With a diverse range of services and products
                </motion.h2>
                <motion.p
                  className="text-black mt-9 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6, duration: 1 }}
                >
                  We cater to individual car owners, dealerships, and manufacturers alike.
                  <br />
                  From advanced diagnostics and repairs to customization and maintenance,
                  <br />
                  our state-of-the-art facilities and skilled technicians ensure top-notch quality and efficiency.
                </motion.p>
                <hr className="mt-8" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-48 items-center text-black">
          <motion.h4
            className="text-[12px] text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5, duration: 1 }}
          >
            HI-TECH MULTIPURPOSE LTD
          </motion.h4>
          <motion.p
            className="text-lg sm:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7, duration: 1 }}
          >
            Your Trust, <span className="text-slate-600">Our Commitment</span>
          </motion.p>
        </div>
      </div>
      <motion.div
        className="relative mt-4 sm:h-[1800px] sm:mt-0 h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.5, duration: 1 }}
      >
        <Image src="/woman-talking.jpg" alt="woman-talking" layout="fill" objectFit="cover" />
      </motion.div>
    </main>
  )
}

export default Page
