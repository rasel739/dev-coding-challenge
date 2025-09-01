import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-[#53389e] text-center p-6'>
      <h1 className='text-7xl font-bold text-red-500'>404</h1>
      <h2 className='mt-4 text-2xl font-semibold text-white/90'>Page Not Found</h2>

      <Link
        href='/'
        className='mt-6 px-6 py-3 bg-violet-600 text-white rounded-lg font-medium shadow hover:bg-brand-dark transition'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
