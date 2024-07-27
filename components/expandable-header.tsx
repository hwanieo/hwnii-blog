'use client';

import Hamburger from './hamburger';
import NavLinks from './nav-links';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Logo from './logo';

export default function ExpandableHeader() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 767;
      setIsMobile(mobile);

      if (!mobile) {
        setIsExpand(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleToggleNav() {
    setIsExpand((prev) => !prev);
  }

  function handleClose() {
    setIsExpand(false);
  }

  return (
    <>
      <div className='flex justify-between'>
        <Logo onClick={isExpand ? handleClose : undefined} />

        {/* 햄버거 */}
        <Hamburger onClick={handleToggleNav} />
      </div>

      {isExpand && isMobile && (
        <ul className='flex flex-col gap-4 mt-5 '>
          <NavLinks onClick={isExpand ? handleClose : undefined} />
        </ul>
      )}

      {/* 네비게이션 */}
      <nav className='hidden md:block'>
        <ul className='flex gap-4 text-center items-center'>
          <NavLinks />
        </ul>
      </nav>
    </>
  );
}
