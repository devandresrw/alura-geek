'use client'

import Image from "next/image"
import { useAnimIntro } from '@/hooks'

export const Intro = () => {
    const { refLogo, refContainer, refHeard1, refHeard2, refHeard3, refHead } = useAnimIntro()
    return (
        <div className="fixed top-0 left-0 h-svh w-svw bg-[#5d04d9] 
         z-40" ref={refContainer}>
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="">
                    <Image
                        src="/portada.png"
                        alt="hero"
                        width={500}
                        height={500}
                        className="filter brightness-0 invert
                        opacity-0"
                        ref={refLogo}
                    />
                </div>
                <div className="mb-6">
                    <h1 className="font-pixel font-extrabold
                    text-white text-4xl uppercase opacity-0"
                        ref={refHead}
                    >A l u r a - G e e k</h1>
                </div>
                <div className="flex justify-center items-center gap-5 h-24">
                    <Image
                        src="/heard.png"
                        alt="heard"
                        width={35}
                        height={35}
                        className="opacity-0"
                        ref={refHeard1}
                    />
                    <Image
                        src="/heard.png"
                        alt="heard"
                        width={35}
                        height={35}
                        className="opacity-0"
                        ref={refHeard2}
                    />
                    <Image
                        src="/heard.png"
                        alt="heard"
                        width={35}
                        height={35}
                        className="opacity-0"
                        ref={refHeard3}
                    />
                </div>
            </div>
        </div>
    )
}