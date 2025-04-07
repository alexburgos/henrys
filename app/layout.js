import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

import Instagram from '../public/instagram.webp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Henry\'s Cocktail Bar',
  description: 'A Brooklyn bar in Poblenou, Barcelona',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-henrys-beige text-henrys-brown p-4 relative`}>{children}
        <footer className='flex justify-between items-center w-full md:px-6 min-h-[10vh]'>
          {/* Icons made by Freepik (https://www.flaticon.com/authors/freepik) from https://www.flaticon.com */}
          <a href='https://www.instagram.com/henrys.cocktailbar/' target='_blank' rel='noreferrer'>
            <Image
              className='md:hover:scale-110 transition-all'
              src={Instagram}
              alt='Instagram'
              width={32}
              height={32}
              priority
              loading="eager"
            />
          </a>
          <p className='flex items-center'>Made with 🖤 by &nbsp; <a href='https://github.com/alexburgos' target='_blank' rel='noreferrer' className='md:hover:text-henrys-orange'> Alex Burgos</a></p>
        </footer>
      </body>
    </html>
  );
}
