'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className='relative min-h-screen px-4 sm:px-8'>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='md:w-2/3 pr-4 sm:pr-8'>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='pt-12 sm:pt-20'
            >
              <h1 className='text-2xl sm:text-4xl lg:text-5xl text-black font-bold'>Shipping Policy</h1>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                Below you&apos;ll find our shipping policy, designed to ensure a smooth and <br /> convenient shopping experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='mt-8 sm:mt-16'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Processing Time</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                Orders are typically processed within 7-14 business days after payment confirmation. <br /> During peak seasons or promotional periods, processing times may be slightly longer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Shipping Methods</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                We offer several shipping options to meet your needs, including Standard Shipping, Expedited Shipping, <br /> and Overnight Shipping. Please note that shipping times may vary <br /> depending on your location and the shipping method selected.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Shipping Fees</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                Shipping fees are calculated based on the selected shipping method, destination, and <br /> order weight. You&apos;ll see the shipping options and associated fees at checkout before <br /> completing your purchase.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>International Shipping</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                We currently offer international shipping to select countries. International orders may be <br /> subject to customs duties, taxes, and import fees, which are the responsibility of the <br /> recipient.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Order Tracking</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                Once your order has shipped, you&apos;ll receive a shipping confirmation email with tracking <br /> information. You can track your order&apos;s progress using the provided tracking number.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Shipping Restrictions</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                Please note that we are unable to ship to P.O. boxes or APO/FPO addresses. Additionally, <br /> certain products may be restricted from international shipping due to customs <br /> regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1 }}
              className='mt-8 sm:mt-12'
            >
              <h3 className='text-lg sm:text-xl lg:text-2xl tracking-tighter text-black'>Contact Us</h3>
              <p className='pt-2 sm:pt-4 text-slate-600 text-sm sm:text-base'>
                If you have any questions or concerns about these terms of service, please contact us at <br /> <Link href='mailto:oladeleakomolede43@gmail.com'><span className='text-black'>hitechltd@hitech.com</span></Link>.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className='relative w-full md:w-2/3 pr-4 sm:pr-8 h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1500px] overflow-hidden mt-8 md:mt-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <Image
              src='/riding-van.jpg'
              alt='riding van'
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
