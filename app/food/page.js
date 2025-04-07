'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import FoodMenu from '../../public/comida.webp';

export default function Food() {
  const [isZoomedIn, setZoom] = useState(false);

  const handleZoom = () => {
    if (!isZoomedIn) {
      setZoom(true)
    } else {
      setZoom(false)
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center relative overflow-scroll'>
      <Link href='/' className='absolute left-2 top-2 scale-150' >
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#DA6536' className='size-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
        </svg>
      </Link>
      <div className='relative w-full max-w-[600px] h-[600px]'>
        <Image
          src={FoodMenu}
          alt='Food Menu'
          fill
          style={{ objectFit: 'contain' }}
          onClick={handleZoom}
          className={`${isZoomedIn ? 'lg:cursor-zoom-out lg:scale-150' : 'lg:cursor-zoom-in lg:scale-100'} transition-transform duration-300`}
          placeholder='blur'
          quality={75}
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          loading="eager"
        />
      </div>
    </main>
  );
}
