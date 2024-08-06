import Link from 'next/link';
import { memo } from 'react';

interface LogoProps {
  onClick?: () => void;
}
const Logo = memo(function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href='/'
      className='flex gap-4 text-center items-center'
      onClick={onClick}
    >
      <span className='flex items-center justify-center bg-slate-900/90 w-10 h-10 rounded-lg text-xl m-auto'>
        H
      </span>
      <p className='uppercase text-xl'>Blog</p>
    </Link>
  );
});

export default Logo;
