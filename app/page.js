'use client'
import Image from 'next/image';

import HenrysLogo from '../public/henrys-logo.png';
import Diamonds from '../public/diamonds.png';
import Link from 'next/link';
import { useSprings, animated } from '@react-spring/web'

export default function Home() {
  return (
    <main className='flex min-h-[90vh] flex-col items-center justify-center'>
      <Image
        src={Diamonds}
        alt='Diamond pattern'
        width={650}
        height={300}
        className='absolute top-[-8rem] md:top-[-18rem] lg:top-[-16rem] z-0'
      />
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={HenrysLogo}
          alt='Henrys Logo'
          width={400}
          height={400}
          className='mt-12 mb-12 md:mt-20 lg:mb-28'
        />
        <div className='flex flex-col sm:w-full md:w-auto sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 text-center'>
          <Link
            href='/food'
            className='md:transition-all md:duration-300  w-36 md:w-44 border-2 border-henrys-orange text-henrys-beige bg-henrys-orange md:cursor-[url(../public/burger.cur),_pointer] hover:bg-henrys-beige hover:border-henrys-orange hover:text-henrys-orange'
          >
            Food
          </Link>
          <Link
            href='/drinks'
            className='md:transition-all md:duration-300  w-36 md:w-44 border-2 border-henrys-orange text-henrys-beige bg-henrys-orange md:cursor-[url(../public/cocktail.cur),_pointer] hover:bg-henrys-beige hover:border-henrys-orange hover:text-henrys-orange'
          >
            Drinks
          </Link>
          <Link
            href='/about'
            className='md:transition-all md:duration-300  w-36 md:w-44 border-2 border-henrys-orange text-henrys-beige bg-henrys-orange md:cursor-[url(../public/usa.cur),_pointer] hover:bg-henrys-beige hover:border-henrys-orange hover:text-henrys-orange'
          >
            About us
          </Link>
        </div>
      </div>
    </main>
  );
}
