import UserInfo from '@/components/user-info';
import SkillList from '@/components/skill-list';

export default function Home() {
  return (
    <div className='pt-28 w-[90%] h-screen transform left-1/2 -translate-x-1/2 relative z-10 md:w-[70%] text-nowrap flex flex-col gap-5'>
      <section>
        <UserInfo />
      </section>

      <section>
        <SkillList />
      </section>

      <section>
        <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-sm flex flex-col'>
          <h2 className='text-xl font-bold'>사회생활</h2>
          <p>사회생활 어려워요</p>
        </div>
      </section>

      <section>
        <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-sm flex flex-col'>
          <h2 className='text-xl font-bold'>교육</h2>
          <p>교육 받긴 했었어요</p>
        </div>
      </section>

      <section>
        <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-sm flex flex-col'>
          <h2 className='text-xl font-bold'>자기소개</h2>
          <p>나 멋진 남잔데?</p>
        </div>
      </section>

      <section>
        <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-sm flex flex-col'>
          <h2 className='text-xl font-bold'>포트폴리오</h2>
          <p>내용이 있겠지</p>
        </div>
      </section>
    </div>
  );
}
