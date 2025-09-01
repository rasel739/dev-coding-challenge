import { companyData } from '@/constants';
import Image from 'next/image';

const Company = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-40'>
      <h6 className='mb-10 text-[#475467] text-center'>Join 4,000+ companies already growing</h6>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 items-center justify-items-center w-full'>
        {companyData.map((company, i) => (
          <div key={i} className='w-full flex justify-center'>
            <Image
              src={`/img/company/${company.img}`}
              width={170}
              height={48}
              alt='company-logo'
              className='object-contain w-auto h-12 md:h-16'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
