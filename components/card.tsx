import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  article: any;
}

export default function Card({ article }: CardProps) {
  return (
    <li className='flex justify-between flex-col-reverse border bg-slate-300/25 border-slate-200/10 backdrop-filter backdrop-blur-sm hover:shadow-lg  px-3 py-1 rounded-sm transition-all sm:flex-col-reverse md:flex-col-reverse'>
      <div className='w-full'>
        <span className='inline-block text-sm py-2'>{article.date}</span>
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold'>{article.title}</h2>
          <p className='line-clamp-6 text-justify'>{article.content}</p>
        </div>
      </div>
      <div className='my-2 relative w-[100%] h-60 rounded-md overflow-hidden'>
        <Image
          src={article.imgUrl}
          alt='에라잇'
          fill
          className='object-cover'
        />
      </div>
    </li>
  );
}
