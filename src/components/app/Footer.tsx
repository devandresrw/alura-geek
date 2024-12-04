import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className='bg-[#03318c]  flex items-center justify-center
        shadow-footer'>
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between
            px-5 text-white">
                <span>
                    Desarrollado por:
                    <Link href="https://programmer.andresrw.com/" target='_blank'
                        className='underline'> Andrés R.W.</Link>
                </span>
                <span>
                    Alura Latam - 2024
                </span>
            </div>
        </footer>
    )
}