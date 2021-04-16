import { writable } from 'svelte/store';

const createDarkThemeStore = () => {
   const setDarkTheme = (dark: boolean) => {
      const func = dark ? 'add' : 'remove';
      document.body.classList[func]('dark');
   };
   const prefersDark = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches;
   const isDark =
      localStorage.theme === 'dark' || (!localStorage.theme && prefersDark());

   setDarkTheme(isDark);
   const { subscribe, update, set } = writable(isDark);
   return {
      subscribe,
      toggle: () =>
         update((val: boolean) => {
            const newVal = !val;
            setDarkTheme(newVal);
            localStorage.setItem('theme', newVal ? 'dark' : 'light');
            return newVal;
         }),
      reset: () => {
         if (localStorage.theme) {
            localStorage.removeItem('theme');
         }
         setDarkTheme(prefersDark());
         set(prefersDark());
      },
   };
};

export const darkTheme = createDarkThemeStore();
