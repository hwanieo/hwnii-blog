import Link from 'next/link';
import NavbarLinks from './category-links';

export default function Category() {
  return (
    <nav className='bg-slate-300/25 border-slate-200/10 w-[90%] md:w-full mx-auto backdrop-filter border rounded-sm px-5 py-2 tracking-tight'>
      <div className='flex flex-col justify-between h-full md:justify-start'>
        <div className='flex justify-between items-center my-5'>
          <h2 className='font-bold text-xl'>
            Categories{/* 로그인했을 때만 보이게 할 거임 */}
          </h2>
          <Link
            href='#'
            className='block whitespace-nowrap px-2 py-2 rounded-md transition-all hover:bg-black hover:text-white'
          >
            + Add
          </Link>
        </div>
        <div className='font-semibold overflow-x-scroll overflow-y-hidden flex gap-1 md:flex-col md:overflow-x-hidden md:overflow-y-scroll scrollbar-hide pb-2'>
          <ul className='flex justify-center flex-wrap gap-2'>
            <NavbarLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
}
