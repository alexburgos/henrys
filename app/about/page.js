import Link from "next/link";

export default function About() {
  return <main className='flex min-h-screen flex-col items-center justify-center relative'>
    <Link href='/' className='absolute left-2 top-2 scale-150' >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#DA6536' className='size-6'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
      </svg>
    </Link>
    <p className="text-henrys-brown text-lg">Call us for a good time! </p>
    <p className="text-henrys-brown text-lg">(or just to reserve a table) </p>
    <p className="text-henrys-brown text-lg mt-6"> <a href="tel:+34933007695">+34 93 30 07 695</a></p></main >;
}
