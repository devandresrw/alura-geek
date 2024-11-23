import { create } from 'zustand'
import { persist, PersistStorage } from 'zustand/middleware'


interface IntroStore {
    view: boolean
    preloaderView: () => void
    notPreloaderView: () => void
}

const sessionStorage: PersistStorage<IntroStore> = {
    getItem: (name) => {
        const value = window.sessionStorage.getItem(name)
        return value ? JSON.parse(value) : null
    },
    setItem: (name, value) => {
        window.sessionStorage.setItem(name, JSON.stringify(value))
    },
    removeItem: (name) => {
        window.sessionStorage.removeItem(name)
    }

}

export const useIntroStore = create<IntroStore>()(
    persist(
        (set) => ({
            view: true,
            preloaderView: () => set({ view: true }),
            notPreloaderView: () => set({ view: false })
        }),
        {
            name: 'intro',
            storage: sessionStorage,

        }
    )
)