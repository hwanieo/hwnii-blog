import ExpandableHeader from './expandable-header';

export default function Header() {
  return (
    <header className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm z-20 flex flex-col md:flex-row justify-between w-[90%] mt-4 px-10 py-4 rounded-md fixed left-1/2 md:w-[70%] transform -translate-x-1/2 tracking-tight'>
      <ExpandableHeader />
    </header>
  );
}
