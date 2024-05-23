import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <main>
      <div className='relative px-8 min-h-screen'>
        <div className='sm:flex sm:flex-row'>
          <div className='sm:w-2/3'>
            <div className='pt-20'>
              <h1 className='text-2xl text-black sm:font-bold sm:text-5xl'>Shipping Policy</h1>
              <p className='pt-4 text-slate-600 text-sm'>Below you&#39;ll find our shipping policy, designed to ensure a smooth and <br /> convenient shopping experience.</p>
            </div>
            <div className='mt-16'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Processing Time</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              Orders are typically processed within 7-14 business days after payment confirmation. <br /> During peak seasons or promotional periods, processing times may be slightly longer.
              </p>
            </div>
            <div className='mt-12'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Shipping Methods</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              We offer several shipping options to meet your needs, including Standard Shipping, Expedited Shipping, <br /> and Overnight Shipping. Please note that shipping times may vary <br /> depending on your location and the shipping method selected.
              </p>
            </div>
            <div className='mt-12'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Shipping Fees</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              Shipping fees are calculated based on the selected shipping method, destination, and <br />order weight. You&#39;ll see the shipping options and associated fees at checkout before <br />completing your purchase
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>International Shipping</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                We currently offer international shipping to select countries. International orders may be <br />subject to customs duties, taxes, and import fees, which are the responsibility of the <br /> recipient.
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Order Tracking</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                Once your order has shipped, you&#39;ll receive a shipping confirmation email with tracking <br /> information. You can track your order&#39;s progress using the provided tracking number.
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Shipping Restrictions</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                Please note that we are unable to ship to P.O. boxes or APO/FPO addresses. Additionally, <br /> certain products may be restricted from international shipping due to customs <br /> regulations
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Contact Us</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                  If you have any questions or concerns about these terms of service, please contact us at <br />  <Link href='mailto:oladeleakomolede43@gmail.com'><span className='text-black'>hitechltd@hitech.com</span></Link>.
                </p>
              </div>
            </div>
            <div className='relative sm:w-2/3 h-[600px] sm:h-[1300px] overflow-hidden mt-12 sm:mt-0'>
              <Image
                src='/riding-van.jpg'
                alt='black-luxury'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </main>
  )
}

export default page