import Link from 'next/link';

export default function SideNav() {
  return (
    <aside className='w-[90%] mx-auto backdrop-filter border rounded-lg px-5 py-2 tracking-tight md:w-64 md:h-[50rem]'>
      <div className='flex flex-col justify-between h-full md:justify-start'>
        <h2 className='font-bold text-xl mb-2'>Categories</h2>
        <div className='font-semibold overflow-x-scroll overflow-y-hidden flex gap-1 md:flex-col md:overflow-x-hidden md:overflow-y-scroll scrollbar-hide'>
          <ul className='flex gap-2 md:flex-col'>
            <li className='bg-blue-400/50 border px-2 py-1 rounded-md'>
              {/* 로그인했을 때만 보이게 할 거임 */}
              <Link href='#' className='block whitespace-nowrap'>
                + Add
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                전체글
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                React
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                NextJS
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                Vue
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                Nuxt
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                SpringBoot
              </Link>
            </li>
            <li className='border px-2 py-1 rounded-md bg-slate-200/50'>
              <Link href='#' className='block whitespace-nowrap'>
                NestJS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
