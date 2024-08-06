import Link from 'next/link';
import Card from './card';

export default function CardList() {
  return (
    <ul className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-[90%] h-[35rem] md:h-full mx-auto gap-5 md:w-full md:mx-0 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {articles.map((article) => (
        <Link key={article.id} href='#'>
          <Card article={article} />
        </Link>
      ))}
    </ul>
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
