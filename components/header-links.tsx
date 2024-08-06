'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Blog', href: '/blog', icon: null },
  { name: 'Portfolio', href: '/portfolio', icon: null },
];

interface NavLinksProps {
  onClick?: () => void;
}

// const NavLinks = memo(
export default function HeaderLinks({ onClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClick}
            className={clsx(
              'w-full px-3 py-1 md:py-1 tracking-wide transition-all hover:bg-black hover:text-white rounded-md',
              {
                'bg-black text-white': pathname === link.href,
              }
            )}
          >
            <li className='py-1'>{link.name}</li>
          </Link>
        );
      })}
    </>
  );
}
// );
