import Image from 'next/image';

import profile from '@/public/profile.jpeg';

export default function UserInfo() {
  return (
    <div className='flex flex-col-reverse gap-5 md:flex-row'>
      <div className='flex-grow bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm rounded-sm hidden md:flex justify-center items-center text-sm'>
        <p>개발자 좀 시켜줘...</p>
      </div>

      <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm py-5 px-7 rounded-sm flex flex-col items-center md:items-start'>
        {/* 내 정보 */}
        <div className='md:w-full'>
          <div>
            <div className='flex flex-col'>
              <div className='text-center py-2 flex flex-col md:border-none'>
                <div className='w-48 h-60 bg-slate-300/25 border-slate-200/10 backdrop-filter relative rounded-sm overflow-hidden'>
                  <Image
                    src={profile}
                    alt='profile'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              <div className='flex gap-2 h-full mt-3 flex-col mx-auto relative'>
                <div className='items-center flex gap-2 mx-auto'>
                  <h2 className='text-xl font-bold'>이종환</h2>
                  <p className='rounded-full px-3 bg-black text-white text-center'>
                    신입
                  </p>
                </div>
                <p className='text-sm'>남, 1998 (26세)</p>
                <p className='text-sm flex flex-col justify-start'>
                  <span>이메일</span>
                  <a
                    target='_blank'
                    href='mailto:hwniieo@gmail.com'
                    className='underline'
                  >
                    hwniieo@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='flex-grow pt-3 flex flex-col gap-3 pl-1'></div>
        </div>
      </div>
      {/* <div className=' bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm h-60 px-10 py-5 rounded-sm flex justify-center'></div> */}
    </div>
  );
}
