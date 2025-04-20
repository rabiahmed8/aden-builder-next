import React from 'react';

export const Hero = () => {
  return (
    <section className='relative h-screen w-full'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/crop-architect-opening-blueprint.jpg' // Replace with your image path
          alt='Hero Background'
          className='w-full h-full object-cover object-center'
        />
        {/* Overlay (optional for contrast) */}
        <div className='absolute inset-0 bg-black opacity-40' />
      </div>

      {/* Centered Content */}
      <div className='relative z-10 flex items-center justify-center h-full px-4 text-center'>
        <div className='text-white space-y-4 max-w-2xl'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Welcome to Aden <br/> Builders
          </h1>
          <p className='text-lg md:text-xl'>
            Building the future with passion, creativity, and innovation.
          </p>
          <button className='mt-4 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-secondary hover:text-white hover:cursor-pointer transition'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
