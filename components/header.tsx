import ExpandableHeader from './expandable-header';

export default function Header() {
  return (
    <header className='z-20 flex flex-col md:flex-row justify-between w-[90%] mt-5 bg-slate-300/25 border-slate-200/90 backdrop-filter backdrop-blur-sm px-10 py-4 items-center rounded-sm fixed left-1/2 md:w-[70%] transform -translate-x-1/2 tracking-tight'>
      <ExpandableHeader />
    </header>
  );
}
