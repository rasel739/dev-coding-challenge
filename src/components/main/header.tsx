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
            className='order-2 md:order-1 flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-white text-[#344054] font-medium shadow'
          />

          <Button
            title='Sign up'
            className='order-1 md:order-2 flex justify-center items-center gap-2 px-4 py-2 bg-[#7F56D9] rounded-md  text-white/90 font-semibold shadow'
          />
        </div>
      </div>
      <div className='mt-20 md:mt-40'>
        <HeaderImage />
      </div>
    </section>
  );
};

export default Header;
