'use client'
import { Intro } from '@/components'
import { useIntroStore } from '@/stores'
import { usePathname, redirect } from 'next/navigation'

const ContendIntro = () => {
    const view = useIntroStore(state => state.view)
    const pathName = usePathname()

    if (view === false && pathName === '/') {
        redirect('/app')
    }

    return (
        <>
            {view ? <Intro /> : null}
        </>
    )
}
export default ContendIntro