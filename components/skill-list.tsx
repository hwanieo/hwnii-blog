export default function SkillList() {
  return (
    <div className='bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm px-7 py-10 rounded-sm flex flex-col'>
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
  );
}
