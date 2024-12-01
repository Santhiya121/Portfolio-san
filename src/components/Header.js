import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="flex justify-around px-5 py-6 bg-black items-center fixed top-0 left-0 w-full text-white shadow-lg z-50">
        <a className="font-bold text-white text-xl" href="#home">SanthiyaRavi</a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white">
            {['Home', 'About', 'Projects', 'Education','Intern', 'Contact'].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`} 
                  className="px-5 py-4 text-white relative z-10 transition-all duration-300"
                >
                  {item}
                </a>
                <span
                  className="absolute inset-0 border-4 border-transparent p-4
                  group-hover:border-pink-400 group-hover:border-2 group-hover:border-solid group-hover:opacity-100 transition-all duration-300"
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
          <Bars3Icon className="text-white h-8 w-8" />
        </button>

        {toggleMenu && (
          <nav className="md:hidden fixed top-20 left-0 bg-white w-full h-auto shadow-lg z-10">
            <ul className="flex flex-col items-center space-y-4 p-6 text-black">
              {['Home', 'About', 'Projects', 'Education','Intern', 'Contact'].map((item) => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setToggleMenu(false)}
                    className="px-3 py-2 text-black relative z-10 transition-all duration-300" smooth={true}
                  >
                    {item}
                  </a>
                  <span
                    className="absolute inset-0 border-4 border-transparent p-4
                    group-hover:border-pink-400 group-hover:border-2 group-hover:border-solid"
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
