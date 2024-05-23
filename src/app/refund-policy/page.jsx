import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <main>
      <div className='relative min-h-screen'>
        <div className='sm:flex sm:flex-row'>
          <div className='sm:w-2/3'>
            <div className='pt-20 px-8'>
              <h1 className='text-2xl text-black sm:font-bold sm:text-5xl'>Refund Policy</h1>
              <p className='pt-4 text-slate-600 text-sm'>Below you&#39;ll find our refund policy, outlining our commitment to customer <br /> satisfaction and transparency.</p>
            </div>
            <div className='mt-16 px-8'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Returns</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              We want you to be completely satisfied with your purchase from Choice. If for any reason <br /> you&#39;re not happy with your order, you may return it within 30 days of receipt for a full <br /> refund or exchange. To initiate a return, please contact our customer support team at <br /> <Link href='mailto:oladeleakomolede43@gmail.com'><span className='text-black'>hitechltd@hitech.com</span></Link>. to obtain a return authorization.
              </p>
            </div>
            <div className='mt-12 px-8'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Eligibility</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              To be eligible for a return, your item must be unused, in its original condition, and in the <br />original packaging. Any items that show signs of wear, damage, or alteration may not be <br />eligible for return.
              </p>
            </div>
            <div className='mt-12 px-8'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Return Process</h3>
              <p className='pt-4 text-slate-600 text-sm'>
              Once your return is authorized, you&#39;ll receive instructions on how to return your item. <br /> Please securely package your item  and include a copy of your original order invoice or <br /> receipt. You&#39;ll be responsible for covering the return shipping costs, unless the return is <br /> due to an error on our part.
                </p>
              </div>
              <div className='mt-12 px-8'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Refunds</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                Once we receive your return and verify its condition, we&#39;ll process your refund within 3-5 <br /> business days. Refunds will be issued to the original payment method used for the <br /> purchase.
                </p>
              </div>
              <div className='mt-12 px-8'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Exchanges</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                If you&#39;d like to exchange your item for a different style, color, or size, please indicate your <br /> preference when initiating the return. We&#39;ll do our best to accommodate your request, <br /> subject to availability.
                </p>
              </div>
              <div className='mt-12 px-8'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Damaged or Defective Items</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                If your item arrives damaged or defective, please contact us immediately. We&#39;ll arrange for  <br />a replacement or refund, depending on the nature of the issue.
                </p>
              </div>
              <div className='mt-12 px-8'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Non-Refundable Items</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                Certain items may not be eligible for return or refund, including gift cards, personalized or <br /> custom-made items, and clearance or sale items. Please refer to the product description <br /> or contact us for clarification
                </p>
              </div>
              <div className='mt-12 px-8'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Contact Us</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                  If you have any questions or concerns about these terms of service, please contact us at <br />  <Link href='mailto:oladeleakomolede43@gmail.com'><span className='text-black'>hitechltd@hitech.com</span></Link>.
                </p>
              </div>
            </div>
            <div className='relative sm:w-2/3 h-[600px] sm:h-[1500px] overflow-hidden mt-12 sm:mt-0'>
              <Image
                src='/lady-yellow.jpg'
                alt='lady yellow'
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