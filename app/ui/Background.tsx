export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'></div>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full filter blur-3xl opacity-70 animate-float' />
      </div>
      {/* 콘텐츠 */}
      {children}
    </div>
  );
}
