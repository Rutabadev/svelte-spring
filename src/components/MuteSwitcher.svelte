<script lang="ts">
   import { mute } from '../stores';
   import Switch from './Switch.svelte';

   const resetSound = () => {
      if (
         confirm('Do you want to reset the sound to its default setting (on) ?')
      ) {
         mute.reset();
      }
   };

   const handleClick = () => {
      if ($mute) {
         const audio = new Audio('/light-switch.mp3');
         audio.play();
      }
      mute.toggle();
   };
</script>

<Switch on:click={handleClick} on:contextmenu={resetSound}>
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
   >
      {#if $mute}
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clip-rule="evenodd"
         />
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
         />
      {:else}
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
         />
      {/if}
   </svg>
</Switch>
