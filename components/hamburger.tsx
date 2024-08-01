'use client';

import { memo } from 'react';

interface HamburgerProps {
  onClick: () => void;
}

const Hamburger = memo(function Hamburger({ onClick }: HamburgerProps) {
  return (
    <>
      <button
        onClick={onClick}
        className='w-8 h-8 flex flex-col justify-around md:hidden cursor-pointer'
      >
        <span className='inline-block w-full bg-black p-[0.2rem] rounded-full' />
        <span className='inline-block w-full bg-black p-[0.2rem] rounded-full' />
        <span className='inline-block w-full bg-black p-[0.2rem] rounded-full' />
      </button>
    </>
  );
});

export default Hamburger;
