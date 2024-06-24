
import FoodMenu from '../../public/comida.png';
import Image from 'next/image';

export default function Food() {
  return <main className='flex min-h-screen flex-col items-center justify-center'>
    <Image src={FoodMenu} alt='Drinks' width={900} height={900} />
  </main>;
}
