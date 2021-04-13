<script context="module">
   export const key = {};
</script>

<script lang="ts">
   import { writable } from 'svelte/store';
   import { setContext } from 'svelte';

   let currentColorId = 0;
   const colors = ['rebeccapurple', 'blue', 'red', 'gold'];
   let color = writable(colors[currentColorId]);
   setContext(key, { getColor: () => color });
</script>

<ul
   on:click={() => {
      currentColorId = (currentColorId + 1) % colors.length;
      $color = colors[currentColorId];
   }}
>
   <slot />
</ul>

<style>
   ul {
      cursor: pointer;
   }
</style>
