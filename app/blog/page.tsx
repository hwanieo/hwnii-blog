import SideNav from '@/app/ui/side-nav';

export default function BlogPage() {
  return (
    <div className='pt-28 w-full h-screen relative z-10 md:w-[70%] mx-auto'>
      <div className='flex gap-5 flex-col md:flex-row'>
        <SideNav />
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-[90%] h-[35rem] mx-auto gap-5 md:h-[calc(100vh-92px)] md:w-[70%]'>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='line-clamp-6 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                earum aut eveniet odit. Dolorem nobis illo officia, dolore est
                itaque nostrum ea, ut error at corporis corrupti minima facilis
                quos.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                magnam velit, provident, numquam dolorem fugit vitae, est quas
                atque magni animi dolore quibusdam repellendus autem quasi
                inventore perspiciatis dignissimos nisi.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, similique recusandae beatae aliquid, tempore dolorem
                harum voluptatibus blanditiis vitae illum ad sed ea
                reprehenderit quaerat nobis quis quod fuga! A.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                aliquam laudantium, a nesciunt blanditiis aliquid reiciendis
                debitis nobis labore accusantium cumque unde rem accusamus ipsam
                illo officiis! Quo, quod. Assumenda!
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='line-clamp-6 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                earum aut eveniet odit. Dolorem nobis illo officia, dolore est
                itaque nostrum ea, ut error at corporis corrupti minima facilis
                quos.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                magnam velit, provident, numquam dolorem fugit vitae, est quas
                atque magni animi dolore quibusdam repellendus autem quasi
                inventore perspiciatis dignissimos nisi.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, similique recusandae beatae aliquid, tempore dolorem
                harum voluptatibus blanditiis vitae illum ad sed ea
                reprehenderit quaerat nobis quis quod fuga! A.
              </p>
            </div>
          </li>
          <li className='px-3 py-1 border rounded-md'>
            <span className='text-sm text-white'>2024년 7월 26일 (금)</span>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>title</h2>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                aliquam laudantium, a nesciunt blanditiis aliquid reiciendis
                debitis nobis labore accusantium cumque unde rem accusamus ipsam
                illo officiis! Quo, quod. Assumenda!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
