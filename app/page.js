import Image from 'next/image';
import localFont from 'next/font/local';

import HenrysLogo from '../public/Henrys.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Image
        src={HenrysLogo}
        alt='Henrys Logo'
        width={750}
        height={750}
        className='mb-24'
      />
      <div className='flex flex-col sm:w-full md:w-auto md:flex-row space-y-6 md:space-y-0 md:space-x-10 text-center'>
        <Link
          href='/food'
          className='w-56 border-2 border-henrys text-henrys-beige bg-henrys cursor-pointer hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
        >
          Food
        </Link>
        <Link
          href='/drinks'
          className='w-56 border-2 border-henrys text-henrys-beige bg-henrys cursor-pointer hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
        >
          Drinks
        </Link>
        <Link
          href='/about'
          className='w-56 border-2 border-henrys text-henrys-beige bg-henrys cursor-pointer hover:bg-henrys-beige hover:border-henrys hover:text-henrys'
        >
          About us
        </Link>
      </div>
    </main>
  );
}
