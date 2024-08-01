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
      <div className='relative min-h-screen'>
        <div className='flex flex-col-reverse md:flex-row'>

          {/* Text Content Section */}
          <motion.div
            className='md:w-2/3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className='pt-16 px-4 md:pt-20 md:px-8'>
              <motion.h1
                className='text-xl md:text-3xl lg:text-5xl text-black font-bold'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Refund Policy
              </motion.h1>
              <motion.p
                className='pt-4 text-slate-600 text-sm md:text-base'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Below you&#39;ll find our refund policy, outlining our commitment to customer <br /> satisfaction and transparency.
              </motion.p>
            </div>

            {/* Sections with animations */}
            {[
              { title: 'Returns', text: 'We want you to be completely satisfied with your purchase from Choice. If for any reason you’re not happy with your order, you may return it within 30 days of receipt for a full refund or exchange. To initiate a return, please contact our customer support team at hitechltd@hitech.com to obtain a return authorization.' },
              { title: 'Eligibility', text: 'To be eligible for a return, your item must be unused, in its original condition, and in the original packaging. Any items that show signs of wear, damage, or alteration may not be eligible for return.' },
              { title: 'Return Process', text: 'Once your return is authorized, you’ll receive instructions on how to return your item. Please securely package your item and include a copy of your original order invoice or receipt. You’ll be responsible for covering the return shipping costs, unless the return is due to an error on our part.' },
              { title: 'Refunds', text: 'Once we receive your return and verify its condition, we’ll process your refund within 3-5 business days. Refunds will be issued to the original payment method used for the purchase.' },
              { title: 'Exchanges', text: 'If you’d like to exchange your item for a different style, color, or size, please indicate your preference when initiating the return. We’ll do our best to accommodate your request, subject to availability.' },
              { title: 'Damaged or Defective Items', text: 'If your item arrives damaged or defective, please contact us immediately. We’ll arrange for a replacement or refund, depending on the nature of the issue.' },
              { title: 'Non-Refundable Items', text: 'Certain items may not be eligible for return or refund, including gift cards, personalized or custom-made items, and clearance or sale items. Please refer to the product description or contact us for clarification.' },
              { title: 'Contact Us', text: 'If you have any questions or concerns about these terms of service, please contact us at hitechltd@hitech.com.'  }
            ].map((section, index) => (
              <motion.div
                key={index}
                className='mt-8 md:mt-12 px-4 md:px-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 1 }}
              >
                <h3 className='text-lg md:text-xl lg:text-2xl tracking-tighter text-black'>{section.title}</h3>
                <p className='pt-4 text-slate-600 text-sm md:text-base'>{section.text}</p>
              </motion.div>
            ))}
          </motion.div>
          {/* Image Section */}
          <motion.div
            className='relative w-full h-[300px] md:w-2/3 md:h-[1500px] overflow-hidden mt-8 md:mt-0'
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Image
              src='/lady-yellow.jpg'
              alt='lady yellow'
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
