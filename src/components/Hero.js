'use client';
import React from 'react';
import { motion } from 'motion/react';

const words = ['Plan', 'Build', 'Manage'];

export const Hero = () => {
  return (
    <section className='relative h-screen w-full'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/crop-architect-opening-blueprint.jpg'
          alt='Hero Background'
          className='w-full h-full object-cover object-center'
        />
        {/* Overlay (optional for contrast) */}
        <div className='absolute inset-0 bg-black opacity-50' />
      </div>

      {/* Centered Content */}
      <div className='relative z-10 flex flex-col gap-6 items-center justify-center h-full px-4 text-center'>
        <div className='flex items-center gap-6 justify-center text-white'>
          {words.map((word, index) => (
            <motion.h1
              key={word}
              animate={{
                opacity: [0, 1],
                y: [40, 0],
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                easing: 'ease-out',
              }}
              className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide'
            >
              {word}
            </motion.h1>
          ))}
        </div>
        <motion.p
          animate={{
            opacity: [0, 1],
            y: [40, 0],
          }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            easing: 'ease-out',
          }}
          className='text-3xl md:text-3xl'
        >
          Aden Builders and Developers
        </motion.p>
      </div>
    </section>
  );
};
