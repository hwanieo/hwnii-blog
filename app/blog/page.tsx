import CardList from '@/components/card-list';
import Category from '@/components/category';

export default function BlogPage() {
  return (
    <div className='pt-28 w-full relative z-10 md:w-[70%] mx-auto flex gap-5 flex-col'>
      <Category />

      <CardList />
    </div>
  );
}
