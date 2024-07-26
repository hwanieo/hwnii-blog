import Link from 'next/link';
import NavLinks from './nav-links';
import Hamburger from './hamburger';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 border backdrop-filter backdrop-blur-sm z-20 flex items-center justify-between w-[90%] mt-4 px-10 py-4 rounded-full fixed left-1/2 md:w-[75%] transform -translate-x-1/2 tracking-tight'>
      {/* 로고 */}
      <Link href='/' className='flex gap-4 text-center items-center'>
        <span className='flex items-center justify-center bg-black w-8 h-8 rounded-lg text-2xl text-white m-auto'>
          H
        </span>
        <p className='uppercase text-xl'>Blog</p>
      </Link>

      {/* 햄버거 */}
      <Hamburger />

      {/* 네비게이션 */}
      <nav className='hidden md:block'>
        <ul className='flex gap-4 text-center items-center'>
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}
