import React from 'react';

const Layout = () => {
  return (
    <div className=" relative px-8 min-h-screen pb-48 ">
      <div className="pt-20">
        <h1 className="text-2xl sm:text-5xl md:text-3xl text-black font-bold">Contact Us</h1>
        <p className="text-black text-sm pt-4">
          Have a question, comment, or just want to say hello? We&apos;re here for you! <br />
          Feel free to reach out to our friendly team for expert assistance, personalized <br />
          recommendations, or any inquiries you may have.
        </p>
      </div>
      <div className="mt-8">
        <video
          src="/thank-you.mp4"
          className="w-full h-full sm:h-[800px] object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-8 mt-8">
        <div className="w-full h-[500px]">
          <h2 className="text-black text-lg sm:text-3xl pt-8">Get in Touch</h2>
          <div>
            <input type="text" id="name" placeholder="FULL NAME" className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-10 p-2 bg-white outline-none" />
            <input type="email" id="email" placeholder="EMAIL" className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-10 p-2 bg-white outline-none" />
            <textarea name="message" id="message" placeholder="MESSAGE" className="border-b-[1.5px] border-slate-400 hover:border-black w-full mt-8 p-2 bg-white outline-none"></textarea>
          </div>
          <div className="bg-black hover:bg-slate-600 cursor-pointer w-full text-center text-white mt-10 h-[50px] py-3">
            <button>SEND A MESSAGE</button>
          </div>
        </div>
        <div className="w-full h-[500px]">
          <h2 className="text-black text-lg sm:text-3xl pt-8">Let&apos;s Connect</h2>
          <div className='sm:grid grid-cols-2'>
            <div className="mt-10 text-black">
              <h3 className='text-[12px] text-slate-600' >SUPPORT</h3>
              <a href="mailto:oladeleakomolede43@gmail.com" target="blank" className='sm:text-2xl'>oladeleakomolede43@gmail.com</a>
              <h3 className="mt-10 text-[12px] text-slate-600">PHONE</h3>
              <a href="tel:+2348164584868" target="blank" className='sm:text-2xl'>+2348163584868</a>
              <h3 className="mt-10 text-[12px] text-slate-600">LAGOS NIGERIA</h3>
              <p className='sm:text-2xl'>34 Kehinde Abass Str, Igando Lagos Nigeria</p>
              
          </div>
          <div className="mt-10 text-black">
                <h3 className='text-[12px] text-slate-600'>SALES</h3>
                <a href="mailto:oladeleakomolede43@gmail.com" target="blank" className='sm:text-2xl'>www.hitechltd.com</a>
                <h3 className="mt-10 text-[12px] text-slate-600">WHATSAPP</h3>
                <a href="tel:+2349027110443" target="blank" className='sm:text-2xl'>+2349027110443</a>
                <h3 className="mt-10 text-[12px] text-slate-600">OGUN STATE</h3>
              <p className='sm:text-2xl'>Plot 1-3 Onigbedu Itori Ogun State</p>
              </div>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col justify-center mt-48 items-center text-black'>
            <h4 className='text-[12px] text-slate-600 '>HI-TECH MULTIPURPOSE LTD</h4>
            <p className='text-lg sm:text-6xl font-bold'>Your Trust, <span className='text-slate-600'>Our Commitment</span></p>
          </div>
    </div>
  );
};

export default Layout;
