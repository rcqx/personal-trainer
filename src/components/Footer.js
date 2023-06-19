import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => (
  <div>
    <footer className="flex h-[4em] justify-between items-center m-[0_auto] max-w-7xl">
      <p className='text-slate-700 antialiased text-sm'>© 2023 Personal Trainer. All right reserved</p>
      <div className='flex w-[10%] justify-between'>
        <BsTwitter size={25} className='text-slate-700' />
        <BsFacebook size={25} className='text-slate-700' />
        <BsInstagram size={25} className='text-slate-700' />
      </div>
    </footer>
  </div>
);

export default Footer;
