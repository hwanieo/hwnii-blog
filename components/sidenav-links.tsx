import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: '전체글', posts: 0 },
  { name: 'React', posts: 0 },
  { name: 'NextJS', posts: 0 },
  { name: 'Vue', posts: 0 },
  { name: 'Nuxt', posts: 0 },
  { name: 'SpringBoot', posts: 0 },
  { name: 'NestJS', posts: 0 },
];

export default function SideNavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href='#'
            className={clsx(
              'block whitespace-nowrap bg-black border-white/5 rounded-md hover:bg-black/60'
            )}
          >
            <li className='px-2 py-2 text-sm'>
              {link.name} ({link.posts})
            </li>
          </Link>
        );
      })}
    </>
  );
}
