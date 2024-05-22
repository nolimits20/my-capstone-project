import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main>
    <div className=" relative px-8 min-h-screen pb-48 ">
   <div className="pt-20">
     <h1 className="text-2xl text-left sm:text-6xl md:text-3xl text-black font-bold">About Us</h1>
     <p className="text-black text-sm pt-4 text-center sm:text-left">
     Welcome to HI-Tech Multipurpose Ltd, your trusted partner in the automotive industry. <br /> With a passion for innovation and a commitment to excellence, <br /> our team is dedicated to providing cutting-edge solutions for all your automotive needs. <br />


     </p>
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
       <h2 className="text-black text-[12px] sm:text-lg pt-8">HI-TECH MULTIPURPOSE LTD</h2>
       <p className='text-lg sm:text-3xl font-bold text-black'>Your Trust, <span className='text-slate-600'>Our Commitment</span></p>
       <div>
         <p className='text-black pt-4'>As a leading player in the auto-mobile sector, we pride ourselves on our expertise, reliability, <br /> and customer-centric approach. Our mission is to harness the power of technology <br />to enhance the performance, safety, and sustainability of vehicles, <br />while also reducing environmental impact.

With a diverse range of services and products, <br /> we cater to individual car owners, dealerships, and manufacturers alike. <br /> From advanced diagnostics and repairs to customization and maintenance, <br /> our state-of-the-art facilities and skilled technicians ensure top-notch quality and efficiency. <br />

</p>
       </div>
       <div className="bg-black hover:bg-slate-600 cursor-pointer w-[50%] sm:w-[20%]  text-sm text-center text-white mt-24 h-[50px] py-3">
         <Link href='/contact' ><button>CONTACT US</button></Link>
         
       </div>
       <div>
        <hr className='sm:mt-52 mt-10' />
       </div>
       <div className='mt-8 hidden sm:block'>
        <h2 className='text-black'>A leading player in the auto-mobile sector</h2>
        <p className='text-black mt-9'>We pride ourselves on our expertise, reliability, and customer-centric approach. <br /> Our mission is to harness the power of technology to enhance the performance, safety</p>
        <hr className='mt-8' />
       </div>
     </div>
     <div>
       <div className='relative mt-64 sm:mt-0 h-[600px] overflow-hidden'>
              <Image
                src='/black-luxury.jpg'
                alt='black-luxury'
                layout='fill'
                objectFit='cover'
                className=''
              />
            </div>
            <div>
        <hr className='sm:mt-9 mt-10' />
        <div className='sm:hidden'>
          <h2 className='text-black'>A leading player in the auto-mobile sector</h2>
          <p className='text-black mt-9'>We pride ourselves on our expertise, reliability, and customer-centric approach. <br /> Our mission is to harness the power of technology to enhance the performance, safety</p>
          <div className='block'>
            <h2 className=''>
            With a diverse range of services and products</h2>
            <hr className='mt-8'/>
          </div>
        </div>

        <div>
          
        </div>

       </div>
     </div>
         
       
     
   </div>
   <div className='flex flex-col justify-center mt-48 items-center text-black'>
         <h4 className='text-[12px] text-slate-600 '>HI-TECH MULTIPURPOSE LTD</h4>
         <p className='text-lg sm:text-6xl font-bold'>Your Trust, <span className='text-slate-600'>Our Commitment</span></p>
       </div>
 </div>
 </main>
  )
}

export default page