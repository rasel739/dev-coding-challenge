import Image from 'next/image';
import HeaderImage from '../sub/header-image';
import Button from '../common/Button';

const Header = () => {
  return (
    <section>
      <div className='text-start md:text-center mx-5 md:ml-0 mt-10 md:mt-20 flex flex-col justify-center items-center '>
        <div>
          <p className='text-sm text-[#E9D7FE] mb-4'>Super. Simple. Banking.</p>

          <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold  text-white leading-tight'>
            Banking technology
            <span className='block'> that has your back.</span>
          </h1>

          <h1 className='mt-4 text-[#E9D7FE] max-w-2xl'>
            Simple, transparent banking. No hidden fees and free overdrafts.
          </h1>
        </div>
        <div className='mt-6 w-full flex flex-col md:flex-row justify-center md:items-center md:justify-center gap-3 '>
          <Button
            title='Demo'
            icon={<Image src='/img/play-video.png' width={24} height={24} alt='video-play-icon' />}
            variant='secondary'
            size='md'
            className='order-2 md:order-1'
          />

          <Button title='Sign up' variant='primary' size='md' className='order-1 md:order-2' />
        </div>
      </div>
      <div className='mt-20 md:mt-40'>
        <HeaderImage />
      </div>
    </section>
  );
};

export default Header;
