'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="w-10 h-10 bg-black rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
      />
    </div>
  )
}

export default Loader
