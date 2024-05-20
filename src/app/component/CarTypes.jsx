import React from 'react';
import Image from 'next/image';

const CarGallery = () => {
  const cars = [
    { src: '/tesla-ev-car.png', alt: 'Tesla EV', name: 'Tesla (EV)', price: '₦ 30,000,000.00' },
    { src: '/self-driving-car.png', alt: 'Self Driving Car', name: 'Self Driving Car', price: '₦ 70,000,000.00' },
    { src: '/fuel-cell-cars.png', alt: 'Fuel Cell Car', name: 'Fuel Cell Car (FCV)', price: '₦ 40,000,000.00' },
  ];

  return (
    <div className=''>
      <div className=''>
        <h1 className='text-center text-5xl mt-10 text-black'>New Innovations</h1>
        <h2 className='text-center text-black uppercase text-sm mt-2'>
          Car is not just Machines, They are an extension of ourselves
        </h2>
      </div>
      <div className='flex flex-col px-8 space-y-8 mt-10 sm:flex-row sm:space-x-8 sm:space-y-0'>
        {cars.map((car, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] max-w-[800px] min-h-[600px] rounded-lg flex items-center justify-center p-4'>
              <Image 
                src={car.src} 
                alt={car.alt} 
                width={600} 
                height={600} 
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-left text-black mt-4 mr-[28rem]'>
              <p className='mt-1'>{car.name}</p>
              <p className='mt-1'>{car.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='relative mt-8 px-8'>
        <Image
          src='/pick-up-truck.jpg'
          alt='Full Cover'
          layout='responsive'
          width={1920}
          height={700}
          className='w-full rounded-lg'
        />
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full'>
          <h2 className='text-white text-3xl mb-4'>Explore Our Latest Arrivals</h2>
          <button className='bg-[#F0F4EF] text-black px-6 py-2 rounded-lg hover:bg-[#747c7e] transition-colors duration-300'>
            Order Now
          </button>
        </div>
      </div>
      <div className='mt-16 px-8'>
        <h2 className='text-center text-4xl text-black mb-8'>More Models</h2>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8'>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] max-w-[900px] min-h-[600px] rounded-lg flex items-center justify-center p-4'>
              <Image
                src='/new-model-bmw.png'
                alt='New Model Bmw'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-left text-black mt-4 mr-[42rem]'>
              <p>BMW 7 Series</p>
              <p className='text-red-600'>&#8358; 40,000.00 <span><s className='text-black'>&#8358; 75,000.00</s></span></p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F0F4EF] max-w-[900px] min-h-[600px] rounded-lg flex items-center justify-center p-4'>
              <Image
                src='/new-model-car.png'
                alt='New Model Car'
                width={1200}
                height={600}
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <div className='text-left text-black mt-4 mr-[42rem]'>
              <p>Acura Electric Vehicle 2024</p>
              <p className='text-red-600'>&#8358; 40,000.00 <span><s className='text-black'>&#8358; 70,000.00</s></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
