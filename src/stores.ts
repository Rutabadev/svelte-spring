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

const createMuteStore = () => {
   const defaultValue = false || localStorage.sound === 'off';
   const { subscribe, update, set } = writable(defaultValue);
   return {
      subscribe,
      toggle: () =>
         update((val: boolean) => {
            const newVal = !val;
            localStorage.setItem('sound', newVal ? 'off' : 'on');
            return newVal;
         }),
      reset: () => {
         if (localStorage.sound) {
            localStorage.removeItem('sound');
         }
         set(false);
      },
   };
};

export const darkTheme = createDarkThemeStore();
export const mute = createMuteStore();
