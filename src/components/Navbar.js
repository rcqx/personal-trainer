const Navbar = () => (
  <header className='sticky top-0'>
    <div className="border border-red-600">
      <nav className="border border-blue-600 flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
        <h1 className="font-[Newsreader] text-4xl text-blue-600 antialiased">
          Personal Tr
          <span className="text-black">
            ai
          </span>
          ner
        </h1>
        <ul className="w-1/3 flex border border-green-600 justify-between items-center">
          <li className="font-[Inter] cursor-pointer">About Us</li>
          <li className="font-[Inter] cursor-pointer">Pricing</li>
          <li className="font-[Inter] cursor-pointer">Contact</li>
          <button
            className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600"
          >
            Sign Up
          </button>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
