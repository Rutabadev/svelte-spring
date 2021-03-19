<script lang="ts">
   import Header from './Header.svelte';
   import Spring from './Spring.svelte';
   import { onMount } from 'svelte';

   export let name: string = 'default world';

   onMount(async () => {
      setTimeout(() => {
         document.documentElement.style.setProperty('--duration-bg', '200ms');
         document.documentElement.style.setProperty('--duration-text', '1.5s');
      }, 100);
   });
</script>

<Header />

<main>
   <h1>Helloooooo I {name}!</h1>
   <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
   </p>
   <div>
      <ul>
         <li>item 1</li>
         <li>item 2</li>
         <li>item 3</li>
         <li>item 4</li>
      </ul>
      <ol>
         <li>item 1</li>
         <li>item 2</li>
         <li>item 3</li>
         <li>item 4</li>
      </ol>
   </div>

   <Spring />
</main>

<style>
   main {
      margin: auto;
      padding: 1rem;
      display: grid;
      gap: 2rem;
   }

   @media (min-width: 480px) {
      main {
         max-width: 80%;
      }
   }

   @media (min-width: 900px) {
      main {
         max-width: 60%;
      }
   }
</style>
