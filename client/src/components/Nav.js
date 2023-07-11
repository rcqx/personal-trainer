import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white ${isScrolled && "opacity-95"}`}>
      <nav className="flex h-[7em] justify-between items-center m-[0_auto] max-w-7xl">
        <Link to="/">
          <h1 className="font-[Newsreader] text-5xl text-blue-600 antialiased cursor-pointer">
            Personal Tr
            <span className="text-slate-800">ai</span>
            ner
          </h1>
        </Link>
        <ul className="w-1/3 flex justify-between items-center">
          <Link to="/profile">
            <li className="cursor-pointer">Profile</li>
          </Link>
          <Link to="/exercise-plans">
            <li className="cursor-pointer">Workouts</li>
          </Link>
          <Link to="/meal-plans">
            <li className="cursor-pointer">Meal Plans</li>
          </Link>
          <button
            className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
          >
            Log out
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
