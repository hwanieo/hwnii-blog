import Image from 'next/image';
import profile from '@/public/profile.jpeg';

export default function Home() {
  return (
    <main className='pt-28 w-[90%] h-screen transform left-1/2 -translate-x-1/2 relative z-10 md:w-[60%] text-nowrap flex flex-col gap-5'>
      <div className='flex flex-col-reverse gap-5 md:flex-row'>
        <div className='flex-grow bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm py-10 px-7 rounded-lg flex flex-col items-center md:items-start'>
          {/* 내 정보 */}
          <div className='md:w-full'>
            <div>
              <div className='flex flex-col md:flex-row'>
                <div className='text-center py-2 flex flex-col justify-between md:border-none'>
                  <div className='w-36 h-48 bg-slate-300/50 border-slate-200/10 backdrop-filter relative rounded-md overflow-hidden'>
                    <Image
                      src={profile}
                      alt='profile'
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex-grow flex flex-col md:ml-5'>
                  <div className='flex gap-2 h-6 mt-3 lg:text-center'>
                    <h2 className='text-xl font-bold'>이종환</h2>
                    <p className='rounded-full px-3 bg-black text-white text-center'>
                      신입
                    </p>
                  </div>

                  <div className='flex-grow hidden md:flex justify-center items-center text-sm'>
                    <p>개발자 좀 시켜줘...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-grow pt-3 md:pt-1 flex flex-col gap-3 pl-1'>
              <p className='text-sm text-slate-700'>남, 1998 (26세)</p>
              <p className='text-sm text-slate-700 flex flex-col md:flex-row'>
                <span>이메일</span>
                <a
                  target='_blank'
                  href='mailto:hwniieo@gmail.com'
                  className='md:ml-2 underline text-slate-900'
                >
                  hwniieo@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div className=' bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm h-60 px-10 py-5 rounded-lg flex justify-center'></div> */}
      </div>
      {/* 스킬 */}
      <div className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-lg flex flex-col'>
        <h2 className='text-xl font-bold mb-2'>나의 스킬</h2>
        <div>
          <ul className='flex gap-3 flex-wrap'>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              Java
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              Spring Boot
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              JavaScript
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              TypeScript
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              React
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              Next.js
            </li>
            <li className='px-3 py-1 rounded-full bg-black text-white whitespace-nowrap'>
              NestJS
            </li>
          </ul>
        </div>
      </div>

      {/* 사회생활 */}
      <div className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-lg flex flex-col'>
        <h2 className='text-xl font-bold'>사회생활</h2>
        <p>사회생활 어려워요</p>
      </div>

      {/* 교육 */}
      <div className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-lg flex flex-col'>
        <h2 className='text-xl font-bold'>교육</h2>
        <p>교육 받긴 했었어요</p>
      </div>

      {/* 자기소개 */}
      <div className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-lg flex flex-col'>
        <h2 className='text-xl font-bold'>자기소개</h2>
        <p>나 멋진 남잔데?</p>
      </div>

      {/* 포트폴리오 */}
      <div className='bg-slate-300/50 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-lg flex flex-col'>
        <h2 className='text-xl font-bold'>포트폴리오</h2>
        <p>내용이 있겠지</p>
      </div>
    </main>
  );
}
