import { Link } from "react-router-dom";

const LandingNav = () => (
  <nav className="flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
    <Link to="/">
      <h1 className="font-[Newsreader] text-5xl text-blue-600 antialiased cursor-pointer">
        FitSmart
      </h1>
    </Link>
    <ul className="w-1/3 flex justify-between items-center">
      <li className="cursor-pointer text-slate-800 antialiased">About Us</li>
      <li className="cursor-pointer text-slate-800 antialiased">Pricing</li>
      <li className="cursor-pointer text-slate-800 antialiased">Contact</li>
      <button
        className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
      >
        Sign Up
      </button>
    </ul>
  </nav>
)

export default LandingNav;
