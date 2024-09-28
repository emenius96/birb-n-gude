import { useState } from 'react';
import NavOverlay from './NavOverlay';

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <header className='global-header relative'>
      <div className='flex items-center justify-between max-w-screen-l p-10 m-0 h-24'>
        <button
          onClick={toggleNav}
          className={`z-30 ml-4 flex items-center px-4 py-2 rounded-md border-2 border-pink-500 bg-pink-300 text-zinc-50 hover:bg-pink-400 transition duration-200 ease-in-out`}
        >
          {/* Menu Icon (Burger) */}
          {isNavOpen ? (
            <svg
              className='w-6 h-6 mr-2'
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 mr-2'
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          {isNavOpen ? 'Back' : 'Menu'}
        </button>
        <p className='flex-grow text-pink-300 text-2xl text-center'>Birb 'n' Gude</p>
        <div className='w-32'></div> {/* Placeholder to maintain spacing on the right */}
      </div>
      <NavOverlay isOpen={isNavOpen} onClose={() => setNavOpen(false)} />
    </header>
  );
}
