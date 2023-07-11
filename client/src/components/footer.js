import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => (
  <footer className="flex h-[3.8em] justify-between items-center m-[0_auto] max-w-7xl">
    <p className='text-slate-600 text-sm'>© 2023 Personal Trainer. All right reserved</p>
    <div className='flex w-[10%] justify-between'>
      <BsTwitter size={25} className='text-slate-700 cursor-pointer' />
      <BsFacebook size={25} className='text-slate-700 cursor-pointer' />
      <BsInstagram size={25} className='text-slate-700 cursor-pointer' />
    </div>
  </footer>
);

export default Footer;
