export default function Hamburger() {
  return (
    <div className='w-8 h-8 flex flex-col justify-around md:hidden cursor-pointer'>
      <div className='bg-black p-[0.2rem] rounded-full'></div>
      <div className='bg-black p-[0.2rem] rounded-full'></div>
      <div className='bg-black p-[0.2rem] rounded-full'></div>
    </div>
  );
}
