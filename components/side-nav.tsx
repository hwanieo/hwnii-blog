import Link from 'next/link';
import SideNavLinks from './sidenav-links';

export default function SideNav() {
  return (
    <aside className='bg-slate-300/50 border-slate-200/10 w-[90%] mx-auto backdrop-filter border rounded-lg px-5 py-2 tracking-tight md:w-64 md:h-[50rem] md:mx-0'>
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
        <div className='font-semibold overflow-x-scroll overflow-y-hidden flex gap-1 md:flex-col md:overflow-x-hidden md:overflow-y-scroll scrollbar-hide'>
          <ul className='flex gap-2 md:flex-col'>
            <SideNavLinks />
          </ul>
        </div>
      </div>
    </aside>
  );
}
