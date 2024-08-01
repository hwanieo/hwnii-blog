'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const links = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Blog', href: '/blog', icon: null },
  { name: 'Portfolio', href: '/portfolio', icon: null },
];

interface NavLinksProps {
  onClick?: () => void;
}

// const NavLinks = memo(
function NavLinks({ onClick }: NavLinksProps) {
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
              'w-full px-3 py-3 md:py-1 tracking-wide transition-all hover:bg-black hover:text-white rounded-md',
              {
                'bg-black text-white': pathname === link.href,
              }
            )}
          >
            <li>{link.name}</li>
          </Link>
        );
      })}
    </>
  );
}
// );

export default NavLinks;
