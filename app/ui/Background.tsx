export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='relative min-h-screen overflow-y-scroll scrollbar-hide'>
      <div className='fixed inset-0 z-0'>
        {/* 컬러공 */}
        <div className='absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-br from-pink-400 to-blue-500 rounded-full filter blur-3xl opacity-70 animate-float' />
        {/* <div className='absolute bottom-1/3 left-2/4 w-96 h-96 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full filter blur-3xl  opacity-70 animate-float' /> */}

        {/* 유리 효과 */}
        <div className='absolute inset-0 bg-slate-900 bg-opacity-0 backdrop-filter backdrop-blur-lg'></div>
      </div>
      {/* 콘텐츠 */}
      {children}
    </main>
  );
}
