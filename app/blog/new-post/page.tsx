'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const DynamicEditor = dynamic(() => import('@/components/toast-editor'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function NewPostPage() {
  return (
    <div className='pt-28 w-[90%] h-screen transform left-1/2 -translate-x-1/2 relative z-10 md:w-[70%] text-nowrap flex flex-col gap-5'>
      <form className='h-[95%] bg-white rounded-sm overflow-hidden'>
        <DynamicEditor />
        <p className='w-full text-end'>
          <button className='text-black bg-red-400 mt-1 mr-2 px-2 py-1'>
            저장
          </button>
        </p>
      </form>
    </div>
  );
}
