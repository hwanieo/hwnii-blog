import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-stone-300 flex items-center justify-between w-[90%] mx-auto mt-4 px-10 py-4 rounded-full fixed left-1/2 md:w-[75%] transform -translate-x-1/2 tracking-tight'>
      <Link href={'#'} className='flex gap-4 text-center items-center'>
        <span className='flex items-center justify-center bg-black w-10 h-10 rounded-lg text-2xl text-white m-auto'>
          H
        </span>
        <p className='uppercase text-xl'>Blog</p>
      </Link>

      {/* 햄버거 */}
      <div className='w-10 h-10 flex flex-col justify-between md:hidden cursor-pointer'>
        <div className='bg-black p-1 rounded-full'></div>
        <div className='bg-black p-1 rounded-full'></div>
        <div className='bg-black p-1 rounded-full'></div>
      </div>

      <nav className='hidden md:block'>
        <ul className='flex gap-4 text-center items-center'>
          <Link href={'#'}>Blog</Link>
          <li></li>
          <li>
            <Link href={'#'}>Portfolio</Link>
          </li>
          <li>
            <Link href={'#'}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
