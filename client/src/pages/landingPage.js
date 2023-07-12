import cover from '../../src/assets/herocover.jpg'

const LandingPage = () => (
  <div className='h-screen'>
    <div className="flex flex-col justify-center items-center h-1/2">
      <h1 className="font-[Newsreader] text-6xl tracking-wide w-4/6 text-slate-800">
        Customize your fitness plan with AI-powered routines and reach your goals.
      </h1>
      <button
        className="font-light mt-10 font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 text-[1.25em]"
      >
        Discover More
      </button>
    </div>
    <div className="h-1/2 flex overflow-hidden m-[0_auto] max-w-7xl relative">
      <img src={cover} className='w-full object-cover absolute top-0' alt='hero-cover' />
    </div>
  </div >
);

export default LandingPage;
