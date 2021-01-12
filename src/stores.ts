import {writable} from 'svelte/store'

const createDarkThemeStore = () => {

    const setDarkTheme = (dark) => {
        const func = dark ? 'add' : 'remove'
        document.body.classList[func]('dark')
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkTheme(isDark)
    const { subscribe, update } = writable(isDark)
    return {
        subscribe,

        toggle: () => update(val => {
            const newVal = !val
            setDarkTheme(newVal)
            return newVal
        })
    }
}

export const darkTheme = createDarkThemeStore()