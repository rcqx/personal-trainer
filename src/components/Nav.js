const Nav = () => (
  <header className='sticky top-0'>
    <nav className="flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
      <h1 className="font-[Newsreader] text-4xl text-blue-600 antialiased">
        Personal Tr
        <span className="text-black">
          ai
        </span>
        ner
      </h1>
      <ul className="w-1/3 flex justify-between items-center">
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Workouts</li>
        <li className="cursor-pointer">Meal Plans</li>
        <button
          className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
        >
          Log out
        </button>
      </ul>
    </nav>
  </header>
);

export default Nav;
