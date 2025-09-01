import React from 'react';
import Company from '../sub/company';
import CompanyAbout from '../sub/company-about';

const Hero = () => {
  return (
    <div className='bg-white py-20'>
      <Company />
      <CompanyAbout />
    </div>
  );
};

export default Hero;
