'use client';
import { navData } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../common/Button';
import { Icons } from '@/lib/icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='backdrop-blur-sm bg-transparent px-6 md:px-12 py-4'>
      <div className='grid grid-cols-2 md:grid-cols-2 items-center'>
        <div className='flex flex-row justify-start gap-4'>
          <div className='flex items-center gap-2'>
            <Image src='/img/logo.png' width={32} height={32} alt='company-logo' />
            <h6 className='text-white font-semibold text-lg'>Untitled UI</h6>
          </div>

          <div className='hidden md:flex justify-start items-center gap-8 text-white/90 ml-5'>
            {navData.map((nav, key) => (
              <Link
                key={key}
                href={nav.link}
                className='hover:text-white font-semibold transition flex items-center gap-1'
              >
                {nav.title}
                {nav.icon && <nav.icon className='w-4 h-4' />}
              </Link>
            ))}
          </div>
        </div>

        <div className='hidden md:flex justify-end items-center gap-3'>
          <Button
            title='Login'
            className='px-4 py-2 rounded-md font-semibold text-white/90 hover:bg-white/10 transition'
          ></Button>
          <Button
            title='Sign up'
            className='px-4 py-2 rounded-md bg-[#7F56D9] text-white/90 font-semibold shadow'
          />
        </div>

        <div className='flex justify-end md:hidden z-20'>
          <button
            aria-label='Toggle menu'
            onClick={() => setMenuOpen((v) => !v)}
            className='p-2 rounded-md text-white/95 focus:outline-none focus:ring-2 focus:ring-white/30'
          >
            <Icons.Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='absolute inset-x-4 top-16 bg-[#53389E] backdrop-blur-md rounded-xl p-6 md:hidden z-20'>
          <div className='flex flex-col gap-4 text-white'>
            {navData.map((nav, key) => (
              <Link
                key={key}
                href={nav.link}
                className='py-2 flex justify-between items-center hover:text-gray-200 transition'
              >
                {nav.title}
                {nav.icon && <nav.icon className='w-4 h-4' />}
              </Link>
            ))}

            <div className='mt-2 flex gap-2'>
              <Button
                title='Login'
                className='flex-1 px-4 py-2 rounded-md font-semibold text-white/90 hover:bg-white/10 transition'
              />
              <Button
                title='Sign up'
                className='flex-1 px-4 py-2 rounded-md bg-violet-600 text-white/90 font-semibold shadow'
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
