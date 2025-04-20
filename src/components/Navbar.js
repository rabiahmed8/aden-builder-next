'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center px-6 py-4 shadow-md bg-white fixed top-0 left-0 z-50'>
      {/* Logo */}
      <Link href='/' className='text-xl font-bold'>
        <Image
          src='/logo.png'
          alt='Logo'
          layout='intrinsic'
          width={100}
          height={40}
          className='w-28 object-contain'
        />
      </Link>
s
      {/* Social Icons */}
      <div className='flex gap-4'>
        <Link
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Facebook className='w-5 h-5 text-[#2e2e2e] hover:text-blue-600 transition' />
        </Link>
        <Link
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Twitter className='w-5 h-5 text-[#2e2e2e] hover:text-blue-400 transition' />
        </Link>
        <Link
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram className='w-5 h-5 text-[#2e2e2e] hover:text-pink-500 transition' />
        </Link>
        <Link
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='w-5 h-5 text-[#2e2e2e] hover:text-blue-700 transition' />
        </Link>
      </div>
    </nav>
  );
};
