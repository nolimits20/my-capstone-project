import React from 'react'
import Image from 'next/image'

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
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2020-ferrari-roma.png'
                alt='ferrari-roma'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>FERRARI ROMA 2020</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2021-Acura-TLX.png'
                alt='Acura-Tlx'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>ACURA TLX 2021</p>
              <p  className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2021-Aston-Martin-DB11.png'
                alt='Aston Martin'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>ASTON MARTIN DB11 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2021-bmw-3-series.png'
                alt='Bmw-3-series'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>BMW 3 SERIES 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px]  flex items-center justify-center p-4'>
              <Image
                src='/2021-buick-regal.png'
                alt='Buick Regal'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>BUICK REGAL 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px]  flex items-center justify-center p-4'>
              <Image
                src='/2021-dodge-charger.png'
                alt='dodge charger'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>DODGE CHARGER 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2021-nissan-altima.png'
                alt='Nissan Altima'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>NiSSAN ALTIMA 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px]  flex items-center justify-center p-4'>
              <Image
                src='/2022-Audi-A4-Sedan.png'
                alt='Audi-A4-Sedan'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>AUDI A4 2022</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2022-ford-mustang.png'
                alt='ford mustang'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>FORD MUSTANG 2022</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2022-Mclaren-720S.png'
                alt='mclaren'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>MCLAREN 720S 2022</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px] flex items-center justify-center p-4'>
              <Image
                src='/2022-Polestar-2.png'
                alt='polestar'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>POLESTAR 2 2022</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] w-full h-[600px]  flex items-center justify-center p-4'>
              <Image
                src='/alfa-romeo-giulia-2021.png'
                alt='alfa-romeo-giulia-2021'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-center text-slate-500 mt-4'>
              <p>ALFA ROMEO GIULIA 2021</p>
              <p className='text-black'>&#8358; 70,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
