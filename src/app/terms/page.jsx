import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main>
      <div className='relative px-8 min-h-screen'>
        <div className='sm:flex sm:flex-row'>
          <div className='sm:w-2/3'>
            <div className='pt-20'>
              <h1 className='text-2xl text-black sm:font-bold sm:text-5xl'>Terms</h1>
              <p className='pt-4 text-slate-600 text-sm'>By accessing or using our website, you agree to be bound by these terms of <br />service. Please read these terms carefully before using our website.</p>
            </div>
            <div className='mt-16'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Use of Website</h3>
              <p className='pt-4 text-slate-600 text-sm'>
                By accessing or using our website, you agree to comply with all applicable laws and <br /> regulations. You may not use our website for any illegal or unauthorized purpose. You may <br /> not interfere with the security or integrity of our website or attempt to gain unauthorized <br /> access to any part of our website.
              </p>
            </div>
            <div className='mt-12'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Intellectual Property</h3>
              <p className='pt-4 text-slate-600 text-sm'>
                All content on this website, including text, graphics, logos, images, and software, is the <br /> property of Choice or its licensors and is protected by copyright and other intellectual <br /> property laws. You may not use, reproduce, or distribute any content from this website <br /> without our prior written consent.
              </p>
            </div>
            <div className='mt-12'>
              <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Disclaimer of Warranties</h3>
              <p className='pt-4 text-slate-600 text-sm'>
                Our website is provided on an &#34;as is&#34; and &#34;as available&#34; basis without any warranties of <br/>
                any kind, either express or implied. We do not warrant that our website will be <br /> uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Limitation of Liability</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                  In no event shall Choice be liable for any indirect, incidental, special, or consequential <br /> damages arising out of or in any way connected with your use of our website.
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Governing Law</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                  These terms of service shall be governed by and construed in accordance with the laws <br /> of Lagos, NIGERIA, without regard to its conflict of law provisions.
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-lg sm:text-2xl tracking-tighter text-black'>Changes to Terms</h3>
                <p className='pt-4 text-slate-600 text-sm'>
                  We reserve the right to update or modify these terms of service at any time without prior <br /> notice. Your continued use of our website after any such changes constitutes your <br /> acceptance of the new terms.
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
                src='/woman-at-a-car.jpg'
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
  