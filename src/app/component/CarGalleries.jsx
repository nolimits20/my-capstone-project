import React from 'react';
import Image from 'next/image';

const CarGalleries = () => {
  return (
    <div>
      <div className='grid grid-col-1 sm:grid-cols-2'>
        <div className='relative w-full text-center pt-8'>
          <div className='relative h-[800px] overflow-hidden'>
            <Image 
              src='/happy-woman.jpg' 
              alt='happy woman' 
              layout='fill'
              objectFit='cover' 
              className=''
            />
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <h2 className='text-white text-3xl font-bold shadow-[2px 2px 4px rgba(0, 0, 0, 0.6)]'>
              Forget Everything <br /> and Just Drive
            </h2>
          </div>
        </div>
        <div className='relative w-full text-center pt-8'>
          <div className='relative h-[800px] overflow-hidden'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <h2 className='text-black text-2xl px-16 sm:px-0 sm:text-3xl font-bold'>
              Self Driving Car <br /> is the natural extension of active safety <br /> and obviously something we should do
            </h2>
            <div className='absolute bottom-0 mb-4'>
              <p className='text-black bg-white bg-opacity-50 px-10 mb-16 sm:mb-0 sm:px-4 py-2 uppercase text-sm'>
                An autonomous vehicle capable of sensing its environment and operating without human involvement
              </p>
            </div>
            
          </div>
          
          
        </div>
          </div>
          
          <div className='relative w-full items-center bg-white flex flex-col sm:flex-row sm:justify-center sm:gap-4'>
            <div className='absolute top-0 text-center bg-center py-0 px-6 sm:py-8 md:py-8 lg:py-8 text-black' >
                <h2>Best Choice</h2>
                <p>The new Electric Vehicle and Fuel Electric Vehicle</p>
            </div>
      <div className='relative h-[250px] sm:h-[400px] lg:h-[400px] overflow-hidden flex items-center flex-col sm:flex-row sm:mb-0'>
        <div className='bg-[#F0F4EF] max-w-[300px] min-h-[150px] sm:max-w-[400px] sm:min-h-[300px]  rounded-lg flex items-center justify-center p-4'>
          <Image
            src='/new-model-car.png'
            alt='New Model Car'
            width={700}
            height={300}
            className='transition-transform duration-300 ease-in-out transform hover:scale-105'
            
          />
          <div className='absolute bottom-2 sm:bottom-0 text-black text-center'>
              <h2>Acura FEV 2024</h2>
              <p>&#8358; 40,000.00</p>
          </div>
        </div>
      </div>
      <div className='relative h-[280px] sm:h-[400px] lg:h-[400px] overflow-hidden flex items-center mb-24 sm:mb-0'>
        <div className='bg-[#F0F4EF] max-w-[300px] min-h-[150px] sm:max-w-[400px] sm:min-h-[300px]  rounded-lg flex items-center justify-center p-4'>
          <Image
            src='/new-model-bmw.png'
            alt='New Model Bmw'
            width={700}
            height={300}
            className='transition-transform duration-300 ease-in-out transform hover:scale-105'
          />
          <div className='absolute bottom-0  sm:bottom-0 text-black text-center'>
              <h2>BMW EV 7 Series</h2>
              <p>&#8358; 40,000.00</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 sm:bottom-20 text-white bg-black w-[170px] h-[60px] text-center pt-4 hover:bg-slate-700'>
        <button>Order Now</button>
      </div>
    </div>
        <div className='relative w-full mt-16 sm:mt-0'>
          <div className='relative h-[800px] overflow-hidden'>
            <Image 
              src='/lady-in-green.jpg' 
              alt='lady in green' 
              layout='fill'
              objectFit='cover' 
              className=''
            />
          </div>
        
        </div>
        <div className='relative w-full mt-16 sm:mt-0'>
          <div className='relative h-[800px] overflow-hidden'>
            <Image 
              src='/man-standing-bmw.jpg' 
              alt='guy standing by a car' 
              layout='fill'
              objectFit='cover' 
              className=''
            />
          </div>
          
        </div>
        <div className='relative w-full items-center mt-16 min-h-[800px] sm:mt-0 bg-white flex flex-col sm:flex-row sm:justify-center sm:gap-4'>
        <div className='absolute top-4 text-center text-black'>
                <h1>HI-TECH MULTIPURPOSE LTD</h1>
                <h2 className='text-3xl font-bold'>We invite you to experience the Hi-Tech difference <br />Lets drive innovation together!</h2>
            </div>
            <div className='absolute inset-0 flex items-center justify-center px-6 sm:px-0'>
            <p className='text-black text-sm text-center'>
            Welcome to HI-Tech Multipurpose Ltd, your trusted partner in the automotive industry. <br />With a passion for innovation and a commitment to excellence, <br /> our team is dedicated to providing cutting-edge solutions for all your automotive needs. <br />

            As a leading player in the auto-mobile sector, we pride ourselves on our expertise, reliability,<br /> and customer-centric approach. Our mission is to harness the power of technology to <br />enhance the performance, safety, and sustainability of vehicles, while also reducing environmental impact.
            </p>
          </div>
          <div className='absolute bottom-20 text-white bg-black w-[170px] h-[60px] text-center pt-4 hover:bg-slate-700'>
        <button>About Us</button>
      </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CarGalleries;
