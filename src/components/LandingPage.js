import cover from '../../src/assets/herocover.jpg'
import Footer from './Footer';

const LandingPage = () => (
  <header className='sticky top-0 z-0'>
    <div>

      <div className="h-[22rem] flex flex-col justify-center items-center">
        <h1 className="font-[Newsreader] text-6xl tracking-wide w-4/6 text-slate-800">
          Customize your fitness plan with AI-powered routines and reach your goals.
        </h1>
        <button
          className="font-light mt-10 font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 text-[1.25em]"
        >
          Discover More
        </button>
      </div>
      <div className="object-cover overflow-hidden flex m-[0_auto] max-w-7xl">
        <img src={cover} alt='hero-cover' />
      </div>
    </div>
    <Footer />
  </header>
);

export default LandingPage;
