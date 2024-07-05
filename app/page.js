import Image from 'next/image';
import localFont from 'next/font/local';

import HenrysLogo from '../public/henrys.png';
import Diamonds from '../public/diamonds.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Image
        src={Diamonds}
        alt='Diamond pattern'
        width="auto"
        height="auto"
        className='absolute top-[-8rem] sm:top-[-18rem] md:top-[-30rem] lg:top-[-26rem] z-0'
      />
      <div className="flex flex-col items-center justify-center">
        <Image
          src={HenrysLogo}
          alt='Henrys Logo'
          width={500}
          height={500}
          className='mt-12 mb-20 md:mt-20 lg:mb-24'
        />
        <div className='flex flex-col sm:w-full md:w-auto sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 text-center'>
          <Link
            href='/food'
            className='md:transition-all md:duration-300  w-36 md:w-52 border-2 border-henrys text-henrys-beige bg-henrys md:cursor-[url(../public/burger.cur),_pointer] hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
          >
            Food
          </Link>
          <Link
            href='/drinks'
            className='md:transition-all md:duration-300  w-36 md:w-52 border-2 border-henrys text-henrys-beige bg-henrys md:cursor-[url(../public/cocktail.cur),_pointer] hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
          >
            Drinks
          </Link>
          <Link
            href='/about'
            className='md:transition-all md:duration-300  w-36 md:w-52 border-2 border-henrys text-henrys-beige bg-henrys md:cursor-[url(../public/usa.cur),_pointer] hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
          >
            About us
          </Link>
        </div>
      </div>
    </main>
  );
}
