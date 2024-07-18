'use client';
import Image from 'next/image';
import { useState } from 'react';
import FoodMenu from '../../public/comida.png';
import Link from 'next/link';

export default function Food() {
  const [isZoomedIn, setZoom] = useState(false);

  const handleZoom = () => {
    if (!isZoomedIn) {
      setZoom(true)
    } else {
      setZoom(false)
    }
  }

  return <main className='flex min-h-screen flex-col items-center justify-center relative overflow-scroll'>
    <Link href='/' className='absolute left-4 top-4 scale-150' >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#D16543' className='size-6'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
      </svg>
    </Link>
    < Image src={FoodMenu} alt='Drinks' width={600} height={600} onClick={handleZoom} className={`${isZoomedIn ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in scale-100'} `} />
  </main >;
}
