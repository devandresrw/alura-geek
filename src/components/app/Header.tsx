import Image from "next/image";
import { MenuProducts } from '@/components'

export const Header = () => {

    return (
        <header className="bg-[#9303a6] flex justify-center items-center
        shadow-header">
            <div className="w-full flex flex-row items-center justify-center gap-3
            md:justify-between px-5">
                <div className="flex items-center justify-between gap-3">
                    <Image src="/heards.png" alt="logo" width={80} height={100} />
                    <h1 className="font-pixel font-black text-white text-2xl">Alura Geek</h1>
                </div>
                <MenuProducts />
            </div>
        </header>
    )
}