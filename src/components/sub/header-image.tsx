import Image from 'next/image';
import React from 'react';

const HeaderImage = () => {
  return (
    <div className='w-full overflow-hidden shadow-lg'>
      <div className='relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh]'>
        <Image src='/img/card.png' alt='header-card-image' className='object-cover' fill priority />
      </div>
    </div>
  );
};

export default HeaderImage;
