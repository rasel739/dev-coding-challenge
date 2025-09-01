import { Icons } from '@/lib/icons';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-white'>
      <div className='flex flex-col items-center gap-4'>
        <Icons.Loader className='h-10 w-10 animate-spin text-brand-primary' />
      </div>
    </div>
  );
};

export default Loading;
