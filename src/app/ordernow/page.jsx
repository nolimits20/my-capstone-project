import React from 'react'
import Image from 'next/image'
import { carData } from '../component/data'
import Link from 'next/link'

const page = () => {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {carData.map((car,index) => (
            <div className='flex flex-col items-center' key={index}>
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
              <p className='text-black'>&#8358; {car.price}</p>
            </div>
                </Link>
          </div>
        ))
          }
       
        </div>
      </div>
    </main>
  )
}

export default page
