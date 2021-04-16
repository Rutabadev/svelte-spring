import { writable } from 'svelte/store';

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

export const mute = createMuteStore();
