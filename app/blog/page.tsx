import SideNav from '@/components/side-nav';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className='pt-28 w-full relative z-10 md:w-[70%] mx-auto'>
      <div className='flex gap-5 flex-col md:flex-row'>
        <SideNav />

        <ul className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-[90%] h-[35rem] md:h-full mx-auto gap-5 md:w-[70%] md:mx-0'>
          {articles.map((article) => {
            return (
              <Link key={article.id} href='#'>
                <li className='flex justify-between flex-col-reverse border border-slate-400/25 px-3 py-1 rounded-md hover:bg-slate-300/50 hover:border-slate-200/10 transition-all sm:flex-col-reverse md:flex-col-reverse xl:flex-row'>
                  <div className='w-full sm:w-full'>
                    <span className='inline-block text-sm py-2'>
                      {article.date}
                    </span>
                    <div className='flex flex-col lg:w-5/6'>
                      <h2 className='text-lg font-bold'>{article.title}</h2>
                      <p className='line-clamp-6 text-justify'>
                        {article.content}
                      </p>
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
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const articles = [
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'React',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/react.jpeg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'Next.js',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/next.png',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'NestJS',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/nest.png',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
  {
    id: Math.random() * 1000,
    date: '2024년 7월 26일 (금)',
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum aut eveniet odit. Dolorem nobis illo officia, dolore est itaque nostrum ea, ut error at corporis corrupti minima facilis quos.',
    imgUrl: '/dog.jpg',
  },
];
