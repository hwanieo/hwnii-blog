'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Blog', href: '/blog', icon: null },
  { name: 'Portfolio', href: '/portfolio', icon: null },
  { name: 'Contacts', href: '/contacts', icon: null },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'px-3 py-2 tracking-wide transition-all hover:bg-black hover:text-white rounded-md',
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
