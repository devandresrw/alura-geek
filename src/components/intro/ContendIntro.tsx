'use client'
import { Intro } from '@/components'
import { useIntroStore } from '@/stores'

const ContendIntro = () => {
    const view = useIntroStore(state => state.view)
    return (
        <>
            {view ? <Intro /> : null}
        </>
    )
}
export default ContendIntro