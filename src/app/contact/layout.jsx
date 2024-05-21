import React from 'react';

const Layout = () => {
  return (
    <div className="px-8">
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
            <input type="text" id="name" placeholder="FULL NAME" className="border-b-2 border-black w-full mt-10 p-2 bg-white outline-none" />
            <input type="email" id="email" placeholder="EMAIL" className="border-b-2 border-black w-full mt-10 p-2 bg-white outline-none" />
            <textarea name="message" id="message" placeholder="MESSAGE" className="border-b-2 border-black w-full mt-8 p-2 bg-white outline-none"></textarea>
          </div>
          <div className="bg-black w-full text-center text-white mt-10 h-[50px] py-3">
            <button>SEND A MESSAGE</button>
          </div>
        </div>
        <div className="w-full h-[500px]">
          <h2 className="text-black text-lg sm:text-3xl pt-8">Let&apos;s Connect</h2>
        </div>
      </div>
    </div>
  );
};

export default Layout;
