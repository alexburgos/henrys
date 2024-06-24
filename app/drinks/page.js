
import DrinksMenu from '../../public/bebidas.png';
import Image from 'next/image';

export default function Drinks() {
  return <main className='flex min-h-screen flex-col items-center justify-center'>
    <Image src={DrinksMenu} alt='Drinks' width={900} height={900} />
  </main>;
}
