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
      <div className='relative min-h-screen px-4 md:px-8'>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='md:w-2/3'>
            <div className='pt-20'>
              <motion.h1
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Terms
              </motion.h1>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                By accessing or using our website, you agree to be bound by these terms of <br /> service. Please read these terms carefully before using our website.
              </motion.p>
            </div>
            <div className='mt-16'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Use of Website
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                By accessing or using our website, you agree to comply with all applicable laws and <br /> regulations. You may not use our website for any illegal or unauthorized purpose. You may <br /> not interfere with the security or integrity of our website or attempt to gain unauthorized <br /> access to any part of our website.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Intellectual Property
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                All content on this website, including text, graphics, logos, images, and software, is the <br /> property of Choice or its licensors and is protected by copyright and other intellectual <br /> property laws. You may not use, reproduce, or distribute any content from this website <br /> without our prior written consent.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                Disclaimer of Warranties
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
              >
                Our website is provided on an &#34;as is&#34; and &#34;as available&#34; basis without any warranties of <br />
                any kind, either express or implied. We do not warrant that our website will be <br /> uninterrupted, error-free, or free of viruses or other harmful components.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1 }}
              >
                Limitation of Liability
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 1 }}
              >
                In no event shall Choice be liable for any indirect, incidental, special, or consequential <br /> damages arising out of or in any way connected with your use of our website.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 1 }}
              >
                Governing Law
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
              >
                These terms of service shall be governed by and construed in accordance with the laws <br /> of Lagos, NIGERIA, without regard to its conflict of law provisions.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6, duration: 1 }}
              >
                Changes to Terms
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5, duration: 1 }}
              >
                We reserve the right to update or modify these terms of service at any time without prior <br /> notice. Your continued use of our website after any such changes constitutes your <br /> acceptance of the new terms.
              </motion.p>
            </div>
            <div className='mt-12'>
              <motion.h3
                className='text-lg sm:text-xl md:text-2xl tracking-tighter text-black'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 7, duration: 1 }}
              >
                Contact Us
              </motion.h3>
              <motion.p
                className='pt-4 text-slate-600 text-sm sm:text-base md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7.5, duration: 1 }}
              >
                If you have any questions or concerns about these terms of service, please contact us at <br />
                <Link href='mailto:oladeleakomolede43@gmail.com'>
                  <span className='text-black'>hitechltd@hitech.com</span>
                </Link>.
              </motion.p>
            </div>
          </div>
          <motion.div
            className='relative md:w-2/3 h-[400px] md:h-[600px] lg:h-[1500px] overflow-hidden mt-12 md:mt-0 px-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8, duration: 1 }}
          >
            <Image
              src='/woman-at-a-car.jpg'
              alt='woman at a car'
              layout='fill'
              objectFit='cover'
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Page
