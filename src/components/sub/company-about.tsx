import Image from 'next/image';
import Button from '../common/Button';

const CompanyAbout = () => {
  return (
    <section className='px-6 py-16 flex justify-center'>
      <div className='max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row'>
        <div className='bg-[#53389E] flex-1 p-10 flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>Give us a shot</h3>
          <p className='text-[#E9D7FE] mb-6'>
            Join over 4,000+ startups already growing with Untitled.
          </p>

          <div className='mt-6 w-full  flex flex-col md:flex-row justify-center md:items-center md:justify-start gap-3'>
            <Button
              title='Learn more'
              variant='secondary'
              size='lg'
              className='order-2 md:order-1'
            />
            <Button
              title='Get started'
              variant='primary'
              size='lg'
              className='order-1 md:order-2'
            />
          </div>
        </div>

        <div className='flex-1 relative'>
          <Image
            src='/img/company-about-img.png'
            alt='company-about-img'
            width={600}
            height={400}
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
