import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className='bg-[#03318c] h-[15vh] flex items-center justify-center
        shadow-footer'>
            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-center gap-3">
                    <Image src="/heards.png" alt="logo" width={60} height={40} />
                    <h1 className="font-pixel font-black text-white text-xl">Alura Geek</h1>
                </div>
                <div className="flex flex-col justify-center items-center 
                text-white">
                    <span>
                        Desarrollado por:
                        <Link href="https://programmer.andresrw.com/" target='_blank'
                            className='underline'> Andrés R.W.</Link>
                    </span>
                    <span>
                        Alura Latam - 2024
                    </span>
                </div>
            </div>
        </footer>
    )
}