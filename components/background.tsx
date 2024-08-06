export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='relative min-h-screen scrollbar-hide'>
      <div className='fixed inset-0 z-0'>
        {/* 컬러공 */}
        <div className='absolute top-0 left-0/4 w-full h-32 bg-gradient-to-br from-blue-900 to-blue-900 rounded-full filter blur-3xl opacity-70' />

        {/* 유리 효과 */}
        <div className='absolute inset-0 bg-opacity-0 backdrop-filter backdrop-blur-lg'></div>
      </div>
      {/* 콘텐츠 */}
      {children}
    </main>
  );
}
