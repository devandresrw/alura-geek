import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useIntroStore } from '@/stores'

export const useAnimIntro = () => {
    const refContainer = useRef<HTMLDivElement>(null)
    const refLogo = useRef<HTMLImageElement>(null)
    const refHead = useRef<HTMLHeadingElement>(null)
    const refHeard1 = useRef<HTMLImageElement>(null)
    const refHeard2 = useRef<HTMLImageElement>(null)
    const refHeard3 = useRef<HTMLImageElement>(null)

    const notPreloaderView = useIntroStore(state => state.notPreloaderView)


    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.inOut',
                duration: 0.5,

            },
            onComplete: () => {
                //Cambiar el stado 
                console.log('onComplete')
                notPreloaderView()
                tl.kill()
            }
        })

        tl.to(refLogo.current, { opacity: 1 })
        tl.to(refHead.current, { opacity: 1 })
        tl.to(refHeard1.current, { opacity: 1 })
        tl.to(refHeard2.current, { opacity: 1 })
        tl.to(refHeard3.current, { opacity: 1 })
        tl.to(refHeard1.current, { zoom: 1.2 })
        tl.to(refHeard1.current, { zoom: 1 })
        tl.to(refHeard2.current, { zoom: 1.2 })
        tl.to(refHeard2.current, { zoom: 1 })
        tl.to(refHeard3.current, { zoom: 1.2 })
        tl.to(refHeard3.current, { zoom: 1 })
        tl.to(refHeard1.current, { zoom: 1.2 })
        tl.to(refHeard1.current, { zoom: 1 })
        tl.to(refHeard2.current, { zoom: 1.2 })
        tl.to(refHeard2.current, { zoom: 1 })
        tl.to(refHeard3.current, { zoom: 1.2 })
        tl.to(refHeard3.current, { zoom: 1 })
        tl.to(refContainer.current, { opacity: 0 })


    })

    return {
        refContainer,
        refHead,
        refLogo,
        refHeard1,
        refHeard2,
        refHeard3,
    }

}