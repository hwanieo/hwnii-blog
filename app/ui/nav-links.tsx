import Link from 'next/link';

const links = [
  { name: 'Blog', href: '/blog', icon: null },
  { name: 'Portfolio', href: '/portfolio', icon: null },
  { name: 'Contacts', href: '/contacts', icon: null },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className='px-3 py-2 tracking-wide transition-all hover:bg-pink-50/25 rounded-lg'
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
