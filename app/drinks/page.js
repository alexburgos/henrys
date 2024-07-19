'use client';
import Image from 'next/image';
import { useState } from 'react';
import DrinksMenu from '../../public/bebidas.png';
import Link from 'next/link';

export default function Drinks() {
  const [isZoomedIn, setZoom] = useState(false);

  const handleZoom = () => {
    if (!isZoomedIn) {
      setZoom(true)
    } else {
      setZoom(false)
    }
  }


  return <main className='flex min-h-screen flex-col items-center justify-center relative overflow-scroll'>
    <Link href='/' className='absolute left-2 top-2 scale-150' >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#DA6536' className='size-6'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
      </svg>
    </Link>

    <Image src={DrinksMenu} alt='Drinks' width={600} height={600} className={`${isZoomedIn ? 'lg:cursor-zoom-out lg:scale-150' : 'lg:cursor-zoom-in lg:scale-100'} `} onClick={handleZoom} placeholder="blur" quality={100} />
  </main>;
}
